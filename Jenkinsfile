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
                // Frontend build
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
				// Frontend unit test execution,
	             script {
	                sh '''
	                    cd frontend
	                    npm run test
	                '''
	             }
	        }
	    }
	    stage('Run Backend Linting') {
	        steps {
                // Run linting the api blog project
                script {
                    sh '''
                        cd backend/blogs
                        npm run lint
                    '''
	            }
	            // Run linting the api blog project
	            script {
	            sh '''
                    cd frontend
                    npm run lint
	            '''
	             }
	        }
	    }
	    stage("Dependencies analysis") {
            steps {
                script {
                     sh '''
                         cd backend/blogs
                         npm install
                         npm audit fix --production --audit-level=critical --force
                         npm audit fix --production --force
                         npm audit --production --audit-level=critical
                     '''
                }
				script {
					sh '''
						cd frontend
                        npm install
                        npm audit fix --production --audit-level=critical --force
                        npm audit fix --production --force
                        npm audit --production --audit-level=critical
					'''
				}
            }
        }
		stage("Push to ECR") {
			script {
				sh '''
					aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 622817277005.dkr.ecr.eu-west-2.amazonaws.com
					docker build -t backend-blogs .
					docker tag backend-blogs:v1 622817277005.dkr.ecr.eu-west-2.amazonaws.com/backend-blogs:v1
					docker push 622817277005.dkr.ecr.eu-west-2.amazonaws.com/backend-blogs:latest
				'''
			}
		}
	}
}