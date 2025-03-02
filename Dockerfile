FROM node:latest AS frontend

WORKDIR /frontend

COPY frontend/package*.json ./

RUN npm install

COPY frontend .

RUN npm run build


FROM caddy:latest

COPY Caddyfile /etc/caddy/Caddyfile

COPY --from=frontend /frontend/dist /srv