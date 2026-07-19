#!/bin/sh

echo "Applying Prisma migrations..."

npx prisma migrate deploy

echo "Starting FormFlow API..."

node dist/server.js