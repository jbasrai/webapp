FROM node:4-onbuild

MAINTAINER Jauhar

# cache node_modules
COPY package.json /tmp/package.json
RUN cd /tmp && npm install && npm rebuild node-sass
RUN mkdir -p /src && cp -a /tmp/node_modules /src

WORKDIR /src
COPY . /src
