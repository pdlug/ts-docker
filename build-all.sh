#!/usr/bin/env bash

docker build -t test-express-api-base -f Dockerfile .
docker build -t test-express-api-alpine -f Dockerfile.alpine .
docker build -t test-express-api-alpine-production -f Dockerfile.alpine-production .
docker build -t test-express-api-distroless -f Dockerfile.distroless .
