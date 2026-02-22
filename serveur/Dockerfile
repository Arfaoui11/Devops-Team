FROM eclipse-temurin:11-jre-alpine

EXPOSE 8089
COPY target/docker-spring-boot.jar /docker-spring-boot.jar

ENTRYPOINT ["java","-jar","/docker-spring-boot.jar"]