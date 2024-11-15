FROM node:16.19.0

# Create app directory
RUN mkdir -p /usr/src/paysmosmo-backend
WORKDIR /usr/src/paysmosmo-backend

# Install app dependencies
COPY package.json /usr/src/paysmosmo-backend/
RUN npm install  db-migrate-pg
RUN npm install

# Bundle app source
COPY . /usr/src/paysmosmo-backend

EXPOSE 8080
CMD [ "npm", "start" ]
