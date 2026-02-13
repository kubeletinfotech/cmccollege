export IMAGE_REF=ghcr.io/kubeletinfotech/cmccollege-web:latest
export HOST_PORT=3000
export CONTAINER_PORT=3000

docker pull "$IMAGE_REF"
docker-compose -f docker-compose.yml up -d --no-build
