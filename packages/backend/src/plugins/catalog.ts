import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { VelaProvider } from '@oamdev/plugin-kubevela-backend';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);

  const vela = new VelaProvider('production', env.reader, env.config);
  builder.addEntityProvider(vela);
  const frequency: number = env.config.getOptionalNumber('vela.frequency') || 60;
  const timeout: number = env.config.getOptionalNumber('vela.timeout') || 600;

  builder.addProcessor(new ScaffolderEntitiesProcessor());
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();

  await env.scheduler.scheduleTask({
    id: 'run_vela_refresh',
    fn: async () => { await vela.run(); },
    frequency: { seconds: frequency },
    timeout: { seconds: timeout },
  });

  return router;
}
