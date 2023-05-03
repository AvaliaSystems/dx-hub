# Installation log
### Setup and scaffolding

1. Make sure that we are using **Node v18.16.0**
2. Use the standard way to scaffold a new Backstage application:`npx @backstage/create-app@latest`
3. Setup basic configuration (e.g. communication ports) in `app-config.yaml`

### Theming

1. Create a web library package named `avalia-dxhub-themes` with this command: `yarn new --select web-library`
2. `yarn --cwd packages/avalia-dxhub-themes add @backstage/theme`
3. `yarn --cwd packages/avalia-dxhub-themes add @backstage/core-components`
4. `yarn --cwd packages/avalia-dxhub-themes add @backstage/plugin-catalog-react`
5. `yarn --cwd packages/app add @internal/avalia-dxhub-themes@^0.1.0`
6. Update `packages/app/src/App.tsx` to use our themes

### Create DX Hub Components and use them

1. `yarn --cwd packages/app add @internal/plugin-avalia-dxhub-ui-components-react@^0.1.0`

2. `yarn --cwd plugins/avalia-dxhub-ui-components-react add @backstage/theme`

3. `yarn --cwd packages/app add @material-ui/lab`

4. `yarn --cwd plugins/avalia-dxhub-ui-components-react add @material-ui/icons`

5. `yarn --cwd plugins/avalia-dxhub-ui-components-react add recharts`

6. `yarn --cwd plugins/avalia-dxhub-ui-components-react add react-use`

7. `yarn --cwd plugins/avalia-dxhub-ui-components-react add @backstage/core-components`

8. `yarn --cwd plugins/avalia-dxhub-ui-components-react add @backstage/plugin-catalog-react`

9. `yarn --cwd plugins/avalia-dxhub-ui-components-react add @backstage/catalog-model`

     
