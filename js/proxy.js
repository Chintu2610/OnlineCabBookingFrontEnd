const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/customer',
  createProxyMiddleware({
    target: 'http://localhost:1995',
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
