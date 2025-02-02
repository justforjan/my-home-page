FROM node:latest AS frontend

WORKDIR /frontend

COPY ./my-home-page/package*.json ./

RUN npm install

COPY ./my-home-page .

RUN npm run build


FROM caddy:latest

COPY Caddyfile /etc/caddy/Caddyfile

COPY --from=frontend /frontend/dist /srv