const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, productView, service3, related, reviews,
} = require('../config/services.js');

const router = Router();

router.use('/service1.js', createProxyMiddleware({
  target: service1.url,
  pathRewrite: {
    '^/bundles/service1.js': service1.bundle,
  },
  changeOrigin: true,
}));

router.use('/productView.js', createProxyMiddleware({
  target: productView.url,
  pathRewrite: {
    '^/bundles/productView.js': productView.bundle,
  },
  changeOrigin: true,
}));

router.use('/service3.js', createProxyMiddleware({
  target: service3.url,
  pathRewrite: {
    '^/bundles/service3.js': service3.bundle,
  },
  changeOrigin: true,
}));

router.use('/related.js', createProxyMiddleware({
  target: related.url,
  pathRewrite: {
    '^/bundles/related.js': related.bundle,
  },
  changeOrigin: true,
}));

router.use('/reviews.js', createProxyMiddleware({
  target: reviews.url,
  pathRewrite: {
    '^/bundles/reviews.js': reviews.bundle,
  },
  changeOrigin: true,
}));

module.exports = router;
