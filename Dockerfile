FROM node:14 as app-savepoint

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ /app/

RUN npm run build:all

FROM nginx:1.19.1-alpine

RUN apk add --no-cache bash

COPY --from=app-savepoint /app/build/ /usr/share/nginx/html

COPY --from=app-savepoint /app/Docker/bin/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=app-savepoint /app/Docker/env.sh /usr/share/nginx/html

CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
