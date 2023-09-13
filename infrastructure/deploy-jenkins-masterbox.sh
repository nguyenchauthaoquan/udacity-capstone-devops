aws cloudformation deploy  \
--template-file jenkins.yaml \
--stack-name jenkins-masterbox-stack \
--region eu-west-2 \
--parameter-overrides file://parameters/jenkins.json

sleep 100