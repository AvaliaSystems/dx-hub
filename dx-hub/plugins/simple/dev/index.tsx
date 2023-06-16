import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { simplePlugin, SimplePage } from '../src/plugin';

createDevApp()
  .registerPlugin(simplePlugin)
  .addPage({
    element: <SimplePage />,
    title: 'Root Page',
    path: '/simple'
  })
  .render();
