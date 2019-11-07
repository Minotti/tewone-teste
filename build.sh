#!/bin/bash
cd backend
cp .env.example .env

composer install

php artisan key:generate

cd .. && docker-compose up -d

sleep 20

docker exec -it api ./artisan migrate --seed
docker exec -it api ./artisan passport:install
