## Docker image: `avaliasystems/dx-hub`

The standard way to use Backstage is to use the CLI to generate the skeleton on a new _instance_ (your own Developer Portal). When the code has been generated, the configuration is done by changing the code. Plugins have to be installed as npm dependencies, hooked to pages and routers, etc. This shows that Backstage is _not a tool_, but rather an _application framework_ that makes the development of portals easier and faster.

To support initial exploration and testing, Spotify provides an [online demo environment](https://demo.backstage.io), but does not provide any Docker image. Our image fills this gap and allows you to run a pre-configured Backstage portal on your machine. We find this useful to run demonstrations, especially with business stakeholders.

## Docker image: `avaliasystems/techdocs`

We have created this image to support advanced **"diagram as code"** features in TechDocs.

The default image ([`spotify/techdocs`](https://hub.docker.com/r/spotify/techdocs)) provided by Spotify has limited support. For instance, it does not support [mermaid](https://mermaid.js.org/). We have added this [mkdocs plugin](https://pypi.org/project/mkdocs-kroki-plugin/) to enable a wide range of diagrams via [https://kroki.io/](kroki).

Be aware that with the standard configuration, diagram data is sent to the public kroki.io server (it it possible to run your own).

The kroki plugin allows us to embed diagrams such as these:

```kroki-blockdiag no-transparency=false
blockdiag {
  "Backstage" -> "DX Hub" -> "Your Platform";
}
```

## Docker Compose topology

The top-level directory contains a `docker-compose.yaml` file. Its objective is only to support the "quick start" discovery of DX Hub. Once you start customizing DX Hub to implement your portal, you will have to evolve this configuration.

Here are some of the properties of the deployment (see `dx-hub/app-config.yaml`):

- we use the **in-memory** database
- we generate Techdocs documentation **locally** (i.e. we do not use the avaliasystems/techdocs image)
- we store the generated documentation in `/backend/techdocs-cache` (in the default config, it is stored under `node_modules`)
