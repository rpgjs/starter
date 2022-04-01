FROM node:14 as build
WORKDIR /build
ADD . /build
RUN npm i
ENV NODE_ENV=production
RUN npm run build

FROM node:14-alpine
WORKDIR /game
COPY --from=build /build/dist ./
COPY --from=build /build/package*.json ./
ENV NODE_ENV=production
RUN npm i
EXPOSE 3000
CMD node server