/*
pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'echo "Application Build Successful."'
            }
        }
    }
}
*/


pipeline {
    agent { 
        dockerfile {
            filename 'Dockerfile'
            dir 'build'
            label 'node-app'
            additionalBuildArgs  '--build-arg version=1.0.0'
            args '-t node/app:v1 '
            
        }
    }
    stages {
        stage('Test') {
            steps {
                sh 'echo "Application Build Successful."'
            }
        }
    }
}


    