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

    stage('Stop Server') {
      steps {
        bat 'taskkill /F /IM node.exe'
      }
    }
  }
}
