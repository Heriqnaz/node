FROM node:10.9-alpine

#
WORKDIR /src


COPY ./package.json ./package-lock.json /src/

RUN npm install

COPY ./src /src/
