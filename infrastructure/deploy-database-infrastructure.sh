aws cloudformation deploy  \
--template-file database.yaml \
--stack-name database-stack \
--region eu-west-2 \
--parameter-overrides file://parameters/database.json

sleep 60