const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/v2',
    createProxyMiddleware({
      target: 'https://api.newscatcherapi.com',
      changeOrigin: true,
    }),
  );
};
