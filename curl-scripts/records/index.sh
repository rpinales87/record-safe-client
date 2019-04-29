#!/bin/bash
TOKEN="BAhJIiUyYTQyOTAzZGZjMDgyN2Y5MGJjYjgwMzUyMzljMTdkNwY6BkVG--5c72ca8cc9b8b120e800ac177473e1eb6650f543"
curl "http://localhost:4741/records" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
