#!/bin/sh -eu
./generate_env_js.sh > ./env.js
caddy run --config /etc/caddy/Caddyfile