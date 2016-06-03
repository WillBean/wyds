/**
 * Created by Will Bean on 2016/2/17.
 */
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls  )) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj,cls){
    if(hasClass(obj,cls)){
        removeClass(obj, cls);
    }else{
        addClass(obj, cls);
    }
}

function getElement(selector){
    var elems =  document.querySelectorAll(selector);
    if(elems.length == 1){
        return elems[0];
    } else{
        return elems;
    }

}

function getIndex(_this){
    return parseInt(_this.getAttribute("index"));
}

var EventUtil = {
    addHandler: function(element, type, handler){
        if(element.length>1){
            for(var len = element.length,i = 0; i<len;i++){
                var ele = element[i];
                if(ele.addEventListener){
                    ele.addEventListener(type,handler,false);
                }else if(ele.attachEvent){
                    ele.attachEvent("on"+type,handler);
                }else{
                    ele["on"+type] = handler;
                }
            }
        }else{
            if(element.addEventListener){
                element.addEventListener(type,handler,false);
            }else if(element.attachEvent){
                element.attachEvent("on"+type,handler);
            }else{
                element["on"+type] = handler;
            }
        }
    },

    removeHandler: function(element, type, handler){
        if(element.removeEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type] = null;
        }
    },

    getEvent: function(event){
        return event ? event : window.event;
    },

    getTarget: function(event){
        return event.target ? event.target : event.srcElement;
    },

    preventDefault: function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
    },

    stopPropagation: function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    },

    getButton: function(event){//获取鼠标按钮
        if(document.implementation.hasFeature("MouseEvents","2.0")){
            return event.button;
        }else {
            switch (event.button){
                case 0:case 1:case 3:case 5:case 7:
                return 0;//没有按下按钮
                case 2:case 6:
                return 2;//按下了次鼠标按钮
                case 4:
                    return 1;//按下了主鼠标按钮
            }
        }
    },

    getWheelDelta: function(event){//获取鼠标滚轮方向 120/-120
        if(event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        }else {
            return -event.detail * 40;
        }
    },

    getCharCode: function(event){
        if(typeof event.charCode == "number"){
            return event.charCode;
        }else{
            return event.keyCode;
        }
    },

    getCilpboardText: function(event){//获取剪切板数据
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text")
    },

    setCilpboardText: function(event,value){//设置剪切板数据
        if(event.clipboardData){
            return event.clipboardData.setData("text/plain",value);
        }else if(window.clipboardData){
            return window.clipboardData.setData("text",value);
        }
    }
};