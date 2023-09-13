aws cloudformation deploy  \
--template-file containers.yaml \
--stack-name containers-stack \
--region eu-west-2 \
--capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
--parameter-overrides file://parameters/containers.json

sleep 60