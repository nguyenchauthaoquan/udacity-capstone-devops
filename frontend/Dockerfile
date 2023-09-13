FROM node:18.17.0 AS prod
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
RUN npm run build

FROM nginx:alpine
#COPY www /usr/share/nginx/html
COPY --from=prod /usr/src/app/dist /usr/share/nginx/html