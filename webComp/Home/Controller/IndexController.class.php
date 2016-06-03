<?php
namespace Home\Controller;
use Think\Controller\RestController;
class IndexController extends RestController {
    public function index(){
        $this->show();
    }

    //联系我们提交信息接口
    public function add_contact() {
        $data['name'] = I('post.name');
        $data['phone'] = I('post.phone');
        $data['email'] = I('post.email');
        $data['msg'] = I('post.msg');
        if(!$data['name'] || !$data['phone'] || !$data['email'] || !$data['msg']) {
            $response['status'] = 0;
            $response['message'] = '添加失败，请补充全部信息';
            $this->response($response, 'json');
            exit();
        }
        $Contact = M('contact');
        $result = $Contact->data($data)->add();
        $this->check_submit($result);
    }

    //获取提交信息列表
    public function get_contact() {
        $this->show();
        $Contact = M('contact');
        $data['count'] = $Contact->count();
        $data['list'] = $Contact->select();
        $this->response($data, 'json');
    }

    //获取新闻列表
    public function get_news() {

        $News = M('news');
        //$data['count'] = $News->count();
        $data = $News->order('create_time desc')->limit(8)->select();
        $this->response($data, 'json');
    }

    //添加新闻
    public function add_news() {
        $data['title'] = I('post.title');
        $data['content'] = I('post.content');

        $News = M('news');
        $result = $News->data($data)->add();
        $this->check_submit($result);
    }

    //检查是否提交信息成功
        private function check_submit($result) {
        $response = array();
        if($result) {
            $response['status'] = 1;
            $response['message'] = '添加成功';
        }else {
            $response['status'] = 0;
            $response['message'] = '添加失败';
        }
        $this->response($response, 'json');
    }
}