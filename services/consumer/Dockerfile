FROM node:14.15.4

# Create a directory (to house our source files) and navigate to it.
WORKDIR /src

RUN apt-get update


COPY . /src

RUN npm install --production

