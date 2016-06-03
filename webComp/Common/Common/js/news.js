/**
 * Created by Will Bean on 2016/2/29.
 */
var navBtn = getElement("#nav-btn"),
    headers = getElement(".header"),
    switchBtn = getElement(".header-switch"),
    wrap = getElement("#wrap"),
    nav = getElement("#nav"),
    slideToSec = getElement("#slideToSection a"),
    sections = getElement("section"),
    isPhone = false,
    lis = getElement("#section1 li");

EventUtil.addHandler(window,"load",function(){
    navControl();
    headerControl();
    initAutoPlay();
    slideToSection();
    gotoTop();

    notPhone(function(){
        new StarObj.UI();
        new DandelionObj.UI();
        mouseMove();

        liFadeIn()
    });

});
function getScrollTop(){
    return document.body.scrollTop || document.documentElement.scrollTop
}
function each(elems,callback){
    for(var i =0; i < elems.length; i++){
        callback.call(elems[i])
    }
}
function liFadeIn(){
    EventUtil.addHandler(document,"scroll",function(){
        each(lis,function(){console.log(sections.offsetTop - this.offsetTop -213 - getScrollTop() )
            if(sections.offsetTop + this.offsetTop +213 - getScrollTop() < window.innerHeight / 5*4){

                addClass(this,"fadeIn")
            }
        })
    })
}
//�ص�����
function gotoTop(){
    var btn = getElement("#gotoTop");
    EventUtil.addHandler(btn,"click",function(){
        goTo(headers[0], 500);
    })
}

//����Section1
function slideToSection(){
    EventUtil.addHandler(slideToSec,"click",function(){
        goTo(sections,300)
    })
}
//��������
function goTo(elem , time){
    var destination = elem.offsetTop,
        currentScrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY,
        delta = Math.abs(destination - currentScrollTop),
        speed = delta / time * 17,
        animId = null,
        dir = destination - currentScrollTop > 0 ;//true�»�
    if(!dir){
        speed = -speed;
    }
    loop();
    function getScrollTop(){
        currentScrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY
    }
    function loop(){
        animId = window.requestAnimationFrame(loop);
        getScrollTop();
        if( Math.abs(destination - currentScrollTop) <= Math.abs(speed) ||
            Math.abs(currentScrollTop-((document.body.offsetHeight||document.documentElement.offsetHeight)-window.innerHeight))<0.1){
            window.cancelAnimationFrame(animId);
            window.scrollTo(0 ,destination);
        }
        window.scrollTo(0 , currentScrollTop + speed);
    }
}
//�Զ�����
var autoPlayer = {
    autoPlayerId : null,
    currentIndex : 0,
    autoPlay : function(){
        var _this = this;
        this.autoPlayerId = setInterval(function(){
            _this.currentIndex = _this.currentIndex >= 2 ? 0 : _this.currentIndex + 1;
            switchBtn[_this.currentIndex].click();
        },5000)
    },
    stopAutoPlay : function(){
        var _this = this;
        EventUtil.addHandler(getElement("header"),"mouseover",function(){

            clearTimeout(_this.autoPlayerId);
        })
    },
    restartAutoPlay : function(){
        EventUtil.addHandler(getElement("header"),"mouseleave",function(){
            autoPlayer.autoPlay();
        })
    }
};
function initAutoPlay(){
    autoPlayer.autoPlay();
    autoPlayer.stopAutoPlay();
    autoPlayer.restartAutoPlay();
}
//��������
function navControl(){
    EventUtil.addHandler(navBtn,"click",function(){
        toggleClass(navBtn,"open");
        toggleClass(wrap,"off");
        toggleClass(nav,"on");
    });
    EventUtil.addHandler(getElement(".nav-cont a"),"click",function(){
        toggleClass(navBtn,"open");
        toggleClass(wrap,"off");
        toggleClass(nav,"on");
    })
}
//ͷ������
function headerControl(){
    EventUtil.addHandler(switchBtn,"click",function(){
        var index = getIndex(this);
        removeClass(getElement(".current"),"current");
        addClass(this,"current");
        removeClass(getElement(".animationDown"),"animationDown");
        addClass(headers[index].getElementsByTagName("h2")[0],"animationDown");
        for(var i = 0, len = headers.length; i < len;i++){
            if(i>index){
                addClass(headers[i],"slideUp");

            }else{
                removeClass(headers[i],"slideUp");
            }
        }
    })
}
//����PC������
function notPhone(callback){
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; isPhone = true; break; }
    }
    if(flag){
        callback();
    }
}
//����
var StarObj = {
    canvas : null,
    ctx : null,
    stars : [],
    w : headers[2].offsetWidth,
    h : headers[2].offsetHeight,
    starPic : new Image(),
    animateId : null,
    deltaTime : 0,
    lastTime : 0,
    timer : 0
};
StarObj.UI = function(){
    this.starInit();
};
StarObj.UI.prototype.starInit = function(){
    var _this = this;

    StarObj.starPic.src = getCommonPath() + "/images/star.png";
    this.createCanvas();
    EventUtil.addHandler(headers[2],"mouseenter",function(event){
        gameLoop();
    });
    EventUtil.addHandler(headers[2],"mousemove",function(event){
        var e = EventUtil.getEvent(event);

        StarObj.timer += StarObj.deltaTime;
        if(StarObj.timer > 500){
            var star = new StarObj.Star(e);
            star.draw();
            StarObj.stars.push(star);
            StarObj.timer = 0;
        }

    });
    EventUtil.addHandler(headers[2],"mouseleave",function(event){
        _this.cleanCanvas();
        window.cancelAnimationFrame(StarObj.animateId);
    })
};
StarObj.UI.prototype.createCanvas = function(){
    StarObj.canvas = document.createElement("canvas");
    StarObj.ctx = StarObj.canvas.getContext("2d");

    StarObj.canvas.width = StarObj.w;
    StarObj.canvas.height = StarObj.h;
    StarObj.canvas.style.position = "absolute";
    StarObj.canvas.style.top = "0px";
    StarObj.canvas.style.left = "0px";

    headers[2].insertBefore(StarObj.canvas,headers[2].childNodes[0]);
};
StarObj.UI.prototype.cleanCanvas = function(){
    StarObj.ctx.clearRect(0 ,0 ,StarObj.w ,StarObj.h );
    StarObj.stars = [];
};
StarObj.Star = function(event){
    this.x = event.clientX;
    this.y = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop );
    this.picNo = 0;
    this.timer = 0;
};
StarObj.Star.prototype.draw = function() {
    StarObj.ctx.drawImage(StarObj.starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
};
StarObj.Star.prototype.update = function(){
    this.timer += StarObj.deltaTime;
    if (this.timer > 30) {
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
    }
    this.draw();
};
function gameLoop(){
    StarObj.animateId = window.requestAnimationFrame(gameLoop);
    var now = Date.now();
    StarObj.deltaTime = now - StarObj.lastTime;
    StarObj.lastTime = now;
    StarObj.ctx.clearRect(0 ,0 ,StarObj.w ,StarObj.h );

    var i;
    for( i = 0; i< StarObj.stars.length; i++){
        StarObj.stars[i].update();
    }
}

//�ѹ�Ӣ
var DandelionObj = {
    canvas : null,
    ctx : null,
    dandelions : [],
    w : headers[0].offsetWidth,
    h : headers[0].offsetHeight,
    dandelionPic : new Image(),
    animateId : null,
    deltaTime : 0,
    lastTime : 0,
    timer : 0
};
DandelionObj.UI = function(){
    this.dandelionInit(headers[0]);
};
DandelionObj.UI.prototype.dandelionInit = function(elem){
    var _this = this;

    DandelionObj.dandelionPic.src = getCommonPath() + "/images/dandelion.png";

    this.createCanvas(elem);
    EventUtil.addHandler(elem,"mouseenter",function(event){
        gameLoop2();
    });
    EventUtil.addHandler(elem,"mousemove",function(event){
        var e = EventUtil.getEvent(event);
        if(DandelionObj.animateId == null){
            gameLoop2();
        }

        DandelionObj.timer += DandelionObj.deltaTime < 15 ? 17 : DandelionObj.deltaTime;
        if(DandelionObj.timer > 500){
            DandelionObj.timer = 1;
            var Dandelion = new DandelionObj.Dandelion(e);
            Dandelion.draw();
            DandelionObj.dandelions.push(Dandelion);

        }

    });
    EventUtil.addHandler(elem,"mouseleave",function(event){
        _this.cleanCanvas();
        window.cancelAnimationFrame(DandelionObj.animateId);
    })
};
DandelionObj.UI.prototype.createCanvas = function(){
    DandelionObj.canvas = document.createElement("canvas");
    DandelionObj.ctx = DandelionObj.canvas.getContext("2d");

    DandelionObj.canvas.width = DandelionObj.w;
    DandelionObj.canvas.height = DandelionObj.h;
    DandelionObj.canvas.style.position = "absolute";
    DandelionObj.canvas.style.top = "0px";
    DandelionObj.canvas.style.left = "0px";

    headers[0].insertBefore(DandelionObj.canvas, headers[0].childNodes[0]);
};
DandelionObj.UI.prototype.cleanCanvas = function(){
    DandelionObj.ctx.clearRect(0 ,0 ,DandelionObj.w ,DandelionObj.h );
    DandelionObj.dandelions = [];
};
function gameLoop2(){
    DandelionObj.animateId = window.requestAnimationFrame(gameLoop2);
    var now = Date.now();
    DandelionObj.deltaTime = now - DandelionObj.lastTime;
    DandelionObj.lastTime = now;
    DandelionObj.ctx.clearRect(0 ,0 ,DandelionObj.w ,DandelionObj.h );

    var i;
    for( i = 0; i< DandelionObj.dandelions.length; i++){
        DandelionObj.dandelions[i].update();
    }
}
DandelionObj.Dandelion = function(event){
    this.x = event.clientX;
    this.y = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop ) - 20;
    this.index = Math.floor(Math.random() * 6);
    this.xSpd = Math.random() * 2;
    this.currentX = this.x;
    this.currentY = this.y;
    this.timer = 0;
    //this.roadPath = Math.pow(this.xSpd,2) / 300
};
DandelionObj.Dandelion.prototype.draw = function() {
    DandelionObj.ctx.drawImage(DandelionObj.dandelionPic, this.index * 40, 0, 40, 40, this.currentX, this.currentY, 40, 40);
};
DandelionObj.Dandelion.prototype.update = function(){

    this.timer += DandelionObj.deltaTime;
    if (this.timer > 40) {
        this.timer = 0;
        this.currentX = this.x + this.xSpd;
        this.currentY = this.y - Math.pow(this.xSpd,2) / 300;
        this.xSpd += this.xSpd;
    }
    if( this.currentX > DandelionObj.w || this.currentY < 0){
        DandelionObj.dandelions.shift();
    }else{
        this.draw();
    }

};

//header2��껬��Ч��
function mouseMove(){
    var Ship = function(elem,speed){
        this.x = elem.offsetLeft;
        this.speed = speed;
        this.elem = elem;
    };
    Ship.prototype.move = function(){
        this.elem.style.left = (this.x + this.speed * ev.clientX) + "px";
    };
    var animId = null,
        ships = [],
        ev;
    ships.push(new Ship(getElement(".ship-s1"),0.4));
    ships.push(new Ship(getElement(".ship-s2"),0.6));
    ships.push(new Ship(getElement(".bird1"),-0.6));
    ships.push(new Ship(getElement(".bird2"),-0.6));
    ships.push(new Ship(getElement(".bird3"),-0.6));

    EventUtil.addHandler(document,"mousemove",function(event){
        ev = EventUtil.getEvent(event);
        if(animId == null){
            moveLoop();
        }
    });

    function moveLoop(){
        animId = window.requestAnimationFrame(moveLoop);
        for(var i = 0; i < ships.length; i++){
            ships[i].move();
        }
    }
}