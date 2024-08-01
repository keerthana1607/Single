FROM openjdk:18
WORKDIR /app
COPY ./target/StudentREST-0.0.1-SNAPSHOT.jar /app
EXPOSE 8080
CMD ["java", "-jar", "StudentREST-0.0.1-SNAPSHOT.jar"]
