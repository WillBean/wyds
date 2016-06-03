/**
 * Created by Will Bean on 2016/2/21.
 */
var lastTime = 0;
var prefixes = 'webkit moz ms o'.split(' '); //�������ǰ׺

var requestAnimationFrame = window.requestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame;

var prefix;
//ͨ�������������ǰ׺�����õ�requestAnimationFrame��cancelAnimationFrame�ڵ�ǰ�������ʵ����ʽ
for( var i = 0; i < prefixes.length; i++ ) {
    if ( requestAnimationFrame && cancelAnimationFrame ) {
        break;
    }
    prefix = prefixes[i];
    requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
    cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] || window[ prefix + 'CancelRequestAnimationFrame' ];
}

//�����ǰ�������֧��requestAnimationFrame��cancelAnimationFrame������˵�setTimeout
if ( !requestAnimationFrame || !cancelAnimationFrame ) {
    requestAnimationFrame = function( callback, element ) {
        var currTime = new Date().getTime();
        //Ϊ��ʹsetTimteout�ľ����ܵĽӽ�ÿ��60֡��Ч��
        var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
        var id = window.setTimeout( function() {
            callback( currTime + timeToCall );
        }, timeToCall );
        lastTime = currTime + timeToCall;
        return id;
    };

    cancelAnimationFrame = function( id ) {
        window.clearTimeout( id );
    };
}

//�õ����ݸ��������API
window.requestAnimationFrame = requestAnimationFrame;
window.cancelAnimationFrame = cancelAnimationFrame;