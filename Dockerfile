FROM node:10-alpine

RUN groupadd -r nodejs && useradd -m -r -g -s /bin/bash nodejs nodejs
USER nodejs

RUN mkdir -p /home/node/app/node_modules 

WORKDIR /home/node/app
COPY package*.json ./
COPY . .
EXPOSE 8080
CMD [ "node", "app.js" ]