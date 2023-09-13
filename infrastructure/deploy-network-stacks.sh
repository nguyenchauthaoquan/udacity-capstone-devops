aws cloudformation deploy  \
--template-file network.yaml \
--stack-name network-stack \
--region eu-west-2 \
--parameter-overrides file://parameters/network.json

sleep 60