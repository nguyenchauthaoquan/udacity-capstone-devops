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
	}
}