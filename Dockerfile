FROM node:14 as app-savepoint

WORKDIR /app

COPY package*.json /app/

RUN yarn install

COPY ./ /app/

RUN yarn build

FROM nginx:1.15

COPY --from=app-savepoint /app/build/ /usr/share/nginx/html

COPY --from=app-savepoint /app/Docker/bin/nginx.conf /etc/nginx/conf.d/default.conf
