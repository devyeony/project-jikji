# 프로젝트 직지 (Project Jikji) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/da21534d-fe2d-42f6-a8dd-cd80e063e3ea/deploy-status)](https://app.netlify.com/sites/project-jikji/deploys) ![GitHub](https://img.shields.io/github/license/devyeony/project-jikji?color=blue)
> 📚저작권 없는 무료 전자책📖을 한국어 번역으로 만나보세요! [프로젝트 구텐베르크](https://www.gutenberg.org/) 의 한국어 번역 플랫폼✨

<img src="https://raw.githubusercontent.com/devyeony/project-jikji/main/.github/IMAGE/wiki/main/logo.png">
     
## 👉 URL

- [https://project-jikji.netlify.app/](https://project-jikji.netlify.app/)

## ❤️ Member
**더 리더스( The Leaders / The Readers )** 팀원들

|Backend, DB, Server|Frontend, UX/UI|
|:---:|:---:|
|<img src="https://raw.githubusercontent.com/devyeony/project-jikji/main/.github/IMAGE/wiki/main/devyeony_img.png" width="220px">|<img src="https://raw.githubusercontent.com/devyeony/project-jikji/main/.github/IMAGE/wiki/main/Minseo_img.jpg" width="200px">|
|김연희([@devyeony](https://github.com/devyeony))|강민서([@Minseo-Gang](https://github.com/Minseo-Gang))|

## 🤝 Collaboration Flow
<a href="https://github.com/devyeony/project-jikji/issues?q=is%3Aissue+is%3Aopen"><img src="https://img.shields.io/github/issues-raw/devyeony/project-jikji?color=gree"></a>
<a href="https://github.com/devyeony/project-jikji/issues?q=is%3Aissue+is%3Aclosed"><img src="https://img.shields.io/github/issues-closed-raw/devyeony/project-jikji?color=red"></a>
<a href="https://github.com/devyeony/project-jikji/pulls?q=is%3Apr+is%3Aopen"><img src="https://img.shields.io/github/issues-pr-raw/devyeony/project-jikji?color=gree"></a>
<a href="https://github.com/devyeony/project-jikji/pulls?q=is%3Apr+is%3Aclosed"><img src="https://img.shields.io/github/issues-pr-closed-raw/devyeony/project-jikji?color=red"></a>
- [더 리더스의 Wiki](https://github.com/devyeony/project-jikji/wiki) 
    - 스프린트 과정, 팀 규칙을 기록하는 프로젝트 아카이브
    - 프로젝트와 관련한 상세 정보 및 설명 기술

## 💡 Functionality

- 

## 📚 Tech Stack

- [기술스택 상세 - 특징 및 선택 이유](https://github.com/devyeony/project-jikji/wiki/Tech-Stack)  

[기술스택 시각화 이미지]

## ⚙️ Usage

먼저 Repository를 clone하고, 프로젝트 루트 디렉토리인 project-jikji 폴더로 이동합니다.
### Backend
#### 1) Profile별 application-common.yml 파일 작성
- 프로젝트 루트 디렉토리에서 아래의 명령을 입력하여 resources-profiles 디렉토리를 생성합니다.
```
$ cd backend
$ mkdir src/main/resources-profiles
```
- resources-profiles 디렉토리 안에 로컬/개발/운영 환경에서의 환경변수를 관리하는 application-common.yml 파일을 생성한 뒤 관련 내용을 입력하고 저장합니다. 이 파일들은 프로젝트 내에 있는 각 모듈에서 공통적으로 사용됩니다.
```
$ nano src/main/resources-profiles/application-local-common.yml
$ nano src/main/resources-profiles/application-dev-common.yml
$ nano src/main/resources-profiles/application-prod-common.yml
```
```
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
#### 2) 각 모듈의 Profile별 포트번호 설정
- 프로젝트 내에서 main 함수를 통해 실행되는 application 관련 모듈은 jikji-web과 jikji-batch입니다.
- 각 모듈의 로컬/개발/운영 환경에서 쓰일 포트번호는 해당 모듈의 src/main/resources 디렉토리 내에 있는 application-local.yml, application-dev.yml, application-prod.yml에서 정할 수 있습니다. 
- 현재 설정되어 있는 각 모듈의 Profile별 포트번호
  - jikji-web
    - local : 7000
    - dev : 7001
    - prod : 7002
  - jikji-batch
    - local : 9000
    - dev : 9001
    - prod : 9002

#### 3) 프로젝트 빌드
- 아래의 명령을 입력하여 gradlew 파일에 실행 권한을 부여하고 빌드합니다.
```
$ chmod +x ./gradlew
$ ./gradlew build
```
#### 4) jikji-web 모듈 실행
- 아래의 명령으로 각각의 환경에 맞게 실행합니다.
```
$ JIKJI_WEB_JAR=$(ls -tr build/libs/jikji-web-*.jar | tail -n 1)

$ java -jar -Dspring.profiles.active=local $JIKJI_WEB_JAR
$ java -jar -Dspring.profiles.active=dev $JIKJI_WEB_JAR
$ java -jar -Dspring.profiles.active=prod $JIKJI_WEB_JAR
```
#### 5) jikji-batch 모듈 실행
- 아래의 명령으로 각각의 환경에 맞게 실행합니다.
```
$ JIKJI_BATCH_JAR=$(ls -tr build/libs/jikji-batch-*.jar | tail -n 1)

$ java -jar -Dspring.profiles.active=local $JIKJI_BATCH_JAR
$ java -jar -Dspring.profiles.active=dev $JIKJI_BATCH_JAR
$ java -jar -Dspring.profiles.active=prod $JIKJI_BATCH_JAR
```

### Frontend
#### 1) .env 파일 작성
- 프로젝트 루트 디렉토리에서 아래의 명령을 입력하여 env 디렉토리를 생성합니다.
```
$ cd frontend
$ mkdir env
```
- env 디렉토리 안에 로컬/개발/운영 환경에서의 환경변수를 관리하는 .env 파일을 생성한 뒤 관련 내용을 입력하고 저장합니다.
```
$ nano env/.env.local
$ nano env/.env.development
$ nano env/.env.production
```
```
PORT={로컬/개발/운영 환경에서의 포트번호}
REACT_APP_URL={로컬/개발/운영 환경에서의 프론트엔드 URL}
REACT_APP_API_URL={로컬/개발/운영 환경에서의 백엔드 URL}
REACT_APP_GOOGLE_KEY={구글 OAuth Key}
REACT_APP_KAKAO_KEY={카카오 OAuth Key}
```
#### 2) 프로젝트 실행
- 아래의 명령으로 package.json 파일의 의존성을 설치합니다.
```
$ npm install
```
- 아래의 명령으로 각각의 환경에 맞게 실행합니다.
```
$ npm run start:local
$ npm run start:dev
$ npm run start:prod
```
- 아래의 명령으로 각각의 환경에 맞게 빌드합니다.
```
$ npm run build:local
$ npm run build:dev
$ npm run build:prod
```
