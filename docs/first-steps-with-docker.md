The quickest way to get started is to use the provided Docker Compose configuration and our Docker image. In this case, there is no need to install `yarn`, `node` or `typescript`.

## Fork the repo and start DX Hub

1. **Fork this repo**. At some point, our software templates will allow you to create your own components and plugins within this repo. If you want to benefit from this feature, it will be easier to work with a fork than a simple clone.

2. **Start DX Hub with Docker**:

```
git clone https://github.com/your-org/dx-hub
cd dx-hub
docker-compose up
```

## Enjoy!

You should now be able to access DX Hub at http://localhost:1407.

## Customization

### I would like to change the content of the catalog

You may want to replace the initial content with your teams, components, etc. Have a look at the `dx-hub/catalog-avalia/` directory. It is mounted as a volume, which means that you can edit the files and see the effect in the portal.

### I would like to change the color scheme

Coming soon. If you need this, please vote for [this issue](https://github.com/AvaliaSystems/dx-hub/issues/2).

### I would like to use my own logo

Coming soon. If you need this, please vote for [this issue](https://github.com/AvaliaSystems/dx-hub/issues/3).

### I would like to replace the images in the home page

Coming soon. If you need this, please vote for [this issue](https://github.com/AvaliaSystems/dx-hub/issues/4).
