pipeline {
    agent any
	stages {
	    stage('Build Project') {
	        steps {
                // Build the api blog project
                script {
                    sh '''
                        cd backend/blogs
                        npm install
                        npm run build
                    '''
                }
                script {
                    sh '''
                        cd frontend
                        npm install
                        npm run build
                    '''
                }
	        }
	    }
	    stage("Unit Testing") {
	        steps {
	            // Build the api blog project
                script {
                    sh '''
                        cd backend/blogs
                        npm run test
                    '''
                }
                script {
                    sh '''
                        cd frontend
                        npm run test
                    '''
                }
        	}
	    }
	    stage('Run Linting') {
	        steps {
                // Run linting the api blog project
                script {
                    sh '''
                        cd backend/blogs
                        npm run lint
                    '''
	            }
	            script {
	                sh '''
	                    cd frontend
	                    npm run lint
                	'''
                }
	        }
	    }
	}
}