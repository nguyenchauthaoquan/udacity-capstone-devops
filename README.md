# Project: Cloud Devops engineer capstone project

> In this project, I will implement the blogs api and simple react application and apply all aws that I have learnt throughout the Cloud DevOps Nanodegree program.

## What have I applied from the previous projects ?

- Project 2: Use the cloudformation yaml to deploy the pre-defined infrastructure
- Project 3: Use CI/CD to deploy the application. I used Jenkins instead of CircleCI
- Project 4: Build the projects in docker image and deploy to ECR repositories and orchestrate it by kubernetes EKS service

## What will I improve in the future ?

- Prevent the RDS not to access from the public
- Add rollback step execution for some steps in Jenkins CI/CD
- Add launch template for EKS node group

## Project structure

Folder "infrastructure" contains all cloudformation template require to run Jenkins CICD.
Folder backends/blogs contains the backend project, written by nestjs
Folder frontend contains the frontend project, written by react.
Folder reverse-proxy contains the reverse-proxy configurations

## How can I run the applications
You need to deploy the infrastructure defined in "infrastructure" folder first before processing these steps below:
Step 1: Modify the parameters based on your demands in parameters folder inside infrastructure folder
Step 2: In infrastructure folder, run the sh file following the orders below:
1. Run deploy-network-stacks.sh to deploy the network infrastructure first, 
2. Run deploy-jenkins-masterbox.sh to deploy the Jenkins masterbox configured.
3. Run deploy-database-infrastructure.sh to deploy the database infrastructure.
4. Run deploy-containers-infrastructure.sh to deploy the containers infrastructure (ECR repositories, EKS cluster)
5. After deploying all infrastructure done from step 1,2,3 and 4 above, please modify the .env file, some config can be found in infrastructure/parameters/database.json and the outputs of database-stack by the example below:

```
DB_CONNECTION_TYPE=postgres
DB_HOST=<RDS cluster endpoint reference from database-stack output>
DB_NAME=<RDS database name reference from database.json in parameters folder>
DB_PORT=<RDS port reference from database.json in parameters folder>
DB_USER=<RDS username reference from database.json in parameters folder>
DB_PASSWORD=<RDS password reference from database.json in parameters folder>
```

After deploying all cloudformation stack in "infrastructure" folder, you need to configure the Jenkins masterbox following these step below:
Step 1: Following the section Configuring Jenkins in the url https://www.jenkins.io/doc/tutorials/tutorial-for-installing-jenkins-on-AWS/#installing-and-configuring-jenkins 
Step 2: Install the following plugins:
1. Pipeline: AWS Steps
2. Blue Ocean (this plugin is to allow you to monitor the cicd results, please check in the screenshots folder, there are multiple images of this UI)

Step 3: After all plugins installed successfully, add the global credentials in Jenkins by navigating to "Manage Jenkins" > "Manage Credentials" > "Jenkins (global)" > "Global Credentials" > "Add Credentials" and enters the information below:
1. ID: aws-credentials
2. Access Key: <IAM user access key>
3. Secret Key: <IAM user secret key>

Step 4: Add the git pipeline in blue ocean UI
Step 5: Run pipeline on the branch which have Jenkinsfile
Step 6: run `kubectl get services` and access via the external ip of the pods (publicfrontend for accessing frontend application or publicreverseproxy for backend testing api) to access the application