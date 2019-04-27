#!/bin/bash
ARTIST=""  TITLE="" GENRE="" YEAR=""
TOKEN=""

curl "http://localhost:4741/records" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "record": {
      "title": "'"${TITLE}"'",
      "genre": "'"${GENRE}"'",
      "year": "'"${YEAR}"'",
      "artist": "'"${ARTIST}"'"
    }
  }'

echo
