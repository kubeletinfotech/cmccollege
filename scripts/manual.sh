cd ../.
REPO_URL='git@github.com:kubeletinfotech/cmccollege.git' \
BRANCH='master' \
DEPLOY_PATH='/apps/web/beta-comcollege/app' \
COMPOSE_FILE='docker-compose.yml' \
ENV_FILE_REL_PATH='web/.env' \
IMAGE_REF='ghcr.io/kubeletinfotech/cmccollege-web:latest' \
HOST_PORT='3000' \
CONTAINER_PORT='3000' \
ENV_FILE_B64='' \
bash ./scripts/deploy_remote.sh




#skip pull.


