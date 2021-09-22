#!/bin/bash
REPOSITORY=/home/ec2-user/app
PROJECT_NAME=project-jikji

echo "> Build 파일 복사"
cp $REPOSITORY/zip/*.jar $REPOSITORY/

JIKJI_WEB_PORT=7001
echo "> $JIKJI_WEB_PORT에서 구동중인 애플리케이션 pid 확인"
JIKJI_WEB_PID=$(lsof -ti tcp:${JIKJI_WEB_PORT})

echo "> 현재 구동 중인 JIKJI_WEB 애플리케이션 pid: $JIKJI_WEB_PID"
if [ -z "$JIKJI_WEB_PID" ]; 
then
    echo "> 현재 구동 중인 JIKJI_WEB 애플리케이션이 없으므로 종료하지 않습니다."
else
    echo "> kill -15 $JIKJI_WEB_PID"
    kill -15 ${JIKJI_WEB_PID} 
    sleep 5
fi

echo "> JIKJI_WEB_JAR 배포"
JIKJI_WEB_JAR=$(ls -tr $REPOSITORY/jikji-web-*.jar | tail -n 1)

echo "> JIKJI_WEB_JAR: $JIKJI_WEB_JAR"

echo "> $JIKJI_WEB_JAR 에 실행권한 추가"

chmod +x $JIKJI_WEB_JAR

echo "> $JIKJI_WEB_JAR 실행"

nohup java -jar -Dspring.profiles.active=dev $JIKJI_WEB_JAR > $REPOSITORY/nohup-jikji-web.out 2>&1 &

JIKJI_BATCH_PORT=9001
echo "> $JIKJI_BATCH_PORT에서 구동중인 애플리케이션 pid 확인"
JIKJI_BATCH_PID=$(lsof -ti tcp:${JIKJI_BATCH_PORT})

echo "> 현재 구동 중인 JIKJI_BATCH 애플리케이션 pid: $JIKJI_BATCH_PID"
if [ -z "$JIKJI_BATCH_PID" ]; 
then
    echo "> 현재 구동 중인 JIKJI_BATCH 애플리케이션이 없으므로 종료하지 않습니다."
else
    echo "> kill -15 $JIKJI_BATCH_PID"
    kill -15 ${JIKJI_BATCH_PID} 
    sleep 5
fi

echo "> JIKJI_BATCH_JAR 배포"
JIKJI_BATCH_JAR=$(ls -tr $REPOSITORY/jikji-batch-*.jar | tail -n 1)

echo "> JIKJI_BATCH_JAR: $JIKJI_BATCH_JAR"

echo "> $JIKJI_BATCH_JAR 에 실행권한 추가"

chmod +x $JIKJI_BATCH_JAR

echo "> $JIKJI_BATCH_JAR 실행"

nohup java -jar -Dspring.profiles.active=dev $JIKJI_BATCH_JAR > $REPOSITORY/nohup-jikji-batch.out 2>&1 &

echo "> nginx 재시작"
sudo service nginx restart

