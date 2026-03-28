# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.14.0

# Base Stage
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs && \
    chown -R nodejs:nodejs /usr/src/app

# Development Dependencies Stage
FROM base AS deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.cache/yarn \
    yarn install --frozen-lockfile

# Development Stage
FROM base AS development
ENV NODE_ENV=development
ENV RUN_IN_CONTAINER=true
RUN apk add --no-cache git
COPY --from=deps --chown=nodejs:nodejs /usr/src/app/node_modules ./node_modules
USER nodejs
EXPOSE 5173
CMD ["yarn", "dev"]

# Production Build Stage
FROM base AS build
RUN apk add --no-cache git
COPY --chown=nodejs:nodejs . .
COPY --from=deps --chown=nodejs:nodejs /usr/src/app/node_modules ./node_modules
USER nodejs
RUN yarn run build

# Production Stage
FROM nginx:alpine AS production
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/docs/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
