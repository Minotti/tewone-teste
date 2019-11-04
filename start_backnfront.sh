#!/bin/bash
cd backend && docker-compose up -d
cd ../frontend && yarn serve

