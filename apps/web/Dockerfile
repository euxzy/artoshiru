# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /app

# environment variables
ARG PUBLIC_SERVER_URL
ARG PUBLIC_APP_URL
ENV PUBLIC_SERVER_URLL=$PUBLIC_SERVER_URL
ENV PUBLIC_APP_URL=$PUBLIC_APP_URL

# globally install turbo
FROM base AS builder
RUN bun install turbo@^2.5.4 --global
COPY . .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
RUN turbo prune web server --docker

# install dependencies
FROM base AS installer
COPY --from=builder /app/out/json/ .
RUN bun install

ENV NODE_ENV=production

# copy dependencies and source code into final image
COPY --from=builder /app/out/full/ .
RUN bun run prepare:web

# build the app
WORKDIR /app/apps/web
RUN bun run build

# run the app
USER bun
EXPOSE 4173/tcp
ENTRYPOINT ["bun", "run", "start"]