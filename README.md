# Typescript production deployment with Docker

**TL;DR** Use `Dockerfile.distroless` or `Dockerfile.alpine-production`

Demonstrates various approaches to building production grade docker images to deploy services written in Typescript.

Details in post: https://pauldlug.com/g/typescript-docker-production-deploys

## Comparison of approaches

| Filename                       | Approach                                                                                                    | Size  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- | ----- |
| `Dockerfile`                   | Simple approach using Node docker image with source and build artifacts left in container                   | 993MB |
| `Dockerfile.alpine`            | Use Alpine linux variant of Node Docker image                                                               | 198MB |
| `Dockerfile.alpine-production` | Use Alpine linux with build step separated from production (production image only contains build artifacts) | 120MB |
| `Dockerfile.distroless`        | Use distroless image for production stage (potential security improvements)                                 | 123MB |

If you'd like to build all the images to compare yourself just run `./build-all.sh`.
