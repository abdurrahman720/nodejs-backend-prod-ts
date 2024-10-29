Docker Build: sudo docker build -t backend-app:dev -f docker/development/Dockerfile .

Docker Run: docker run --rm -it -v ${PWD}:/usr/src/backend-app -v /usr/src/backend-app/node_modules -p 3000:3000 backend-app:dev
