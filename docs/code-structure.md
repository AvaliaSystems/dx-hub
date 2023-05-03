Here is the code

## We need some data and example entities in our catalog

The way to populate the [Backstage catalog](https://backstage.io/docs/features/software-catalog/) is a vast topic, with several architecture choices that need to be made. It is possible to integrate your portal with your systems (e.g. your VCS, your LDAP server) and to discover entities automatically. 

For the out-of-the-box experience, we have created a number of [YAML files](https://backstage.io/docs/features/software-catalog/descriptor-format) that describe sample entities. These YAML files are used, because they are referenced in the Backstage [`app-config.yaml` file](https://backstage.io/docs/conf/writing).


```
dx-hub/catalog-avalia/**
dx-hub/app-config.yaml
```

## We want to customize the look and feel

It is important that users feel "at home" when visiting a Developer Portal. Backstage gives you control on the look and feel of your application, by providing [theming](https://backstage.io/docs/getting-started/app-custom-theme) capabilities. 

We have included a custom theme, that you can use as an inspiration for your own. To get started, you can copy the `avaliaDxHubTheme` and override some of its properties. We recommend to start with the color schemes, before moving to structural aspects.

To make your theme available in the [User Settings](http://localhost:1400/settings), you will need to also update the `App.tsx` page. Look for the call to the `createApp` function.

```
dx-hub/packages/avalia-dxhub-themes
dx-hub/packages/app/src/App.tsx
```

## We want to add pages and content

When designing the UX of **DX Hub**, our goal was to turn Backstage "inside-out". The standard model is add custom pages *within* the Backstage UI. What we wanted to do was to embed Backstage pages *within* a broad collaborative application.

This is what we have achieved, even if we add to deal with some constraints (mostly on the way TechDocs work, especially in the responsive use cases).

At the moment, we have 3 top-level pages:

* the Home page, which gives an example of
* the Sustainable Bits page
* the DX Kick Start


```
plugins/avalia-dxhub-ui-components-react
  /assets
	/components
	/context
  /pages
```

## We want to present personalized content to our users

```
dx-hub/plugins/avalia-dxhub-ui-components-react/src/context
```