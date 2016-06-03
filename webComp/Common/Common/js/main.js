/**
 * Created by Will Bean on 2016/2/17.
 */
var navBtn = getElement("#nav-btn"),
    headers = getElement(".header"),
    switchBtn = getElement(".header-switch"),
    wrap = getElement("#wrap"),
    nav = getElement("#nav"),
    slideToSec = getElement("#slideToSection a"),
    sections = getElement("section"),
    pictureBtns = getElement(".picture-item a"),
    pictureWrap = getElement("#picture-wrap"),
    pictureArea = getElement("#picture-area"),
    popupBg = getElement("#popup-bg"),
    closeBtn = getElement("#close-btn"),
    isPhone = false;

EventUtil.addHandler(window,"load",function(){
    navControl();
    headerControl();
    initAutoPlay();
    slideToSection();
    showPicture();
    gotoTop();

    notPhone(function(){
        new StarObj.UI();
        new DandelionObj.UI();
        mouseMove();

        initTipSlide();
    });

});
//�ص�����
function gotoTop(){
    var btn = getElement("#gotoTop");
    EventUtil.addHandler(btn,"click",function(){
        goTo(headers[0], 500);
    })
}
//��������Ч��
function getScrollTop(){
    return document.body.scrollTop || document.documentElement.scrollTop
}
var container = getElement(".container");
var Tip = function(elem, startTop, direction){
    this.elem = elem;
    this.startTop = startTop;
    this.height = this.elem.offsetHeight;
    this.left = -500;
    this.direction = direction == "right" ;//true���ң�false����
    this.hSpd = ( container[0].offsetWidth / 2 - this.left - 40 - this.elem.offsetWidth ) / this.height;
    this.elem.style.display = "none";
    this.oSpd = 1 / this.height;
    this.elem.style.opacity = 0;
};
Tip.prototype.horizontalMove = function(){
    var scrollTop = getScrollTop();
    if(scrollTop >= this.startTop ){
        if(this.elem.style.display != "block")
            this.elem.style.display = "block";
        if(this.direction && scrollTop - this.startTop <= this.height) {
            this.elem.style.left = this.left + (scrollTop - this.startTop) * this.hSpd + "px";
            this.elem.style.opacity =  (scrollTop - this.startTop) * this.oSpd
        }else if(!this.direction && scrollTop - this.startTop <= this.height){
            this.elem.style.right = this.left + (scrollTop - this.startTop) * this.hSpd + "px";
            this.elem.style.opacity =  (scrollTop - this.startTop) * this.oSpd
        }else if(this.direction && scrollTop - this.startTop > this.height){
            this.elem.style.left = container[0].offsetWidth / 2 - this.elem.offsetWidth - 40 + "px";
            this.elem.style.opacity = 1;
        }else if(!this.direction && scrollTop - this.startTop > this.height){
            this.elem.style.right = container[0].offsetWidth / 2 - this.elem.offsetWidth - 40 + "px";
            this.elem.style.opacity = 1;
        }
    }else{
        if(this.direction){
            this.elem.style.left = "0";
        }else{
            this.elem.style.right = "0";
        }
        this.elem.style.display = "none";
        this.elem.style.opacity = 0;
    }
};
function initTipSlide(){
    var tips = [];
    tips.push(new Tip(getElement("#tip1"), 1500, "right"));
    tips.push(new Tip(getElement("#tip2"), 1800, "left"));
    tips.push(new Tip(getElement("#tip3"), 2100, "right"));
    tips.push(new Tip(getElement("#tip4"), 2400, "left"));
    tips.push(new Tip(getElement("#tip5"), 2700, "right"));
    tips.push(new Tip(getElement("#tip6"), 3000, "left"));

    function loop(){
        window.requestAnimationFrame(loop);
        for(var i = 0; i < tips.length; i++){
            tips[i].horizontalMove();
        }
    }
    loop();
}

//ͼƬ����
var height = 360;
function loadImg(src){
    if(src != null){
        var img = new Image();
        img.src = src;
        EventUtil.addHandler(img,"load",function(){
            pictureArea.innerHTML = "";

            if(isPhone && img.width > window.innerWidth){
                pictureWrap.style.width = window.innerWidth * 0.95 + "px";
                pictureWrap.style.height = img.height / img.width * window.innerWidth * 0.95 + closeBtn.offsetHeight + "px";
            }else{
                pictureWrap.style.width = img.width + "px";
                pictureWrap.style.height = img.height + closeBtn.offsetHeight + "px";
            }
            pictureWrap.style.marginLeft = -parseInt(pictureWrap.style.width)/2 + "px";
            height = parseInt(pictureWrap.style.height);
            pictureWrap.style.top = (document.body.scrollTop || document.documentElement.scrollTop || window.scrollY) +
                (window.innerHeight - height) / 2 + "px";
            pictureArea.appendChild(img);
        });
    }else{
        pictureArea.innerHTML = "";
    }
}
function showPopup(){
    popupBg.style.display = "block";
    //pictureWrap.style.display = "block";
    pictureWrap.style.height = height + "px";
    pictureWrap.style.top = (document.body.scrollTop || document.documentElement.scrollTop || window.scrollY) +
        (window.innerHeight - height) / 2 + "px";
    addClass(pictureWrap,"show");
}
function hidePopup(){
    popupBg.style.display = "none";
    pictureWrap.style.height = 0 ;
    removeClass(pictureWrap,"show");
    EventUtil.removeHandler(popupBg,"click",hidePopup);
}
function showPicture(){
    EventUtil.addHandler(pictureBtns,"click",function(){
        loadImg(this.getAttribute("dataSrc"));
        showPopup();
        EventUtil.addHandler(popupBg,"click",hidePopup);
        EventUtil.addHandler(closeBtn,"click",hidePopup);
    });
}
//����Section1
function slideToSection(){
    EventUtil.addHandler(slideToSec,"click",function(){
        goTo(sections[0],300)
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
        if( Math.abs(destination - currentScrollTop) <= Math.abs(speed)){
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