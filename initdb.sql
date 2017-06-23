CREATE DATABASE hubot;
CREATE USER 'hubot'@'localhost' IDENTIFIED BY 'b957f529861ffbe48c7b34bce651faa8';
GRANT ALL PRIVILEGES ON hubot.* TO 'hubot'@'localhost';
USE hubot;
CREATE TABLE `brain` (
  `id` INT,
  `data` TEXT,
  PRIMARY KEY (`id`)
);
