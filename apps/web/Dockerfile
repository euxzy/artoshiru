# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /app

# globally install turbo
FROM base AS builder
RUN bun install turbo@^2.5.4 --global
COPY . .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
RUN turbo prune web --docker

# install dependencies
FROM base AS installer
COPY --from=builder /app/out/json/ .
RUN bun install

ENV NODE_ENV=production

# copy dependencies and source code into final image
COPY --from=builder /app/out/full/ .
RUN bun run build

# run the app
WORKDIR /app/apps/web
USER bun
EXPOSE 4173/tcp
ENTRYPOINT ["bun", "run", "start"]