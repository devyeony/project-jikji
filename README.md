# 프로젝트 직지 (Project Jikji) 
![GitHub](https://img.shields.io/github/license/devyeony/project-jikji?color=blue)
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

### Backend
- 아래의 명령을 입력하여 해당 디렉토리에 application.yml 파일을 생성합니다.
```
$ cd backend/jikji-web/src/main
$ mkdir resources
$ nano resources/application.yml
```
- 프로젝트에 맞게 다음의 내용을 입력하고 저장합니다.
```
application.yml 내용
```
- 아래의 명령을 입력하여 gradle 디렉토리에 실행 권한을 부여하고 빌드한 후 실행합니다.
```
$ chmod +x ./gradlew
$ ./gradlew build
$ java -jar build/libs/jikji-web-0.0.1-SNAPSHOT.jar
```

### Frontend
- 아래의 명령을 입력하여 env 디렉토리를 생성합니다.
```
$ cd frontend
$ mkdir env
```
- env 디렉토리 안에 <b>로컬 환경에서의 환경변수</b>를 관리하는 .env.local 파일을 생성한 뒤 관련 내용을 입력하고 저장합니다.
```
$ nano env/.env.local
```
```
REACT_APP_URL={로컬 환경에서의 프론트엔드 URL}
REACT_APP_API_URL={로컬 환경에서의 백엔드 URL}
REACT_APP_GOOGLE_KEY={구글 OAuth Key}
REACT_APP_KAKAO_KEY={카카오 OAuth Key}
```
- env 디렉토리 안에 <b>개발 환경에서의 환경변수</b>를 관리하는 .env.development 파일을 생성한 뒤 관련 내용을 입력하고 저장합니다.
```
$ nano env/.env.development
```
```
REACT_APP_URL={개발 환경에서의 프론트엔드 URL}
REACT_APP_API_URL={개발 환경에서의 백엔드 URL}
REACT_APP_GOOGLE_KEY={구글 OAuth Key}
REACT_APP_KAKAO_KEY={카카오 OAuth Key}
```
- env 디렉토리 안에 <b>운영 환경에서의 환경변수</b>를 관리하는 .env.production 파일을 생성한 뒤 관련 내용을 입력하고 저장합니다.
```
$ nano env/.env.production
```
```
REACT_APP_URL={운영 환경에서의 프론트엔드 URL}
REACT_APP_API_URL={운영 환경에서의 백엔드 URL}
REACT_APP_GOOGLE_KEY={구글 OAuth Key}
REACT_APP_KAKAO_KEY={카카오 OAuth Key}
```
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