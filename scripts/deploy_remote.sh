#!/usr/bin/env bash
#deploy_remote.sh
set -Eeuo pipefail


echo "[INFO] Cleaning old Docker resources..."

# Remove unused containers
docker container prune -f

# Remove unused images
docker image prune -af

# Remove build cache
docker builder prune -af

# Remove unused volumes
docker volume prune -f

echo "[INFO] Docker cleanup complete"


export HOST_PORT=3000
export CONTAINER_PORT=3000
REPO_URL="${REPO_URL:-git@github.com:kubeletinfotech/cmccollege.git}"
BRANCH="${BRANCH:-master}"
DEPLOY_PATH="${DEPLOY_PATH:-/apps/web/beta-comcollege/app}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.yml}"
ENV_FILE_REL_PATH="${ENV_FILE_REL_PATH:-web/.env}"
IMAGE_REF="${IMAGE_REF:-}"
ENV_FILE_B64="${ENV_FILE_B64:-}"

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

# --- Required Commands ---
command -v git >/dev/null || { echo "git not found"; exit 1; }
command -v docker >/dev/null || { echo "docker not found"; exit 1; }
command -v base64 >/dev/null || { echo "base64 not found"; exit 1; }

# --- Clone or Update Repo ---
if [ -d "$DEPLOY_PATH/.git" ]; then
  log "Updating repository at $DEPLOY_PATH"
  git -C "$DEPLOY_PATH" fetch origin "$BRANCH"
  git -C "$DEPLOY_PATH" reset --hard "origin/$BRANCH"
else
  log "Cloning repository into $DEPLOY_PATH"
  mkdir -p "$(dirname "$DEPLOY_PATH")"
  git clone --branch "$BRANCH" --depth 1 "$REPO_URL" "$DEPLOY_PATH"
fi

cd "$DEPLOY_PATH"

# --- Update .env file ---
if [ -n "$ENV_FILE_B64" ]; then
  log "Creating env  $ENV_FILE_B64 on path $ENV_FILE_REL_PATH "
  mkdir -p "$(dirname "$ENV_FILE_REL_PATH")"
  printf '%s' "$ENV_FILE_B64" | base64 -d > "$ENV_FILE_REL_PATH"
  chmod 600 "$ENV_FILE_REL_PATH" || true
  log "Updated env file"
fi

if [ -z "$IMAGE_REF" ]; then
  echo "IMAGE_REF is required"
  exit 1
fi

# --- Pull new image ---
log "Pulling image: $IMAGE_REF"
docker pull "$IMAGE_REF"

# --- Start container ---
log "Starting container"
#IMAGE_REF="$IMAGE_REF" docker compose -f "$COMPOSE_FILE" up -d --no-build
IMAGE_REF="$IMAGE_REF" docker-compose -f "$COMPOSE_FILE" up -d --no-build

# --- Cleanup old images ---
docker image prune -f >/dev/null 2>&1 || true

log "Deployment completed successfully"
