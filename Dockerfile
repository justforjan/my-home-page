FROM node:latest AS frontend

WORKDIR /frontend

COPY frontend/package.json ./

RUN npm install

COPY frontend .

ARG DEPLOYMENT_TYPE

# only sets mode if mode does not equal 'local'.
# When mode equals 'local', only the .env file is loaded, if mode does not euqal 'local', the .env.<mode> file is loaded **additionally** to .env
RUN npm run build $(if [ "$DEPLOYMENT_TYPE" != "local" ]; then echo "-- --mode $DEPLOYMENT_TYPE"; fi)


FROM caddy:latest

ARG DEPLOYMENT_TYPE

RUN rm -f /etc/caddy/Caddyfile
COPY ./Caddyfile.$DEPLOYMENT_TYPE /etc/caddy/Caddyfile
COPY --from=frontend /frontend/dist /srv