FROM openjdk:8-jdk-alpine
FROM maven:3.8.2-jdk-8
EXPOSE 8089
RUN mvn clean package
ADD target/docker-spring-boot.jar docker-spring-boot.jar
ENTRYPOINT ["java","-jar","/docker-spring-boot.jar"]




