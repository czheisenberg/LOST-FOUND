CREATE DATABASE IF NOT EXISTS lost_found
CHARACTER SET utf8
COLLATE utf8_general_ci;

USE lost_found;

-- 创建 lf_goodsinformation 表
DROP TABLE IF EXISTS `lf_goodsinformation`;
CREATE TABLE `lf_goodsinformation` (
    `id` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `profileImage` VARCHAR(50) COMMENT '头像',
    `username` VARCHAR(50) COMMENT '用户名',
    `name` VARCHAR(50) COMMENT '真实姓名',
    `dateTime` DATETIME COMMENT '发布日期 06/14/2024 10:34PM',
    `goods` VARCHAR(50) COMMENT '物品名称',
    `goodsImg` VARCHAR(50) COMMENT '物品图片路径',
    `phoneNumber` CHAR(11) COMMENT '电话号码',
    `address` VARCHAR(255) COMMENT '地址',
    `stuffState` BOOLEAN COMMENT '物品状态, false:丢失物品, true:捡到物品',
    `detailUrl` VARCHAR(255) COMMENT '详细页面地址'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- 创建 lf_message 表
DROP TABLE IF EXISTS `lf_message`;
CREATE TABLE `lf_message` (
    `id` BIGINT NOT NULL PRIMARY KEY,
    `message` VARCHAR(255) COMMENT '简要描述'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- 设置 lf_goodsinformation 表的外键
ALTER TABLE `lf_goodsinformation`
ADD FOREIGN KEY (`id`) REFERENCES `lf_message`(`id`)
ON DELETE CASCADE
ON UPDATE CASCADE;


-- 普通用户表
CREATE TABLE `lf_user` (
    `id` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
    `email` VARCHAR(100) NOT NULL UNIQUE COMMENT '电子邮箱',
    `create_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user' COMMENT '角色，普通用户或管理员'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 管理员用户表
CREATE TABLE `lf_admin` (
    `id` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE COMMENT '管理员用户名',
    `email` VARCHAR(100) NOT NULL UNIQUE COMMENT '管理员电子邮箱',
    `create_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
