FROM openjdk:11-slim

COPY target/enigma-backoffice*.jar /application/service.jar

ENTRYPOINT java -jar /application/service.jar

