FROM node:18.17.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD [ "npm", "run", "start:prod" ]