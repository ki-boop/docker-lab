FROM node:18-alpine

WORKDIR /usr/src/app/back

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]