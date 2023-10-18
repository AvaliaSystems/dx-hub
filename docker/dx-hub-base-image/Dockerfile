FROM node:18-bookworm-slim

RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
  --mount=type=cache,target=/var/lib/apt,sharing=locked \
  npm install -g node-gyp && \
  apt-get update && \
  apt-get install -y --no-install-recommends libsqlite3-dev python3 python3-pip python3-venv build-essential g++ gcc musl-dev openjdk-17-jdk curl graphviz fonts-dejavu fontconfig

#
# Set up a virtual environment for mkdocs-techdocs-core
#
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

#
# Install TechDocs requirements
#
RUN curl -o plantuml.jar -L http://sourceforge.net/projects/plantuml/files/plantuml.1.2022.4.jar/download && echo "246d1ed561ebbcac14b2798b45712a9d018024c0  plantuml.jar" | sha1sum -c - && mv plantuml.jar /opt/plantuml.jar
RUN pip install --upgrade pip && pip install mkdocs-techdocs-core==1.1.7
RUN pip install mkdocs-kroki-plugin
#RUN echo $'#!/bin/sh\n\njava -jar '/opt/plantuml.jar' ${@}' >> /usr/local/bin/plantuml
RUN echo '#!/bin/sh\n\njava -jar '/opt/plantuml.jar' ${@}' >> /usr/local/bin/plantuml
RUN chmod 755 /usr/local/bin/plantuml

USER node

WORKDIR /app

ENV NODE_ENV production
