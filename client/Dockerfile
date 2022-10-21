#FROM node:16.13.0-alpine AS builder
#COPY . /app
#WORKDIR /app
#RUN npm install
#RUN npm run build

#FROM nginx:1.17.10-alpine
#EXPOSE 80
#COPY --from=builder /app/dist/client /usr/share/nginx/html
FROM node:16.13.0-alpine
COPY . /app
WORKDIR /app
RUN npm ci
COPY . .
#CMD ["npm","start"]
EXPOSE 80
CMD ["npm","run","start"]
