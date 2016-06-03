/**
 *
 * Created by Will Bean on 2016/2/18.
 */
var canvas,
    ctx,
    wordCan,
    wordCtx,
    w,
    h,
    num,
    clientX,
    animateId,
    timerId = null,
    isPhone = false;

var words = ["F","#","@","!","&","%","$","A","b"];
var word = [];
window.onresize = function(){
    //init();
    window.cancelAnimationFrame(animateId);
    clearTimeout(timerId);
    timerId = setTimeout(function(){
        cleanCanvas();
        word = [];
        S.words = [];
        init()
    },300);
};
function init(){
    canvas = document.querySelector("#canvas"),
        ctx = canvas.getContext("2d"),
        wordCan = document.querySelector("#word-canvas"),
        wordCtx = wordCan.getContext("2d"),
        w = canvas.width = document.body.clientWidth,
        h = canvas.height = 8000,
        num = 1000;

    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { isPhone = true; break; }
    }
    if(isPhone){
        num = 0;
        h = canvas.height = 2000
    }
    var btn = document.getElementById("btn");
    btn.style.top = (h - window.innerHeight/4) + "px";

    wordCan.width = w;
    wordCan.height = window.innerHeight;
    var gradient = ctx.createLinearGradient(w/2,0,w/2,h);
    gradient.addColorStop(0, "#000");
    gradient.addColorStop(1, "#fff");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    new S.Letter("网络文明");

    for(var i = 0 ;i<num;i++){
        var aword = new Word(words[Math.floor(Math.random() * words.length)]);
        word.push(aword);
    }
    getMousePosition();

    gameLoop();

}
function cleanCanvas(){
    wordCtx.clearRect(0,0,w,window.innerHeight);
}
function gameLoop(){
    animateId = window.requestAnimFrame(gameLoop);
    wordCtx.clearRect(0,0,w,window.innerHeight);
    var i;
    for( i = 0; i<word.length; i++){
        word[i].redraw();
    }
    for( i = 0; i< S.words.length; i++){
        S.words[i].redraw();
    }
}
function getMousePosition(){
    document.body.addEventListener("mousemove",function(event){
        clientX = event.clientX;
    },false);
}
var Word = function(val){
    this.value = val;
    this.fontSize = Math.ceil(Math.random() * S.times + S.times);
    this.beginMoveHeight = isPhone ? Math.random() * 2000 : Math.random() * 6000;
    this.ratio = Math.random() > 0.5 ? Math.random() * 0.5 + 0.5 : -(Math.random() * 0.5 + 0.5);//[0.5,1)
    this.ratioX = Math.random() > 0.5 ? Math.random() * 30 / w : -(Math.random() * 30 / w);
    this.x = Math.random() * w;
    this.y = Math.random() * window.innerHeight;
    this.isBold = Math.random() > 0.5 ;
    this.color = "rgba(" + Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+",1)";
    this.currentX = this.x;
    this.currentY = this.y;
    this.drawWord();
};
Word.prototype.drawWord = function(){
    if(this.isBold)
        wordCtx.font = "bold " + this.fontSize + "px Arial,宋体";
    else
        wordCtx.font = this.fontSize + "px Arial,宋体";
    wordCtx.fillStyle = this.color;
    wordCtx.fillText(this.value,this.currentX,this.currentY);
};
Word.prototype.movable = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop  > this.beginMoveHeight){
        this.currentY = this.y - (  scrollTop - this.beginMoveHeight )*this.ratio ;
    }
};
Word.prototype.mouseMove = function(){
    this.currentX = this.x + clientX * this.ratioX;
};
Word.prototype.redraw = function(){
    //ctx.save();
    this.movable();
    this.mouseMove();
    //this.currentY = this.y + document.body.scrollTop;
    this.drawWord();
    //ctx.restore();
};
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();


var S = {
    times : 0,//放大倍数
    words : [],
    num : 100,//单词数量,
    dataArray : [],
    leftGap : 0,//左边距
    topGap : 0,
    letterSize : 12,//字体大小
    w : 0
};
S.Letter = function(letter){
    this.canvas = document.createElement("canvas");
    //document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.value = letter;


    this.letterLength = letter.length;
    S.w = this.canvas.width = S.letterSize * this.letterLength;//若为英文需除以2
    this.canvas.height = (S.letterSize + 1 );//同上 +1以兼容firefox

    S.times = Math.floor(window.innerWidth / this.canvas.width < window.innerHeight / this.canvas.height ?
    window.innerWidth / this.canvas.width /4*3:window.innerHeight / this.canvas.height/4*3);

    S.dataArray = this.createDataArray();
    S.leftGap = ( window.innerWidth - this.canvas.width * S.times )/2;
    S.topGap = ( window.innerHeight - this.canvas.height * S.times )/3;

    this.createWords();
};
S.Letter.prototype.createDataArray = function(){
    var dataArray = [];
    this.ctx.fillStyle = "#000";
    this.ctx.textBaseline = "top";
    this.ctx.font =  S.letterSize +"px Arial,宋体";
    this.ctx.fillText(this.value,0,1);

    var data = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data;
    for(var i = 0; i < data.length; i+=4){
        if(data[i+3]){
            dataArray.push(i/4);
        }
    }
    return dataArray;
};
S.Letter.prototype.createWords = function(){
    for(var i = 0;i < S.dataArray.length ; i++){
        S.words.push(new S.Word(words[Math.floor(Math.random() * words.length)],i));
    }
};

S.Word = function(val,order){
    this.value = val;
    this.fontSize = Math.ceil(Math.random() * S.times + S.times);
    this.beginMoveHeight = isPhone ? Math.random() * 1000 : Math.random() * 3500 + 3500;
    this.x = Math.random() * w;
    this.y = Math.random() * window.innerHeight;
    this.isBold = Math.random() > 0.5 ;
    this.color = "rgba(" + Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+",1)";
    this.currentX = this.x;
    this.currentY = this.y;

    var position = this.getPosition(order);
    this.finalX = position.x;
    this.finalY = position.y;

    this.distanceX = this.x - this.finalX;
    this.distanceY = this.y - this.finalY;
    this.ratioX = this.distanceX / (canvas.height - window.innerHeight -this.beginMoveHeight);
    this.ratioY = this.distanceY / (canvas.height - window.innerHeight -this.beginMoveHeight);

    this.mouseatioX = Math.random() > 0.5 ? Math.random() * 20 / w : -(Math.random() * 20 / w);

    this.drawWord();
};
S.Word.prototype.getPosition = function(order){
    var row,col;//行 列
    row = Math.floor(S.dataArray[order] / S.w);
    col = S.dataArray[order] % S.w;

    return {
        x : col * S.times + S.leftGap,
        y : row * S.times + S.topGap
    }
};
S.Word.prototype.getDistance = function(){
    return Math.sqrt((this.x - this.finalX)*(this.x - this.finalX) + (this.y - this.finalY)*(this.y - this.finalY))
};
S.Word.prototype.drawWord = function(){
    if(this.isBold)
        wordCtx.font = "bold " + this.fontSize + "px Arial,宋体";
    else
        wordCtx.font = this.fontSize + "px Arial,宋体";
    wordCtx.fillStyle = this.color;

    if(Math.abs(this.currentX - this.finalX) < 2 || Math.abs(this.currentY - this.finalY) < 2){
        //wordCtx.fillStyle = "#000";
        this.currentX = this.finalX + Math.random() * 2 - 1;
        this.currentY = this.finalY + Math.random() * 2 - 1;
    }

    wordCtx.textAlign = "center";
    wordCtx.textBaseline = "top";
    wordCtx.fillText(this.value,this.currentX,this.currentY);
};
S.Word.prototype.movable = function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop  > this.beginMoveHeight){
        this.currentY = this.y - (  scrollTop - this.beginMoveHeight )*this.ratioY ;
        this.currentX = this.x - (  scrollTop - this.beginMoveHeight )*this.ratioX ;

    }
};
S.Word.prototype.redraw = function(){
    //ctx.save();

    this.movable();
    //this.currentX = this.x + clientX * this.mouseatioX;
    this.drawWord();
    //ctx.restore();
};
window.onload = init;
