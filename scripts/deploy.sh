#!/bin/bash
REPOSITORY=/home/ec2-user/app
PROJECT_NAME=project-jikji

echo "> Build 파일 복사"
cp $REPOSITORY/zip/*.jar $REPOSITORY/

IDLE_PORT=7000

echo "> $IDLE_PORT에서 구동중인 애플리케이션 pid 확인"
IDLE_PID=$(lsof -ti tcp:${IDLE_PORT})

echo "> 현재 구동 중인 애플리케이션 pid: $IDLE_PID"
if [ -z "$IDLE_PID" ]; 
then
    echo "> 현재 구동 중인 애플리케이션이 없으므로 종료하지 않습니다."
else
    echo "> kill -15 $IDLE_PID"
    kill -15 ${IDLE_PID} 
    sleep 5
fi

echo "> 새 애플리케이션 배포"
JAR_NAME=$(ls -tr $REPOSITORY/*.jar | tail -n 1)

echo "> JAR Name: $JAR_NAME"

echo "> $JAR_NAME 에 실행권한 추가"

chmod +x $JAR_NAME

echo "> $JAR_NAME 실행"

nohup java -jar -Dspring.profiles.active=dev $JAR_NAME > $REPOSITORY/nohup.out 2>&1 &

echo "> nginx 재시작"
sudo service nginx restart

