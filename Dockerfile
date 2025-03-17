FROM node:latest AS frontend

WORKDIR /frontend

COPY frontend/package.json ./

RUN npm install

COPY frontend .

RUN npm run build


FROM caddy:latest

ARG DEPLOYMENT_TYPE

RUN rm -f /etc/caddy/Caddyfile
COPY ./Caddyfile.$DEPLOYMENT_TYPE /etc/caddy/Caddyfile
COPY --from=frontend /frontend/dist /srv

COPY ./frontend/generate_env_js.sh ./generate_env_js.sh
COPY ./frontend/docker_entrypoint.sh ./docker_entrypoint.sh
RUN chmod +x ./generate_env_js.sh ./docker_entrypoint.sh
ENTRYPOINT ["./docker_entrypoint.sh"]