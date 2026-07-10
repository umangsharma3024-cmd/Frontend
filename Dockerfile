FROM node:21-alpine

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

CMD ["npm","start","--","--host","0.0.0.0"]

