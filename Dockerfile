# Usando a imagem em Node
FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["node","server.js"]

