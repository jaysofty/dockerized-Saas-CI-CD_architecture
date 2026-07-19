# ==========================
# Stage 1 - Build
# ==========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files first for better caching
COPY package*.json ./

RUN npm ci

# Copy Prisma files
COPY prisma ./prisma
COPY prisma.config.ts ./

# Generate Prisma Client
RUN npx prisma generate

# Copy source code
COPY tsconfig.json ./
COPY src ./src

# Copy documentation
COPY docs ./docs

# Compile TypeScript
RUN npm run build

# Remove dev dependencies
RUN npm prune --omit=dev


# ==========================
# Stage 2 - Production
# ==========================
FROM node:20-alpine

WORKDIR /app

# Install wget for Docker health checks
RUN apk add --no-cache wget

# Create a non-root user
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup

ENV NODE_ENV=production

# Copy production dependencies
COPY --from=builder /app/node_modules ./node_modules

# Copy compiled application
COPY --from=builder /app/dist ./dist

# Copy Prisma schema
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./

# copy compiled swagger docs
COPY --from=builder /app/docs ./docs

# OCI labels
LABEL org.opencontainers.image.title="FormFlow Backend"
LABEL org.opencontainers.image.description="Express API for FormFlow"
LABEL org.opencontainers.image.version="1.0.0"

# Set ownership
RUN chown -R appuser:appgroup /app

# Copy entrypoint
COPY docker-entrypoint.sh .

# Make executable
RUN chmod +x docker-entrypoint.sh && \
    chown appuser:appgroup docker-entrypoint.sh

# Switch to non-root user
USER appuser

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
CMD wget --no-verbose --tries=1 --spider http://localhost:5000/api/v1/health || exit 1

CMD ["./docker-entrypoint.sh"]