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
docker build . -t wonderflow/backstage
docker run -p 7007:7007 wonderflow/backstage
```

## Use Entity Provider for Vela Integrations

We will leverage the [external integrations](https://backstage.io/docs/features/software-catalog/external-integrations) mechanism and works as a `Custom Entity Providers`.

We will run a [go sever as plugin](https://github.com/kubevela-contrib/backstage-plugin-kubevela) to connect to Kubernetes API and request vela applications, it provides an API endpoint for serving entities for backstage app.

- If you want to test it, you need to [run it locally](https://github.com/kubevela-contrib/backstage-plugin-kubevela#install-and-run).
- If you use this backstage as [KubeVela addon](https://github.com/kubevela/catalog/tree/master/experimental/addons/backstage), just replace the image and update the addon.

As a result, we need to follow the [Creating an Entity Provider](https://backstage.io/docs/features/software-catalog/external-integrations#creating-an-entity-provider) guide to customize.


