FROM node

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

EXPOSE 3000

CMD ["yarn", "server"]
