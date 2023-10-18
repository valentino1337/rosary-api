FROM oven/bun:debian
WORKDIR /rosary-api
COPY . .
RUN bun install
CMD ["bun", "."]
EXPOSE 8084
