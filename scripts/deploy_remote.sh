#!/usr/bin/env bash
# deploy_remote.sh - Modernized for Docker Compose v2

set -Eeuo pipefail

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

echo "[INFO] Starting deployment script..."

# ────────────────────────────────────────────────
# Cleanup old/unused Docker resources
# ────────────────────────────────────────────────
log "Cleaning old Docker resources..."
docker container prune -f
docker image prune -f
docker builder prune -f
docker volume prune -f 2>/dev/null || true
log "Docker cleanup complete"

# ────────────────────────────────────────────────
# Default / fallback values
# ────────────────────────────────────────────────
REPO_URL="${REPO_URL:-git@github.com:kubeletinfotech/cmccollege.git}"
BRANCH="${BRANCH:-master}"
DEPLOY_PATH="${DEPLOY_PATH:-/apps/web/beta-comcollege/app}"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.yml}"
ENV_FILE_REL_PATH="${ENV_FILE_REL_PATH:-web/.env}"
IMAGE_REF="${IMAGE_REF:-}"
ENV_FILE_B64="${ENV_FILE_B64:-}"

# ────────────────────────────────────────────────
# Required commands check
# ────────────────────────────────────────────────
for cmd in git docker base64; do
  command -v "$cmd" >/dev/null || { echo "ERROR: $cmd not found"; exit 1; }
done

# Check for docker compose v2
if ! docker compose version >/dev/null 2>&1; then
  echo "ERROR: 'docker compose' not available. Please install docker-compose-plugin."
  echo "Run on server: sudo apt install docker-compose-plugin"
  exit 1
fi

# ────────────────────────────────────────────────
# Clone / Update repository
# ────────────────────────────────────────────────
if [ -d "$DEPLOY_PATH/.git" ]; then
  log "Updating repository at $DEPLOY_PATH"
  git -C "$DEPLOY_PATH" fetch origin "$BRANCH"
  git -C "$DEPLOY_PATH" reset --hard "origin/$BRANCH"
else
  log "Cloning repository into $DEPLOY_PATH"
  mkdir -p "$(dirname "$DEPLOY_PATH")"
  git clone --branch "$BRANCH" --depth 1 "$REPO_URL" "$DEPLOY_PATH"
fi

cd "$DEPLOY_PATH" || { echo "Failed to cd into $DEPLOY_PATH"; exit 1; }

# ────────────────────────────────────────────────
# Update .env file (if base64 content provided)
# ────────────────────────────────────────────────
if [ -n "$ENV_FILE_B64" ]; then
  log "Updating env file → $ENV_FILE_REL_PATH"
  mkdir -p "$(dirname "$ENV_FILE_REL_PATH")"
  printf '%s' "$ENV_FILE_B64" | base64 -d > "$ENV_FILE_REL_PATH"
  chmod 600 "$ENV_FILE_REL_PATH" || log "Warning: chmod 600 failed on env file"
  log "Env file updated"
else
  log "Warning: No ENV_FILE_B64 provided → .env file not updated"
fi

# ────────────────────────────────────────────────
# Required: IMAGE_REF
# ────────────────────────────────────────────────
if [ -z "$IMAGE_REF" ]; then
  echo "ERROR: IMAGE_REF is required"
  exit 1
fi

# ────────────────────────────────────────────────
# Pull the new image
# ────────────────────────────────────────────────
log "Pulling image: $IMAGE_REF"
docker pull "$IMAGE_REF"

# ────────────────────────────────────────────────
# Start / recreate services
# ────────────────────────────────────────────────
log "Starting services with image $IMAGE_REF"
IMAGE="$IMAGE_REF" \
  docker compose -f "$COMPOSE_FILE" up -d --remove-orphans --force-recreate

# Optional: show status
log "Current container status:"
docker compose -f "$COMPOSE_FILE" ps

# ────────────────────────────────────────────────
# Final cleanup (old dangling images)
# ────────────────────────────────────────────────
docker image prune -f >/dev/null 2>&1 || true

log "Deployment completed successfully"
exit 0
