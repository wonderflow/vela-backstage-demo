# kubevela-backend

Welcome to the kubevela-backend backend plugin!

This plugin provides an `Entity Provider` called `VelaProvider` to read KubeVela Applications.

You will need to configure the providers in your catalog.ts file in your backstage backend:

```typescript
import { VelaProvider } from '@internal/plugin-kubevela-backend'; // This name will be changed once npm reg is published

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);

  // -- Start --
  const vela = new VelaProvider('production', env.reader, env.config);
  builder.addEntityProvider(vela);
  const frequency: number = env.config.getOptionalNumber('vela.frequency') || 60;
  const timeout: number = env.config.getOptionalNumber('vela.timeout') || 600;
  // -- End --

  builder.addProcessor(new ScaffolderEntitiesProcessor());
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();

  // -- Start --
  await env.scheduler.scheduleTask({
    id: 'run_vela_refresh',
    fn: async () => { await vela.run(); },
    frequency: { seconds: frequency },
    timeout: { seconds: timeout },
  });
  // -- End --

  return router;
}
```

You also need to run [backstage-plugin-kubevela](https://github.com/kubevela-contrib/backstage-plugin-kubevela) first before running the backstage app, to actually read KubeVela Applications.


Configure `vela.host` and `backend.reading.allow` in your backstage config, pointing to the kubevela plugin endpoint.

```yaml
vela:
  host: "http://47.254.33.41:32505"
  # frequency is the refresh rate for the Vela API, default to 60 seconds, the unit is seconds
  frequency: 30
  # timeout is the timeout limit for the Vela API, default to 600 seconds, the unit is seconds
  timeout: 60

backend:
  reading:
    allow:
      - host: 47.254.33.41:32505
```
