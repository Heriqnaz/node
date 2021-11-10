

FROM node:10.9-alpine
MAINTAINER Anthony Hastings <ar.hastings@gmail.com>

# Create a directory (to house our source files) and navigate to it.
WORKDIR /src


# Copy over the package.json and lock file to the containers working directory.
COPY ./package.json ./package-lock.json /src/

# Copy everything in the host folder into the working folder of the container.
COPY ./src /src/

RUN  npm install && npm start
