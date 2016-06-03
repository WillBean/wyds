<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="<?php echo C('COMMON');?>/css/before.css" type="text/css"/>
</head>
<body>
<canvas id="canvas"></canvas>
<canvas id="word-canvas" style="position: fixed;left: 0;top: 0;"></canvas>
<a href="index.html" id="btn">INDEX
<i class="left"></i>
<i class="top"></i>
<i class="right"></i>
<i class="bottom"></i></a>
<script src="<?php echo C('COMMON');?>/js/before.js" charset="utf-8"></script>
</body>
</html>