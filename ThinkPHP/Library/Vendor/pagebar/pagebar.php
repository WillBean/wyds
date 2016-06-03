<?php
/*
 * $total_page  总页数
 * $page        当前页号
 * $pages_show  显示的页码数量
 * $module      模块
 * $ctlr        控制器
 * $action      操作
 */
function pagebar($total_page, $page, $pages_show, $module = 'Home', $ctlr, $action = 'index') {
    $str = query_string();  //提取出get方法中除page以外的参数及值
    $pages_show = min($total_page, $pages_show);
    if($page > $total_page || $page < 1) {
        return; //处理非法页号的情况
    }
    $end = $page + floor($pages_show / 2) <= $total_page ? $page + floor($pages_show / 2) : $total_page;//计算显示的页码中结束的页号
    $start = $end - $pages_show + 1;    //计算开始的页号
    if($start < 1) {
        $end -= $start - 1;
        $start = 1;
    }
    if($page == 1) {
        $pagelist[] = array(
            "url" => __ROOT__."/index.php/$module/$ctlr/$action?".$str."page=1",
            "num" => "&lt;&lt;",
            "class" => "disabled"
        );
    }else {
        $pagelist[] = array(
            "url" => __ROOT__."/index.php/$module/$ctlr/$action?".$str."page=1",
            "num" => "&lt;&lt;",
            "class" => ""
        );
    }
    //输出分页条
    for($i = $start;$i <= $end;$i++) {
        if($i == $page) {
            $pagelist[] = array(
                "url" => "javascript:;",
                "num" => $i,
                "class" => "active"
            );
        }else {
            $pagelist[] = array(
                "url" => __ROOT__."/index.php/$module/$ctlr/$action?".$str."page=" . $i,
                "num" => $i,
                "class" => ""
            );
        }
    }
    if($page == $total_page) {
        $pagelist[] = array(
            "url" => __ROOT__."/index.php/$module/$ctlr/$action?".$str."page=" . $total_page,
            "num" => "&gt;&gt;",
            "class" => "disabled"
        );
    }else {
        $pagelist[] = array(
            "url" => __ROOT__."/index.php/$module/$ctlr/$action?".$str."page=" . $total_page,
            "num" => "&gt;&gt;",
            "class" => ""
        );
    }
    return $pagelist;
}
//提取出get方法中除page以外的参数及值
function query_string() {
    $str = $_SERVER['QUERY_STRING'];
    $str = preg_replace('/page=([0-9])*/', '', $str);
    if(!empty($str) && !preg_match('/\&$/', $str)) {
        $str = $str.'&';
    }
    return $str;
}