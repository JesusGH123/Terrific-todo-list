FROM node:22.11.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc
EXPOSE 3000
CMD ["node", "dist/app.js"]