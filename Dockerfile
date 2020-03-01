FROM node
COPY . /api
WORKDIR /api
RUN yarn config set registry 'https://registry.npm.taobao.org'
RUN yarn
EXPOSE 8000
CMD npm start
