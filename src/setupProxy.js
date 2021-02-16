const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/rest_v1',
        createProxyMiddleware({
            target: 'https://en.wikipedia.org/',
            changeOrigin: true,
        })
    );
};
