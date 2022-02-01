FROM node:10

WORKDIR /usr/app

COPY package.json ./



COPY . .

ENV APP_PORT 8080

EXPOSE 8080

CMD [ "node", "app.js" ]