The structure of the DX Hub codebase follows the structure of all Backstage instances. To explore it and to customize the portal, here are some of the interesting entry points:

- `dx-hub/packages/app`. This package contains the **frontend** code. This is where frontend plugins are wired up and configured, where routes are defined.
- `dx-hub/packages/avalia-dxhub-themes`. This package contains our theme for DX Hub, which extends the Backstage theme. This is where you will work if you want to customize the UI with your brand colors and assets.
- `dx-hub/packages/backend`. This package contains the **backend** code (based on express.js). This is where backend plugins are wired up and configured.
- `dx-hub/plugins/avalia-dxhub-ui-components-react`. In the first version of DX Hub, we have created a single frontend plugin with all the logic to keep things simple. If you dig into this part of the codebase, you will find a number of React components and pages. You will also find several hooks that demonstrate how to fetch data from remote services. This is where you will work if you want to add a page, or if you want to change the content of existing pages.

## Q&A

### I want to change the content of the catalog

The way to populate the [Backstage catalog](https://backstage.io/docs/features/software-catalog/) is a vast topic, with several architecture choices that need to be made. It is possible to integrate your portal with your systems (e.g. your VCS, your LDAP server) and to discover entities automatically.

For the out-of-the-box experience, we have created a number of [YAML files](https://backstage.io/docs/features/software-catalog/descriptor-format) that describe sample entities. These YAML files are used, because they are referenced in the Backstage [`app-config.yaml` file](https://backstage.io/docs/conf/writing).

```
dx-hub/catalog-avalia/**
dx-hub/app-config.yaml
```

### I want to customize the look and feel

It is important that users feel "at home" when visiting a Developer Portal. Backstage gives you control on the look and feel of your application, by providing [theming](https://backstage.io/docs/getting-started/app-custom-theme) capabilities.

We have included a custom theme, that you can use as an inspiration for your own. To get started, you can copy the `avaliaDxHubTheme` and override some of its properties. We recommend to start with the color schemes, before moving to structural aspects.

To make your theme available in the [User Settings](http://localhost:1400/settings), you will need to also update the `App.tsx` page. Look for the call to the `createApp` function.

```
dx-hub/packages/avalia-dxhub-themes
dx-hub/packages/app/src/App.tsx
```

### I want to add pages and content

When designing the UX of **DX Hub**, our goal was to turn Backstage "inside-out". The standard model is add custom pages _within_ the Backstage UI. What we wanted to do was to embed Backstage pages _within_ a broad collaborative application.

This is what we have achieved, even if we add to deal with some constraints (mostly on the way TechDocs work, especially in the responsive use cases).

At the moment, we have 3 top-level pages:

- the Home page, which gives an example of
- the Sustainable Bits page
- the DX Kick Start

```
plugins/avalia-dxhub-ui-components-react
  /assets
	/components
	/context
  /pages
```

### I want to present personalized content to users

One objective of DX Hub is to reach out to non-technical users. The information presented to users should depend on their "persona". In the home page, the list of KPIs and the content of the News Feed illustrate this idea. If you want to apply this pattern to your own content, have a look at the React context provider that we have created.

```
dx-hub/plugins/avalia-dxhub-ui-components-react/src/context
```
