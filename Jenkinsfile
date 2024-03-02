pipeline {
    agent any
    tools {
        git 'Default'
    }
    stages {
    stage('Checkout') {
      steps {
        checkout scm
    }
    }
    }
    stage('Start Server') {
      steps {
        bat 'start node index.js'
        sleep 10 // Wait for the server to start
      }
    }
    post {
        success {
            // Actions to perform if the pipeline succeeds
            echo 'Pipeline succeeded!'
        }
        failure {
            // Actions to perform if the pipeline fails
            echo 'Pipeline failed!'
        }
    }
}
