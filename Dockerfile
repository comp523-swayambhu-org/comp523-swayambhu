FROM node:18 as build

WORKDIR /comp523-swayambhu/

COPY . . 

RUN npm install

CMD ["npm", "start"]