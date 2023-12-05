FROM node:18 as build

WORKDIR /comp523-swayambhu/

COPY public/ /comp523-swayambhu/public 
COPY src/ /comp523-swayambhu/src
COPY package.json /comp523-swayambhu/

RUN npm install

CMD ["npm", "start"]