pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'git --version'
            }
        }
    }

    post {
        always {
           sh 'docker image prune'
        }
    }
}