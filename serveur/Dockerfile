FROM maven:3.9-eclipse-temurin-11-alpine AS build

WORKDIR /app

COPY pom.xml ./
COPY src ./src

RUN mvn -B -Dmaven.test.skip=true clean package

FROM eclipse-temurin:11-jre-alpine

EXPOSE 8089
COPY --from=build /app/target/docker-spring-boot.jar /docker-spring-boot.jar

ENTRYPOINT ["java","-jar","/docker-spring-boot.jar"]
