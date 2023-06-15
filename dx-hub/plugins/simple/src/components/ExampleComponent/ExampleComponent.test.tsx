import React from 'react';
import { ExampleComponent } from './ExampleComponent';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import {
  setupRequestMockHandlers,
  renderInTestApp,
  MockFetchApi,
  TestApiProvider,
} from '@backstage/test-utils';
import { fetchApiRef } from '@backstage/core-plugin-api';

describe('ExampleComponent', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  setupRequestMockHandlers(server);

  // setup mock response
  beforeEach(() => {
    server.use(
      rest.get('/*', (_, res, ctx) => res(ctx.status(200), ctx.json({}))),
    );
  });

  it('should render', async () => {
    await renderInTestApp(
      <TestApiProvider apis={[[fetchApiRef, new MockFetchApi()]]}>
        <ExampleComponent />
      </TestApiProvider>,
    );
    expect(screen.getByText('Welcome to simple!')).toBeInTheDocument();
  });
});
