#!/bin/bash

set -e

echo "=============================="
echo "Deploying FormFlow"
echo "=============================="

cd ~/formflow

echo "Pulling latest images..."

docker compose \
    --env-file .env.production \
    -f docker-compose.prod.yml \
    pull

echo "Starting containers..."

docker compose \
    --env-file .env.production \
    -f docker-compose.prod.yml \
    up -d

echo "Removing unused images..."

docker image prune -f

echo "Deployment complete."