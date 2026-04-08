#use node base image
FROM node:22-alpine

# set working directory
WORKDIR /app

# copy package.json 
COPY package*.json ./

# install dependencies
RUN npm install
Run npm install -g nodemon
# copy the rest of the application code
COPY . .

#expose the port that node.js on for the container to run
EXPOSE 3000

# run the application
CMD ["nodemon", "app.js"]