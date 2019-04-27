#!/bin/bash
TOKEN=""
curl "http://localhost:4741/records" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
