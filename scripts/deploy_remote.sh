#!/usr/bin/env bash
set -Eeuo pipefail

# Remote deployment script for the cmccollege Docker app.
# Intended to be executed on the target host via SSH from GitHub Actions.

REPO_URL="${REPO_URL:-git@github.com:kubeletinfotech/cmccollege.git}"
BRANCH="${BRANCH:-master}"
DEPLOY_PATH="${DEPLOY_PATH:-/apps/web/beta-comcollege/app}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.yml}"
ENV_FILE_REL_PATH="${ENV_FILE_REL_PATH:-web/.env}"
IMAGE_REF="${IMAGE_REF:-}"
HOST_PORT="${HOST_PORT:-3000}"
CONTAINER_PORT="${CONTAINER_PORT:-3000}"
ENV_FILE_B64="${ENV_FILE_B64:-}"

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || {
    echo "Missing required command: $1" >&2
    exit 1
  }
}

require_cmd git
require_cmd docker
require_cmd base64

if [ -d "$DEPLOY_PATH/.git" ]; then
  log "Updating existing repository at $DEPLOY_PATH"
  git -C "$DEPLOY_PATH" remote set-url origin "$REPO_URL"
  git -C "$DEPLOY_PATH" fetch --prune origin "$BRANCH"
  git -C "$DEPLOY_PATH" checkout -B "$BRANCH" "origin/$BRANCH"
elif [ -d "$DEPLOY_PATH" ]; then
  echo "Deployment path exists but is not a git repository: $DEPLOY_PATH" >&2
  echo "Refusing to delete existing directory." >&2
  exit 1
else
  log "Cloning repository into $DEPLOY_PATH"
  mkdir -p "$(dirname "$DEPLOY_PATH")"
  git clone --branch "$BRANCH" --depth 1 "$REPO_URL" "$DEPLOY_PATH"
fi

cd "$DEPLOY_PATH"

if [ ! -f "$COMPOSE_FILE" ]; then
  echo "Could not find compose file at $DEPLOY_PATH/$COMPOSE_FILE" >&2
  exit 1
fi

if [ -n "$ENV_FILE_B64" ]; then
  mkdir -p "$(dirname "$ENV_FILE_REL_PATH")"
  printf '%s' "$ENV_FILE_B64" | base64 -d > "$ENV_FILE_REL_PATH"
  chmod 600 "$ENV_FILE_REL_PATH" || true
  log "Updated env file at $DEPLOY_PATH/$ENV_FILE_REL_PATH"
fi

if [ -z "$IMAGE_REF" ]; then
  echo "IMAGE_REF is required" >&2
  exit 1
fi

docker_compose() {
  if [ "$(id -u)" -eq 0 ]; then
    IMAGE_REF="$IMAGE_REF" HOST_PORT="$HOST_PORT" CONTAINER_PORT="$CONTAINER_PORT" docker compose -f "$COMPOSE_FILE" "$@"
  else
    sudo env IMAGE_REF="$IMAGE_REF" HOST_PORT="$HOST_PORT" CONTAINER_PORT="$CONTAINER_PORT" \
      docker compose -f "$COMPOSE_FILE" "$@"
  fi
}

log "Pulling image: $IMAGE_REF"
docker_compose pull web

log "Recreating container"
docker_compose up -d --no-build web

log "Current container status"
docker_compose ps

log "Deployment complete"
