FROM node:16-alpine
WORKDIR /app
#ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
#RUN npm install react-scripts@3.4.1 -g --silent
COPY . .
RUN npm run build-prod
#CMD["npm", "run", "build-prod"]

