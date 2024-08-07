import React from 'react';
import { Route } from 'react-router-dom';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { SearchPage } from '@backstage/plugin-search';
import { TechRadarPage } from '@backstage/plugin-tech-radar';
import {
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
} from '@backstage/plugin-techdocs';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import {
  SettingsLayout,
  UserSettingsPage,
} from '@backstage/plugin-user-settings';
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { Root } from './components/Root';

import { AlertDisplay, OAuthRequestDialog } from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { DevToolsPage } from '@backstage/plugin-devtools';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { avaliaDxHubTheme } from '@internal/avalia-dxhub-themes';
import { AvaliaDxHubHomePage } from '@internal/plugin-avalia-dxhub-ui-components-react';
import { AvaliaDxKickStartPage } from '@internal/plugin-avalia-dxhub-ui-components-react';
import { SustainableBitsPage } from '@internal/plugin-avalia-dxhub-ui-components-react/src/pages/SustainableBitsPage';
import { MiscUserSettingsTab } from './components/userSettings/MiscUserSettingsTab';
import { SimplePage } from '@avaliasystems/plugin-simple';

const app = createApp({
  apis,
  themes: [
    {
      id: 'avalia-dxhub-theme',
      title: 'Avalia',
      variant: 'light',
      Provider: ({ children }) => (
        <ThemeProvider theme={avaliaDxHubTheme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      ),
    },
  ],
  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
});

const routes = (
  <FlatRoutes>
    <Route path="/" element={<AvaliaDxHubHomePage />} />
    <Route path="/avalia-dx-kickstart" element={<AvaliaDxKickStartPage />} />
    <Route path="/sustainable-bits" element={<SustainableBitsPage />} />
    <Route
      path="/catalog"
      element={<CatalogIndexPage initiallySelectedFilter="all" />}
    />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    >
      <TechDocsAddons>
        <ReportIssue />
      </TechDocsAddons>
    </Route>
    <Route path="/create" element={<ScaffolderPage />} />
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route
      path="/tech-radar"
      element={<TechRadarPage width={1500} height={800} />}
    />
    <Route
      path="/catalog-import"
      element={
        <RequirePermission permission={catalogEntityCreatePermission}>
          <CatalogImportPage />
        </RequirePermission>
      }
    />
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>
    <Route path="/settings" element={<UserSettingsPage />}>
      <SettingsLayout.Route path="/advanced" title="Misc">
        <MiscUserSettingsTab />
      </SettingsLayout.Route>
    </Route>
    <Route path="/devtools" element={<DevToolsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />
    <Route path="/simple" element={<SimplePage />} />
  </FlatRoutes>
);

// create root

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);
