#FROM node:16.13.0-alpine AS builder
#COPY . /app
#WORKDIR /app
#RUN npm install
#RUN npm run build

#FROM nginx:1.17.10-alpine
#EXPOSE 80
#COPY --from=builder /app/dist/client /usr/share/nginx/html
FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
COPY . .
#CMD ["npm","start"]
CMD ["npm","run","start"]
