pipeline {
    agent any
	stages {
	    stage('Build backends') {
	        steps {
                // Build the api blog project
                script {
                    sh '''
                    cd backend/blogs
                    npm install
                    npm run build
                    '''
                }
	        }
	    }
	    stage('Build frontend') {
	        steps {
	            script {
	                sh '''
	                cd frontend
	                npm install
	                npm run build
	                '''
	            }
	        }
	    }
	    stage('Linting backends') {
	        steps {
                // Build the api blog project
                script {
                    sh '''
                    cd backend/blogs
                    ls
                    '''
	            }
	        }
	    }
	}
}