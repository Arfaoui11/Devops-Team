/*


import java.text.SimpleDateFormat

pipeline {
       agent any


        stages{
            stage('Checkout GIT'){
                steps{
                    echo 'Pulling...';
                    git branch: 'MahdiBack',
                    url : 'https://github.com/Arfaoui11/DevOpsProjet.git';
                             }
                             }
            stage('Date') {
                steps {
                     script{
                     def date = new Date()
                     sdf = new SimpleDateFormat("MM/dd/yyyy")
                     println(sdf.format(date))
                             }
                             }
                             }
            stage('MVN CLEAN')
            {
                steps{
                sh  'mvn clean'
                }
            }
            stage('MCN COMPILE')
            {
                steps{
                sh  'mvn compile'
                }
            }
            stage('MVN SONARQUBE')
            {
                steps{
                sh  'mvn sonar:sonar -Dsonar.login=admin -Dsonar.password=sonar'
                }
            }


        }
        }

*/
import java.text.SimpleDateFormat

pipeline {
    environment {
        registry = "mahdijr/devops-tp"
        registryCredential = 'jenkins-dockerhub-token'
        dockerImageSpring = 'mahdijr/app-server:2.0'
        dockerImageAngular = 'mahdijr/app-client:2.0'
    }
    agent any
    stages {


        stage('Checkout GIT'){
                      steps{
                          echo 'Pulling...';
                          git branch: 'master',
                          url: 'https://github.com/Arfaoui11/Devops-Team.git';
                      }
        }


              stage("Maven Clean and Package"){
                    steps {
                        sh 'ansible-playbook ansible-docker-compose.yml'
                    }
                }

                stage("Tests JUnit / Mockito & Deploy artifacts with Nexus et DockerHub "){
                                     steps {
                                       sh 'ansible-playbook ansible-test.yml'
                                     }
                                }

           stage("Build the package"){
             steps {
               sh 'docker-compose up -d --build'
             }
        }















    }

    post {

                        success {
                            mail to: "mahdi.arfaoui1@esprit.tn",
                            body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n, More info at: ${env.BUILD_URL}\n and Swagger URL is ${'http://10.0.0.10:8089/SpringMVC/swagger-ui/index.html'} ,Angular URL is ${'http://10.0.0.10:4200'} ",
                            from: 'mahdi.arfaoui1@esprit.tn',
                            subject: "Jenkins is Build ${currentBuild.currentResult}: Job ${env.JOB_NAME} Data ${BUILD_TIMESTAMP}"
                        }

                        failure{
                            mail to: "mahdi.arfaoui1@esprit.tn",
                            subject: "Jenkins build:${currentBuild.currentResult}: ${env.JOB_NAME}",
                            from: 'mahdi.arfaoui1@esprit.tn',
                            body: "${currentBuild.currentResult}: Job ${env.JOB_NAME}\nMore Info can be found here: ${env.BUILD_URL}"
                        }

                        changed{
                            mail to: "mahdi.arfaoui1@esprit.tn",
                            subject: "Jenkins build:${currentBuild.currentResult}: ${env.JOB_NAME} Data ${BUILD_TIMESTAMP}",
                            from: 'mahdi.arfaoui1@esprit.tn',
                            body: "${currentBuild.currentResult}: Job ${env.JOB_NAME}\nMore Info can be found here: ${env.BUILD_URL}\n and Swagger URL is ${'http://10.0.0.10:8089/SpringMVC/swagger-ui/index.html'} ,Angular URL is ${'http://10.0.0.10:4200'} "
                        }
                    }

}
