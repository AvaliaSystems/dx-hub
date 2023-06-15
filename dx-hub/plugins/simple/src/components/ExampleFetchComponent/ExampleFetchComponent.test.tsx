import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExampleFetchComponent } from './ExampleFetchComponent';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  MockFetchApi,
  TestApiProvider,
  renderInTestApp,
  setupRequestMockHandlers,
} from '@backstage/test-utils';
import { fetchApiRef } from '@backstage/core-plugin-api';

describe('ExampleFetchComponent', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  setupRequestMockHandlers(server);

  // setup mock response
  beforeEach(() => {
    server.use(
      rest.get('https://randomuser.me/*', (_, res, ctx) =>
        res(ctx.status(200), ctx.delay(2000), ctx.json({})),
      ),
    );
  });
  it('should render', async () => {
    await renderInTestApp(
      <TestApiProvider apis={[[fetchApiRef, new MockFetchApi()]]}>
        <ExampleFetchComponent />
      </TestApiProvider>,
    );
    expect(await screen.findByTestId('progress')).toBeInTheDocument();
  });
});
