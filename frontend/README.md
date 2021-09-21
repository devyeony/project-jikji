# Usage - Frontend
## .env 파일 작성
- 아래의 명령을 입력하여 env 디렉토리를 생성합니다.
```
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
## 프로젝트 실행
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