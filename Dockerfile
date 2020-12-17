FROM node:12-alpine AS base
WORKDIR /app
COPY package.json yarn.lock ./

FROM base AS build
RUN yarn
ADD . .
RUN yarn build

FROM node:12-alpine
WORKDIR /app
COPY --from=build /app .
ENV NODE_ENV production
ENV PORT=80
EXPOSE 80
CMD ["yarn", "start", "-p", "80"]
