FROM node:14.15.4

# Create a directory (to house our source files) and navigate to it.
WORKDIR /src

RUN apt-get update && apt-get install netcat-openbsd -y


COPY . /src


RUN npm install --production

# Expose the specified port back to the host machine.
EXPOSE 8080
