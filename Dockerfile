FROM jandve/examen-final
WORKDIR /backend
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm update
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
