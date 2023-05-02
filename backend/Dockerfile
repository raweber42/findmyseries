FROM 	node:current-bullseye-slim

WORKDIR /usr/src/app
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "run", "start"]
# CHANGE TO DEV!
