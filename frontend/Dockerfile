FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

#PORT:
EXPOSE 3000

# COMMANDS
CMD ["serve", "-s", "dist", "-l", "3000"]
# CMD ["npm", "start"]