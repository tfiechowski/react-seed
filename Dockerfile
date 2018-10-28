FROM node:8.12.0

ADD ./package.json ./package.json
ADD ./yarn.lock ./yarn.lock

RUN yarn

ADD ./.babelrc ./.babelrc
ADD ./.babelrc.js ./.babelrc.js
ADD ./.eslintrc.js ./.eslintrc.js
ADD ./jest.config.js ./jest.config.js
ADD ./jestSetup.js ./jestSetup.js
ADD ./jsconfig.json ./jsconfig.json
ADD ./webpack.config.js ./webpack.config.js

ADD ./src ./src

CMD ["yarn", "start"]
