pipeline {
  agent any
  stages {
    stage('Source') {
      steps {
        git(url: 'https://github.com/MatsNord/ng5.git', branch: 'master', changelog: true, poll: true, credentialsId: 'MatsNord')
      }
    }
  }
  environment {
    CI = 'true'
  }
}