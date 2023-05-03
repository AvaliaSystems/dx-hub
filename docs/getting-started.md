# Getting started

## Setup your environment

* Install node.js, version 18 (this is important: while Backstage officially supports version 16, we have had issues in the past and decided to stick with version 18)
* Install Docker (required to run TechDocs)
* Setup your IDE

## Fork the repo and start DX Hub

1. **Fork this repo**. At some point, our software templates will allow you to create your own components and plugins within this repo. If you want to benefit from this feature, it will be easier to work with a fork than a simple clone. 

2. Create a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). To setup the [integration with GitHub](https://backstage.io/docs/integrations/github/locations), you will need to add to the Backstage configuration file.

3. **Give it a first try**. Like all Backstage instances, DX Hub is a full-stack application written in typescript. In the backend, it is built on top of express.js. In the frontend, it is built with React. To start your Portal, you only need to fetch the dependencies and use the `yarn dev` command. This will start the two backend and frontend processes, and should open your browser.

```
cd dx-hub
yarn install
yarn dev
```

## Enjoy!

You should now be able to access DX Hub at http://localhost:1400.