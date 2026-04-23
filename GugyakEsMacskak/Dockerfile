FROM node:24 AS build

WORKDIR /home/node/app
COPY . .
RUN npm i
RUN npm run build

FROM nginx AS final
COPY --from=build /home/node/app/dist/GugyakEsMacskak/browser /usr/share/nginx/html
