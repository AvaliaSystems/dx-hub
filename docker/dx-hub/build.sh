#!/bin/bash

cd ../../dx-hub
yarn install --frozen-lockfile
yarn tsc
yarn build:backend --config ../../app-config.yaml ../../app-config.docker.yaml

docker build --file ../docker/dx-hub/Dockerfile -t avaliasystems/dx-hub .
# docker buildx build --platform linux/amd64,linux/arm64 --push -t avaliasystems/dx-hub .

