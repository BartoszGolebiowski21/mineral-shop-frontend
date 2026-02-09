# 1. Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Kopiujemy tylko package.json i lock
COPY package*.json ./

RUN npm ci

# Kopiujemy resztę aplikacji
COPY . .
COPY .env .env

# Budujemy aplikację Next.js
RUN npm run build

# 2. Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Kopiujemy tylko build i node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
