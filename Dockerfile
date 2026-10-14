FROM node:20-alpine AS BUILD
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/ngnix/html
EXPOSE 80
CMD ["ngnix","-g","daemon off;"]