FROM node:22 AS base

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

COPY . .

FROM base AS production

RUN npm run build

EXPOSE 8080

CMD ["node", "./build/server.js"]
