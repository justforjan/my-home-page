#!/bin/sh

if [ -z "${API_BASE_URL:-}" ]; then
    API_BASE_URL_JSON="undefined"
else
    API_BASE_URL_JSON="\"$API_BASE_URL\""
fi

cat <<EOF
window.API_BASE_URL=$API_BASE_URL_JSON;
EOF