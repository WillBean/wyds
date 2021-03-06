<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0, initial-scale=1, maximum-scale=1,user-scalable=no">
    <meta name="HandheldFriendly" content="t">
    <link rel="stylesheet" href="<?php echo C('COMMON');?>/css/style.css" type="text/css"/>
</head>
<body>
    <div id="nav" class="transition">
        <div class="nav-cont">
            <a href="#header">HEADER</a>
            <a href="#section1">网络行为</a>
            <a href="#section2">精彩博文</a>
            <a href="#section3">关于我们</a>
            <a href="#section4">联系我们</a>
            <a href="<?php echo U('Home/Index/news');?>">新闻中心</a>
            <a href="<?php echo U('Home/Index/before');?>" id="show">效果展示</a>
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
                    <h3>网络十大不文明行为</h3>
                    <p>传播谣言、散布虚假信息；<br>
                        制作、传播网络病毒，“黑客”恶意攻击、骚扰；<br>
                        传播垃圾邮件；<br>
                        论坛、聊天室侮辱、谩骂；<br>
                        网络欺诈行为；<br>
                        网络色情聊天；<br>
                        窥探、传播他人隐私；<br>
                        盗用他人网络账号，假冒他人名义；<br>
                        强制广告、强制下载、强制注册；<br>
                        炒作色情、暴力、怪异等低俗内容。<br>
                    </p>
                </div>
                <div class="section-picture">
                    <h4>PICTURE</h4>
                    <div class="picture-contain">
                        <div class="picture-item">
                            <a href="javascript:void(0)" dataSrc="<?php echo C('COMMON');?>/images/picture/pic1.jpg">
                                <img src="<?php echo C('COMMON');?>/images/pic1.jpg" alt="描述"/>

                                <div class="description">
                                    <h6>Description</h6>
                                    <p>炒作色情、暴力、怪异等低俗内容</p>
                                    <i></i>
                                </div>
                            </a>
                        </div>
                        <div class="picture-item">
                            <a href="javascript:void(0)" dataSrc="<?php echo C('COMMON');?>/images/picture/pic2.jpg">
                                <img src="<?php echo C('COMMON');?>/images/pic2.jpg" alt="描述"/>

                                <div class="description">
                                    <h6>Description</h6>
                                    <p>盗用他人网络账号，假冒他人名义</p>
                                    <i></i>
                                </div>
                            </a>
                        </div>
                        <div class="picture-item">
                            <a href="javascript:void(0)" dataSrc="<?php echo C('COMMON');?>/images/picture/pic3.jpg">
                                <img src="<?php echo C('COMMON');?>/images/pic3.jpg" alt="描述"/>

                                <div class="description">
                                    <h6>Description</h6>
                                    <p>论坛、聊天室侮辱、谩骂</p>
                                    <i></i>
                                </div>
                            </a>
                        </div>
                        <div class="picture-item">
                            <a href="javascript:void(0)" dataSrc="<?php echo C('COMMON');?>/images/picture/pic4.jpg">
                                <img src="<?php echo C('COMMON');?>/images/pic4.jpg" alt="描述"/>
                                <div class="description">
                                    <h6>Description</h6>
                                    <p>网络欺诈行为</p>
                                    <i></i>
                                </div>
                            </a>
                        </div>
                        <div class="picture-item">
                            <a href="javascript:void(0)" dataSrc="<?php echo C('COMMON');?>/images/picture/pic5.jpg">
                                <img src="<?php echo C('COMMON');?>/images/pic5.jpg" alt="描述"/>

                                <div class="description">
                                    <h6>Description</h6>
                                    <p>网络色情聊天</p>
                                    <i></i>
                                </div>
                            </a>
                        </div>
                        <div class="picture-item">
                            <a href="javascript:void(0)" dataSrc="<?php echo C('COMMON');?>/images/picture/pic6.jpg">
                                <img src="<?php echo C('COMMON');?>/images/pic6.jpg" alt="描述"/>

                                <div class="description">
                                    <h6>Description</h6>
                                    <p>制作、传播网络病毒，“黑客”恶意攻击、骚扰</p>
                                    <i></i>
                                </div>
                            </a>
                        </div>
                        <div class="picture-item">
                            <a href="javascript:void(0)" dataSrc="<?php echo C('COMMON');?>/images/picture/pic7.jpg">
                                <img src="<?php echo C('COMMON');?>/images/pic7.jpg" alt="描述"/>

                                <div class="description">
                                    <h6>Description</h6>
                                    <p>传播谣言、散布虚假信息</p>
                                    <i></i>
                                </div>
                            </a>
                        </div>
                        <div class="picture-item">
                            <a href="javascript:void(0)" dataSrc="<?php echo C('COMMON');?>/images/picture/pic8.jpg">
                                <img src="<?php echo C('COMMON');?>/images/pic8.jpg" alt="描述"/>

                                <div class="description">
                                    <h6>Description</h6>
                                    <p>传播垃圾邮件</p>
                                    <i></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section2">
            <div class="container">
                <div class="section-head">
                    <h3>精彩博文</h3>
                    <p>创建文明网络 共建和谐社会
                        <br>伴随着科学技术的飞速发展，网络技术也在迅猛的发展中，网络已经成为广大人群获取信息、聊天交友、游戏娱乐、交流思想的重要途径。但随着网络的日益普及，也出现了一些网络安全和网络道德问题。深陷网络游戏不能自拔，网络上不健康的信息传播，影响着人们的道德价值观，也对身心发展存在不利因素。而我们作为社会文明新风的倡导者、实践者和维护者，我们要提倡每个人都积极行动起来，营造一个良好的
                        网络文明氛围，为了自己的家庭，也是为了社会这个大家。</p>
                </div>
                <div class="section-tips">
                    <h4>精彩博文语段</h4>
                    <div class="tip-contain">
                        <div class="tip-items" id="tip1">
                            <div class="tip-content">
                                <p>古人云“心生而言立，言立而文明”。做一个文明的人，做文明的事，文明之风在时代风云变幻中从来没有过时。现在互联网高速发展，网络文明建设也已经成为社会主义精神文明建设和和谐社会建设的一个重要课题。而一直以来，党和国家领导人以及社会各界始终高度重视营造网络文明、建设和谐网络的工作,这就需要我们文明的宣传网络.建造和谐社会.</p>
                                <span>——摘自<a href="http://blog.sina.com.cn/s/blog_d4cc5fba0101fps3.html" target="_blank">网络文明传播的意义</a></span>
                            </div>
                        </div>
                        <div class="tip-items" id="tip2">
                            <div class="tip-content">
                                <p>应该注意到，谣言如同瘟疫，在网络世界中，它远比口耳相传更加迅速，在各观者的眼中，或信任、或猎奇、或无知地给予散播开去，我们被这些诽谤泄愤的、捏造事实的、制造恐慌的、报复社会的谣言所绑架，最终，社会不稳，人心不安。</p>
                                <span>——摘自<a href="http://blog.sina.com.cn/s/blog_948dc4840101b551.html" target="_blank" >网络文明之我见</a></span>
                            </div>
                        </div>
                        <div class="tip-items" id="tip3">
                            <div class="tip-content">
                                <p>有人说过，网络是人类创造的众神之外的另一个世界，是神魔也无法插手的世界。确实，网络是人类伟大的杰作，它带给我们方便、欢乐......然而倘若这个世界失去秩序，那么它可能会带领人类走向毁灭。而文明，就是平衡网络秩序的重要杠杆。其实，在网络上做到“文明”这两个字并不困难，在你忍不住想要走出道德和法律的范围时克制自己的冲动，想想你自己也是这个虚拟国度的一分子，一言一行都关系到网络的文明维护。只要人人都献出自己的一份自觉，网络将会更加美好。</p>
                                <span>——摘自<a href="http://blog.sina.com.cn/s/blog_d83d79180101cfkc.html" target="_blank">浅析网络文明 </a></span>
                            </div>
                        </div>
                        <div class="tip-items" id="tip4">
                            <div class="tip-content">
                                <p>网络的兴起，是一个进步，给公民的话语表达举托起一个宽广的平台。网络的生长，也是一个挑战，给社会的公共治理提出了许多待解的课题。流动中的中国，正在迅速改变着原有的一元化社会格局。多层化的社会结构，多样化的生活追求，必然衍生出多元化的价值取向和利益表达。觉醒中的公民意识蓬勃地生长，每一个个体努力发现自我，解放自我，实现自我。随着网络的悄然崛起，社会的活力也在这里积聚、迸发，社会的矛盾也在这里凸显、碰撞。</p>
                                <span>——摘自<a href="http://blog.sina.com.cn/s/blog_786e5ff50101kwaa.html"  target="_blank" >构建文明网络</a></span>
                            </div>
                        </div>
                        <div class="tip-items" id="tip5">
                            <div class="tip-content">
                                <p>不要小看了网络文明志愿者这简单的敲击键盘、点击鼠标的作用，要知道在这里传播的是知识，影响的是人的精神世界，作用和意义是深远的。网络已成为当前思想文化传播的重要阵地。大力传播文明风尚，推动公民思想道德素质的提高，把精神文明创建活动延伸到网络空间，不断开辟精神文明建设新领域。志愿服务的网络化是未来社会的发展方向，网络志愿者的公民化也是社会文明发展的标志。</p>
                                <span>——摘自<a href="http://blog.sina.com.cn/s/blog_538a93130101hhan.html" target="_blank">如何当好一名网络文明传播</a></span>
                            </div>
                        </div>
                        <div class="tip-items" id="tip6">
                            <div class="tip-content">
                                <p>做一个网络文明人需要我们严格遵从网络规则，恪守网上道德，不黑他人网站，不改他人网页，聊天讲文明，发帖遵法律，在虚拟世界里播洒文明之光。自觉维护网络安全，不破坏网络秩序，不参与有害和无用信息的制作和传播，监督和防范不安全隐患，促进网络健康发展。我们要学习网络道德规范，懂得基本的对与错、是与非，增强网络道德意识，分清网上善恶美丑的界限，形成良好的网络道德行为规范。</p>
                                <span>——摘自<a href= "http://blog.sina.com.cn/s/blog_9f8325010102vhc0.html" target="_blank">做网络文明人！</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section3">
            <div class="container">
                <div class="section-head">
                    <h3>关于我们</h3>
                </div>
                <div class="about-contain">
                    <div class="about-sub-contain">
                        <div class="about-content">
                            <div class="photo-area">
                                <img src="<?php echo C('COMMON');?>/images/ypf.jpg" alt=""/>
                            </div>
                            <div class="description-area">
                                <p>叶佩芬</p><p>14级信息管理3班</p><p>负责页面设计及素材收集整理</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-sub-contain">
                        <div class="about-content">
                            <div class="photo-area">
                                <img src="<?php echo C('COMMON');?>/images/lwb.jpg" alt=""/>
                            </div>
                            <div class="description-area">
                                <p>李伟宾</p><p>14级软件工程2班</p><p>负责页面设计及页面制作</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-sub-contain">
                        <div class="about-content">
                            <div class="photo-area">
                                <img src="<?php echo C('COMMON');?>/images/zyh.png" alt=""/>
                            </div>
                            <div class="description-area">
                                <p>周亿煌</p><p>14级软件工程3班</p><p>负责后台制作及页面嵌套</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section4">
            <div class="container">
                <div class="section-head">
                    <h3>联系我们</h3>
                    <p>有什么话发给我们，我们能看到的哦</p>
                </div>
                <div class="section-form">
                    <form onsubmit="return false;">
                        <div class="clear-box">
                            <div class="left-form">
                                <input type="text" name="name" placeholder="Your name" required="required"/>
                                <input type="text" name="phone" placeholder="Your phone" required="required"/>
                                <input type="email" name="email" placeholder="Your email" required="required"/>
                            </div>
                            <div class="right-form">
                                <textarea name="message" placeholder="Enter message" required="required" ></textarea>
                            </div>
                        </div>

                        <input id="submit" type="submit" value="Submit"/>
                    </form>
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

        <!-- 图片弹窗-->
        <div id="popup-bg" class="transition"></div>
        <div id="picture-wrap" class="transition">
            <div id="picture-area" class="transition">

            </div>
            <a id="close-btn" class="transition" href="javascript:void(0)">CLOSE</a>
        </div>
    </div>

    <script type="text/javascript">
        function getRootPath() {
            return '<?php echo C("ROOT");?>';
        }
        function getCommonPath() {
            return '<?php echo C("COMMON");?>';
        }
    </script>
    <script src="<?php echo C('COMMON');?>/js/myFun.js"></script>
    <script src="<?php echo C('COMMON');?>/js/animationAPI.js"></script>
    <script src="<?php echo C('COMMON');?>/js/main.js"></script>
    <script src="<?php echo C('COMMON');?>/js/data.js"></script>

</body>
</html>