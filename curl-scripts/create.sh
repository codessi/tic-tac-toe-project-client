#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo

# {"game":{"cells":["","","","","","","","",""],"over":false,"_id":"5f89fc05772a0a00170d786a","owner":"5f897fd3772a0a00170d7715","createdAt":"2020-10-16T20:01:09.682Z","updatedAt":"2020-10-16T20:01:09.682Z","__v":0}}