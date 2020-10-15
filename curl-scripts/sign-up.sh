#!/bin/bash

API='https://tic-tac-toe-api-development.herokuapp.com'
URL_PATH="/sign-up"

curl  "${API}${URL_PATH}"\
  --include \
  --request GET \

echo