# this is a configuration file which contains step by step instructions to build a docker image for a nodejs application
# syntax=docker/dockerfile:1


# So let me to two things here first is to creaste a node.js environment first in this Docker container 
# and in the second one is should take a node.js image to begin with in which i dont have to intsall node.js and npm manually because it is already installed in the image that i am going to use


# so the first step is to use a node.js image from docker hub and the second step is to set the working directory in the container to /app

# FROM node:20
# # Set the working director here .. 
# WORKDIR /app
# #  Copy all the packages here into this directory 
# COPY package*.json ./ 

# #  Then install them here using npm install command 

# RUN npm install 

# #  Now copy the entire code files into this working directory 

# COPY index.js . 

# #  This command is for starting the node.js application 

# CMD ["npm", "start"]

#  now lets do on things take the ubuntu as the base image 
# Then first install the node.js in it and then copy other things 


# FROM ubuntu:latest

# WORKDIR /app 

# RUN apt-get update && apt-get install -y curl 

# RUN curl -sL https://deb.nodesource.com/setup_26.x -o /tmp/nodesource_setup.sh

# RUN chmod +x /tmp/nodesource_setup.sh 

# RUN apt-get update && apt-get install -y nodejs npm 

# RUN node --version 
# RUN npm --version 

# COPY package*.json ./ 

# RUN npm install 

# COPY index.js ./ 


# EXPOSE 8000

# CMD ["npm", "start"]


# This is for the practice please : 

FROM node:26-alpine3.23

WORKDIR /home/app

COPY package*.json ./

RUN npm install 


COPY index.js ./ 


EXPOSE 8000 

CMD ["npm", "start"]