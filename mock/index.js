// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const apiMocker = require('mocker-api');

const app = express();

apiMocker(app, require.resolve('./api.js'));
app.listen(4000);
console.log('=> http://localhost:4000');
