FROM oven/bun:1 AS base

# Set working directory
WORKDIR /app

COPY ./client /app/client
COPY ./server /app/server
COPY package.json /app
COPY bun.lockb /app
COPY drizzle.config.ts /app
copy tsconfig.json /app

# Set environment variables for the Vite build
ARG VITE_BASE_URL
ARG VITE_API_BASE_URL
ARG VITE_LOGTO_ENDPOINT
ARG VITE_LOGTO_APPID
ARG POSTGRES_URL

# Create the .env file for Vite
RUN echo "VITE_BASE_URL=$VITE_BASE_URL" >> /app/client/.env && \
    echo "VITE_API_BASE_URL=$VITE_API_BASE_URL" >> /app/client/.env && \
    echo "VITE_LOGTO_ENDPOINT=$VITE_LOGTO_ENDPOINT" >> /app/client/.env && \
    echo "VITE_LOGTO_APPID=$VITE_LOGTO_APPID" >> /app/client/.env && \
    echo "POSTGRES_URL=$POSTGRES_URL" >> /app/.env

RUN bun install --frozen-lockfile --production
RUN cd /app/client && bun install --frozen-lockfile --production && bun run build

# Expose port (optional, based on your application's needs)
EXPOSE 3000

# Command to run the project
CMD ["bun", "run", "dev"]
