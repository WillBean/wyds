<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0, initial-scale=1, maximum-scale=1,user-scalable=no">
    <meta name="HandheldFriendly" content="true">
    <link rel="stylesheet" href="<?php echo C('COMMON');?>/css/news.css" type="text/css"/>
</head>
<body>
<div id="nav" class="transition">
    <div class="nav-cont">
        <a href="index.html#header">HEADER</a>
        <a href="index.html#section1">网络行为</a>
        <a href="index.html#section2">精彩博文</a>
        <a href="index.html#section3">关于我们</a>
        <a href="index.html#section4">联系我们</a>
        <a href="news.html">新闻中心</a>
        <a href="before.html" id="show">效果展示</a>
    </div>
</div>
<nav>
    <div class="container">
        <div id="logo"></div>
        <a href="javascript:void(0)" id="nav-btn">
            <span class="transition"></span>
        </a>
    </div>
</nav>
<div id="wrap" class="transition">
    <header id="header">
        <div class="header header1 transition">
            <div class="container paddingTop100">
                <h2 class="animationDown">When <br>I don't know the truth, <br>you can at least keep silent.</h2>
            </div>
        </div>
        <div class="header header2 slideUp transition">
            <div class="container paddingTop100 overflow">
                <img src="<?php echo C('COMMON');?>/images/ship-s1.png" alt="ship" class="ship-s1"/>
                <img src="<?php echo C('COMMON');?>/images/ship-s1.png" alt="ship" class="ship-s2"/>
                <img src="<?php echo C('COMMON');?>/images/bird.png" alt="ship" class="bird1"/>
                <img src="<?php echo C('COMMON');?>/images/bird.png" alt="ship" class="bird2"/>
                <img src="<?php echo C('COMMON');?>/images/bird.png" alt="ship" class="bird3"/>

                <img src="<?php echo C('COMMON');?>/images/ship.png" alt="ship" class="ship"/>

                <h2>Every journey <br>begins with a single step, <br>civilized Internet begins with fingertips.</h2>

            </div>
        </div>
        <div class="header header3 slideUp transition">
            <div class="container paddingTop100">
                <h2>Let's <br>give the network's blue sky, <br>a piece of pure land in the mind.</h2>
            </div>
        </div>

        <div id="header-switch-cont">
            <a href="javascript:void(0)" class="header-switch header-switch1 current" index="0"></a>
            <a href="javascript:void(0)" class="header-switch header-switch2" index="1"></a>
            <a href="javascript:void(0)" class="header-switch header-switch3" index="2"></a>
        </div>
    </header>
    <div id="slideToSection">
        <a href="javascript:void(0)"></a>
    </div>
    <section id="section1">
        <div class="container ">
            <div class="section-head">
                <h3>相关新闻</h3>
            </div>
            <div class="news-content">
                <ul id="news">
                </ul>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <a href="javascript:void(0)" id="gotoTop">goto top</a>
            <div id="copyRight">
                <h5>CopyRight&copy;2016</h5>
            </div>
        </div>
    </footer>

    <script>
        function getCommonPath() {
            return "<?php echo C('COMMON');?>";
        }
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
                var data = JSON.parse(xmlhttp.responseText);
                var newsDom = document.getElementById("news");
                for(var i = 0;i < data.length;i++) {
                    newsDom.innerHTML += '<li><a href="#" target="_blank">' + data[i].title + '</a></li>';
                }
            }
        };
        var newsUrl = "<?php echo U('Index/get_news');?>";
        xmlhttp.open("post", newsUrl, false);
        xmlhttp.send();
    </script>
    <script src="<?php echo C('COMMON');?>/js/myFun.js"></script>
    <script src="<?php echo C('COMMON');?>/js/animationAPI.js"></script>
    <script src="<?php echo C('COMMON');?>/js/news.js"></script>

</div>
</body>
</html>