docker compose -f docker-compose-local.yml \
  --env-file web/.env \
  up -d --build 