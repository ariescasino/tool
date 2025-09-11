FROM --platform=linux/amd64 node:lts-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm next telemetry disable
COPY . .
RUN pnpm build
ENV TZ=Asia/Ho_Chi_Minh
RUN apk add --no-cache tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone
CMD ["pnpm", "start"]
