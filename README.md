# Polkadot Live Docs

The Polkadot Live documentation portal.

## Local Development

Install dependencies and start the dev server:

```bash
yarn install
yarn dev
```

The site is available at `http://localhost:5173`.

To build and preview the production output locally:

```bash
yarn build
yarn preview
```

## Docker Development

Starts a dev server with hot-reload. Source files are volume-mounted so changes are reflected without rebuilding the image.

```bash
yarn docker:dev
# or with a fresh build
yarn docker:dev --build
```

The site is available at `http://localhost:5173`.

## Docker Production

Builds the static site and serves it via nginx.

```bash
yarn docker:prod
# or with a fresh build
yarn docker:prod --build
```

The site is available at `http://localhost:3000`.

## Stopping Containers

```bash
docker compose --profile dev down
docker compose --profile prod down
```
