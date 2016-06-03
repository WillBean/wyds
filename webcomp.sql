-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-03-01 13:57:43
-- 服务器版本： 5.6.26
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `webcomp`
--

-- --------------------------------------------------------

--
-- 表的结构 `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `cid` int(11) NOT NULL AUTO_INCREMENT COMMENT '索引',
  `cname` varchar(200) DEFAULT NULL COMMENT '姓名',
  `cphone` varchar(20) DEFAULT NULL COMMENT '电话',
  `cemail` varchar(100) DEFAULT NULL COMMENT '邮箱',
  `cmessage` text COMMENT '提交信息',
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='联系我们' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '索引',
  `title` varchar(200) DEFAULT '' COMMENT '标题',
  `content` text COMMENT '内容',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='新闻' AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `create_time`) VALUES
(1, '蔡名照：让互联网成为安全网、放心网、和谐网', NULL, '2016-03-01 12:51:16'),
(2, '唱响网络文明主旋律，网民是主角', NULL, '2016-03-01 12:51:16'),
(3, '人大代表呼吁针对不良网吧应单独立法', NULL, '2016-03-01 12:51:58'),
(4, '互联网举报中心去年收到举报超14余万件次', NULL, '2016-03-01 12:51:58'),
(5, '专家：推进网游实名制 提高青少年网络素养', NULL, '2016-03-01 12:52:17'),
(6, '常小兵：从源头杜绝不良信息进入移动通信网络', NULL, '2016-03-01 12:52:17'),
(7, '“大兴网络文明之风”经验交流会', NULL, '2016-03-01 12:52:37'),
(8, '黑客崇拜的背后是网络文化建设缺失', NULL, '2016-03-01 12:52:37');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
