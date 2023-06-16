import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const simplePlugin = createPlugin({
  id: 'simple',
  routes: {
    root: rootRouteRef,
  },
});

export const SimplePage = simplePlugin.provide(
  createRoutableExtension({
    name: 'SimplePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
