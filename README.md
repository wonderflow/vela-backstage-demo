# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev
```

## Build Docker Image

Follow the host build doc: https://backstage.io/docs/deployment/docker#host-build . You must run the following commands before `docker build`.

```
yarn install --frozen-lockfile

# tsc outputs type definitions to dist-types/ in the repo root, which are then consumed by the build
yarn tsc

# Build the backend, which bundles it all up into the packages/backend/dist folder.
yarn build:backend
```

* Build and Run Image

```
docker build . -t oamdev/backstage-plugin-kubevela
docker run -p 7007:7007 wonderflow/backstage
```