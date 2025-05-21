FROM node:18
WORKDIR /app

COPY ./package.json ./package-lock.json* ./tsconfig.json ./
RUN npm install

COPY ./src ./src
RUN npm install -g ts-node
RUN npm run build

EXPOSE 4000
CMD ["npm", "start"]
