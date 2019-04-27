ID="" TITLE="" GENRE="" YEAR="" ARTIST=""
TOKEN=""

curl http://localhost:4741/records/${ID} \
  --request PATCH \
  --include \
  --header 'Content-Type: application/json' \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "record": {
      "title": "'"${TITLE}"'",
      "genre": "'"${GENRE}"'",
      "year": "'"${YEAR}"'",
      "artist": "'"${ARTIST}"'"
    }
  }'
