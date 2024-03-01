pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
        sh 'npm install express'
      }
    }

    stage('Start Server') {
      steps {
        sh 'node index.js &'
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
        sh 'pkill -f "node index.js"'
      }
    }
  }
}
