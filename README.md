# Typescript production deployment with Docker

**TL;DR** Use `Dockerfile.distroless` or `Dockerfile.alpine-production`

Demonstrates various approaches to building production grade docker images to deploy services written in Typescript.

Details in post: https://pauldlug.com/posts/typescript-docker-production-deploys

## Comparison of approaches

| Filename                       | Approach                                                                                                    | Size   |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------ |
| `Dockerfile`                   | Simple approach using Node docker image with source and build artifacts left in container                   | 1.21GB |
| `Dockerfile.alpine`            | Use Alpine linux variant of Node Docker image                                                               | 246MB  |
| `Dockerfile.alpine-production` | Use Alpine linux with build step separated from production (production image only contains build artifacts) | 164MB  |
| `Dockerfile.distroless`        | Use distroless image for production stage (potential security improvements)                                 | 158MB  |

If you'd like to build all the images to compare yourself just run `./build-all.sh`.
