# Usage - Backend
## application.yml 파일 작성
### jikji-web 모듈
- 아래의 명령을 입력하여 jikji-web 디렉토리에 resources-web 디렉토리를 생성합니다.
```
$ cd jikji-web/src/main
$ mkdir resources-web
```
- resources-web 디렉토리 안에 로컬/개발/운영 환경에서의 환경변수를 관리하는 application.yml 파일을 생성한 뒤 관련 내용을 입력하고 저장합니다.
```
$ nano resources-web/application-local.yml
$ nano resources-web/application-dev.yml
$ nano resources-web/application-prod.yml
```
```
server:
  port: {로컬/개발/운영 환경에서의 포트번호}

spring:
  datasource:
    driver-class-name: org.mariadb.jdbc.Driver
    url: {로컬/개발/운영 환경 DB의 URL}
    username: {로컬/개발/운영 환경 DB의 아이디}
    password: {로컬/개발/운영 환경 DB의 비밀번호}
  jpa:
    database-platform: org.hibernate.dialect.MariaDBDialect

jwt:
  secret: {JWT 토큰 인증을 위한 비밀키}
```

## 프로젝트 실행
- 아래의 명령을 입력하여 gradle 디렉토리에 실행 권한을 부여하고 빌드합니다.
```
$ chmod +x ./gradlew
$ ./gradlew build
```
### jikji-web 모듈 실행
- 아래의 명령으로 각각의 환경에 맞게 실행합니다.
```
$ java -jar "-Dspring.profiles.active=local" build/libs/jikji-web-0.0.1-SNAPSHOT.jar
$ java -jar "-Dspring.profiles.active=dev" build/libs/jikji-web-0.0.1-SNAPSHOT.jar
$ java -jar "-Dspring.profiles.active=prod" build/libs/jikji-web-0.0.1-SNAPSHOT.jar
```