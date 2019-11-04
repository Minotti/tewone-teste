#!/bin/bash
cd backend
cp .env.example .env

composer install

php artisan key:generate

docker-compose up -d

sleep 10

docker exec -it backend_app_1 ./artisan migrate --seed
docker exec -it backend_app_1 ./artisan passport:install

cd ../frontend && npm install && yarn serve
