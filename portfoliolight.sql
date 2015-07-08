/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50537
Source Host           : localhost:3306
Source Database       : portfoliolight

Target Server Type    : MYSQL
Target Server Version : 50537
File Encoding         : 65001

Date: 2014-11-10 13:00:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `portfolio`
-- ----------------------------
DROP TABLE IF EXISTS `portfolio`;
CREATE TABLE `portfolio` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `url` text NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of portfolio
-- ----------------------------
INSERT INTO `portfolio` VALUES ('1', 'loftblog.ru', 'images/work/loftblog.jpg', 'http://loftblog.ru/', 'Сайт с уроками по web разработке');
INSERT INTO `portfolio` VALUES ('2', 'itloft.ru', 'images/work/itloft.jpg', 'http://itloft.ru/', 'Сайт агенства интернет решений itloft');
INSERT INTO `portfolio` VALUES ('3', 'landingsloft.ru', 'images/work/landingsloft.jpg', 'http://landingsloft.ru/', 'Сайт по разработке лендингов с гарантией');
INSERT INTO `portfolio` VALUES ('4', 'kovalchuk.us', 'images/work/kovalchuk.jpg', 'http://kovalchuk.us/', 'Личный сайт Дмитрия Ковальчука');
INSERT INTO `portfolio` VALUES ('5', 'loftschool.ru', 'images/work/loftschool.jpg', 'http://loftschool.ru/', 'Школа по обучению веб разработчиков');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `password` char(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'kovald', '32f8c268a34031129c24efddc2083443');
