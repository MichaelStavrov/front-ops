FROM node:18

COPY . .

RUN npm ci

CMD ["node", "date-service.js"]