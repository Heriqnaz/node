FROM node:14.15.4

# Create a directory (to house our source files) and navigate to it.
WORKDIR /src

RUN apt-get update


# Copy over the package.json and lock file to the containers working directory.
COPY . /src

RUN npm install --production

# Copy everything in the host folder into the working folder of the container.

