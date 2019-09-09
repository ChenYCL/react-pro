// eslint-disable-next-line import/no-extraneous-dependencies
const proxy = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function(app) {
  app.use(
    proxy('/api/v1', {
      target: 'https://cnodejs.org',
      changeOrigin: true,
    })
  );
};
