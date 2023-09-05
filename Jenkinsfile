pipeline {
    agent any
	stages {
	    stage('Build backends') {
	        steps {
                // Build the api blog project
                script {
                    sh 'cd backend/blogs'
                    sh 'ls'
                    sh 'npm install'
                    sh 'npm run build'
                }
	        }
	    }
	}
}