#!/bin/bash
REPOSITORY=/home/ec2-user/app
PROJECT_NAME=project-jikji

echo "> Build 파일 복사"
cp $REPOSITORY/zip/*.jar $REPOSITORY/

echo "> 현재 구동중인 애플리케이션 pid 확인"
CURRENT_PID=$(pgrep -fl ${PROJECT_NAME} | grep jar | awk '{print $1}')

echo "현재 구동 중인 애플리케이션 pid: $CURRENT_PID"
if [ -z "$CURRENT_PID" ]; then
    echo "> 현재 구동 중인 애플리케이션이 없으므로 종료하지 않습니다."
else
    echo "> kill -15 $CURRENT_PID" 
    kill -15 $CURRENT_PID 
    sleep 5
fi

echo "> 새 애플리케이션 배포"
JAR_NAME=$(ls -tr $REPOSITORY/*.jar | tail -n 1)

echo "> JAR Name: $JAR_NAME"

echo "> $JAR_NAME 에 실행권한 추가"

chmod +x $JAR_NAME

echo "> $JAR_NAME 실행"

nohup java -jar $JAR_NAME > $REPOSITORY/nohup.out 2>&1 &

echo "> 리액트 프로젝트 배포 시작"

echo "> frontend 폴더 이동"
cd $REPOSITORY/zip/frontend

echo "> npm 명령어 설치"
nvm install 14

echo "> 패키지 설치"
npm install

echo "> npm 빌드"
npm run build:dev

