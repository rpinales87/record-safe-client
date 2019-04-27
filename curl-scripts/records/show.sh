TOKEN=""
ID=""

curl "http://localhost:4741/records"/${ID} \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
