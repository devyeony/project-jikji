-- -----------------------------------------------------
-- Schema jikji
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jikji` DEFAULT CHARACTER SET utf8 ;
USE `jikji` ;

-- -----------------------------------------------------
-- Table `jikji`.`book_metadata`
-- 책 정보 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_metadata` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(5) NULL,
  `issued` DATETIME NULL,
  `title` VARCHAR(255) NOT NULL,
  `language` VARCHAR(5) NOT NULL,
  `authors` VARCHAR(255) NOT NULL,
  `cover` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `jikji`.`book_original`
-- 책 원본 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_original` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `book_metadata_id` INT(10) NOT NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`book_metadata_id`) REFERENCES `jikji`.`book_metadata` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`book_translation`
-- 책 번역본 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_translation` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `book_metadata_id` INT(10) NOT NULL,
  `book_original_id` BIGINT(20) NOT NULL,
  `page` INT(10) NOT NULL,
  `content` TEXT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`book_metadata_id`) REFERENCES `jikji`.`book_metadata` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`book_original_id`) REFERENCES `jikji`.`book_original` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`book_translation_history`
-- 책 번역본 이력 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_translation_history` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `book_metadata_id` INT(10) NOT NULL,
  `book_translation_id` BIGINT(20) NOT NULL,
  `content` TEXT NOT NULL,
  `date_request` DATETIME NOT NULL DEFAULT current_timestamp,
  `date_response` DATETIME NULL,
  `state` INT(2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`book_metadata_id`) REFERENCES `jikji`.`book_metadata` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`book_translation_id`) REFERENCES `jikji`.`book_translation` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`user`
-- 회원 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`user` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(15) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `profile` VARCHAR(255) NOT NULL,
  `access_token` VARCHAR(255) NOT NULL,
  `provider` INT(2) NOT NULL,
  `points` INT(10) NOT NULL DEFAULT 0,
  `state` INT(2) NOT NULL DEFAULT 0,
  `date_sign_up` DATETIME NOT NULL DEFAULT current_timestamp,
  `date_withdraw` DATETIME NULL,
  PRIMARY KEY (`id`));
  
-- -----------------------------------------------------
-- Table `jikji`.`book_translation_contributor`
-- 책 번역 기여자 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_translation_contributor` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `book_translation_history_id` BIGINT(20) NOT NULL,
  `user_id` INT(10) NOT NULL,
  `comment` TEXT NULL,
  `point` INT(3) NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`book_translation_history_id`) REFERENCES `jikji`.`book_translation_history` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `jikji`.`user` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`book_translation_admin`
-- 책 번역 관리자 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_translation_admin` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `book_translation_history_id` BIGINT(20) NOT NULL,
  `user_id` INT(10) NOT NULL,
  `comment` TEXT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`book_translation_history_id`) REFERENCES `jikji`.`book_translation_history` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `jikji`.`user` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`authority`
-- 권한 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`authority` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `user_id` INT(10) NOT NULL,
  `book_metadata_id` INT(19) NOT NULL,
  `role` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `jikji`.`user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`book_metadata_id`) REFERENCES `jikji`.`book_metadata` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`email_notification`
-- 이메일 알림 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`email_notification` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `user_id` INT(10) NOT NULL,
  `translation_request` BOOLEAN NOT NULL DEFAULT TRUE,
  `translation_response` BOOLEAN NOT NULL DEFAULT TRUE,
  `translation_update` BOOLEAN NOT NULL DEFAULT TRUE,
  `role_add` BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `jikji`.`user` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`book_read`
-- 조회 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_read` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `user_id` INT(10) NOT NULL,
  `book_metadata_id` INT(19) NOT NULL,
  `book_translation_id` BIGINT(20) NOT NULL,
  `date` DATETIME NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `jikji`.`user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`book_metadata_id`) REFERENCES `jikji`.`book_metadata` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`book_translation_id`) REFERENCES `jikji`.`book_translation` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`book_review`
-- 리뷰 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_review` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `user_id` INT(10) NOT NULL,
  `book_metadata_id` INT(19) NOT NULL,
  `score` INT(2) NOT NULL,
  `comment` VARCHAR(400) NOT NULL,
  `date` DATETIME NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `jikji`.`user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`book_metadata_id`) REFERENCES `jikji`.`book_metadata` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`book_like`
-- 찜 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_like` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `user_id` INT(10) NOT NULL,
  `book_metadata_id` INT(19) NOT NULL,
  `date` DATETIME NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `jikji`.`user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`book_metadata_id`) REFERENCES `jikji`.`book_metadata` (`id`) ON DELETE CASCADE);

-- -----------------------------------------------------
-- Table `jikji`.`book_mark`
-- 책갈피 테이블
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jikji`.`book_mark` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `user_id` INT(10) NOT NULL,
  `book_translation_id` BIGINT(20) NOT NULL,
  `date` DATETIME NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `jikji`.`user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`book_translation_id`) REFERENCES `jikji`.`book_translation` (`id`) ON DELETE CASCADE);
