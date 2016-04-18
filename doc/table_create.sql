
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
	`user_id` VARCHAR(64) NOT NULL COMMENT '用户ID',
	`user_name` VARCHAR(64) NOT NULL COMMENT '用户名',
	`phone` VARCHAR(16) DEFAULT NULL COMMENT '手机号',
	`email` VARCHAR(64) DEFAULT NULL COMMENT '邮箱',
	`password` VARCHAR(256) NOT NULL COMMENT '密码',
	`head_url` VARCHAR(512) DEFAULT NULL COMMENT '用户头像URL',
	`sex` CHAR(6) DEFAULT NULL COMMENT '性别 male/female',
	`age` int(6) DEFAULT NULL COMMENT '年龄',
	`city_code` VARCHAR(16) DEFAULT NULL COMMENT '城市代码',
	`company` VARCHAR(256) DEFAULT NULL COMMENT '公司',
	`job` VARCHAR(128) DEFAULT NULL COMMENT '工作',
	`work_id` VARCHAR(64) DEFAULT NULL COMMENT '工作信息表ID',
	`last_login_time` datetime DEFAULT NULL COMMENT '上次登陆时间',
	`add_time` datetime DEFAULT NULL COMMENT '创建时间',
	`update_time` datetime DEFAULT NULL COMMENT '更新时间',
	PRIMARY KEY (`user_id`),
	KEY `work_id` (`work_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT '用户信息表';

DROP TABLE IF EXISTS `city_info`;
CREATE TABLE `city_info` (
	`id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
	`name` VARCHAR(64) NOT NULL COMMENT '城市名称',
	`code` VARCHAR(16) DEFAULT NULL COMMENT '城市代码',
	`province` VARCHAR(64) DEFAULT NULL COMMENT '省份',
	`country` VARCHAR(64) DEFAULT NULL COMMENT '国家',
	`longitude` INT(32) DEFAULT NULL COMMENT '经度',
	`latitude` INT(32) DEFAULT NULL COMMENT '纬度',
	PRIMARY KEY (`id`),
	UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT '城市信息表';
