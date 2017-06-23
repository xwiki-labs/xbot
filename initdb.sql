CREATE DATABASE IF NOT EXISTS hubot;
CREATE USER IF NOT EXISTS 'hubot'@'localhost' IDENTIFIED BY 'b957f529861ffbe48c7b34bce651faa8';
GRANT ALL PRIVILEGES ON hubot.* TO 'hubot'@'localhost';
USE hubot;
CREATE TABLE IF NOT EXISTS `brain` (
  `id` INT,
  `data` BLOB,
  PRIMARY KEY (`id`)
);
