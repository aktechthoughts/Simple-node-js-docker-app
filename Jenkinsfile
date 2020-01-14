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
            additionalBuildArgs  '--build-arg version=1.0.0 -t node/app:v1' 
                     
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


    