/*
 * 2016.2.29
 * Everor
 */
var submit = document.getElementById('submit');
submit.onclick = function() {
    var data = {
        'name': '我的天'
    };
    var xmlhttp;
    if(window.XMLHttpRequest) {
        //for IE7+ Firefox Chrome Opera Safari
        xmlhttp = new XMLHttpRequest();
    }else {
        //for IE6 IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.status == 1) {
                alert(obj.message);
            }else {
                alert(obj.message);
            }
        }
    };
    var contactUrl = getRootPath() + "/index.php/Home/Index/add_contact";
    xmlhttp.open("post", contactUrl, true);
    xmlhttp.send(data);
}