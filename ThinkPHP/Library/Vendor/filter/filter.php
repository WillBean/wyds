<?php
function input_filter($contents) {
    return addslashes(strip_tags($contents));
}
function check_page_number($page, $total_num) {
    if($page > $total_num || $page < 1) {
        return 1;
    }else {
        return $page;
    }
}