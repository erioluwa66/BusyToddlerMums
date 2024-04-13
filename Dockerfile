#Build stage
FROM node:16-alpine as build

#create app directory - Container CWD
WORKDIR /app

#Install dependencies
#A wildcard is used to ensure both package.json and package-lock.json are copied where available
COPY package*.json . 

RUN npm install

#Bundle app source
COPY . .


RUN npm run build


#Production stafe
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

