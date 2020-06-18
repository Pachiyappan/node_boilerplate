
FROM node:lts-jessie


#Install memcached &
RUN apt-get update

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Install app dependencies
RUN npm install yarn -g

RUN npm install

# Building Application
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "yarn" , "production" ]