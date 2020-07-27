const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/pic/100.json',
        createProxyMiddleware({
            target: 'https://www.tabtu.top',
            changeOrigin: true,
        })
    );
};