const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, productView, service3, related, reviews,
} = require('../config/services.js');

const router = Router();

router.use(service1.api, createProxyMiddleware({ target: service1.url, changeOrigin: true }));
router.use(productView.api, createProxyMiddleware({ target: productView.url, changeOrigin: true }));
router.use(service3.api, createProxyMiddleware({ target: service3.url, changeOrigin: true }));
router.use(related.api, createProxyMiddleware({ target: related.url, changeOrigin: true }));
router.use(reviews.api, createProxyMiddleware({ target: reviews.url, changeOrigin: true }));

module.exports = router;
