FROM denoland/deno:2.0.4

ARG CAPROVER_GIT_COMMIT_SHA=${CAPROVER_GIT_COMMIT_SHA}
ENV DENO_DEPLOYMENT_ID=${CAPROVER_GIT_COMMIT_SHA}

WORKDIR /app

COPY . .
RUN deno cache main.ts
RUN deno run -A dev.ts build

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
