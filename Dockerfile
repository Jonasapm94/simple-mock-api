FROM node:current-alpine3.22

WORKDIR /app

COPY ./package*.json /app
RUN npm i

COPY ./index.js /app
CMD [ "npm", "start" ]