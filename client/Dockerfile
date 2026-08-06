# Build Angular
FROM node:24-alpine AS build

WORKDIR /dist/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --configuration production

# Serve with Nginx
FROM nginx:alpine

COPY --from=build /dist/src/app/dist/client /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
