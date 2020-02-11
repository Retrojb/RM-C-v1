## Build ##
FROM node:10.18.1-alpine AS build
WORKDIR /usr/src/app
RUN echo 'Directory was set'

COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.8-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# COPY [flags] source ... dest
# The name of the destination file or folder.

# Copy new files and directories to the image's filesystem.

# @TODO
# update BUILD command
