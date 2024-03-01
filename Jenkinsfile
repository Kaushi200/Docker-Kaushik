pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Start Server') {
      steps {
        bat 'start node index.js'
        sleep 10 // Wait for the server to start
      }
    }

    stage('Run API Tests') {
      steps {
        sh 'npm run api-tests'
      }
    }

    stage('Stop Server') {
      steps {
        bat 'taskkill /F /IM node.exe'
      }
    }
  }
}
