const express = require('express'),
      router = express.Router(),
      indexController = new require("../controller/indexController");
      ic = new indexController();
router
  .get('/',ic.getIndex)
  .get('/product-detail',ic.getProductDetail)
  .get('/products',ic.getProduct)
  .get('/contact',ic.getContact)
  .get('/account',ic.getAccount) 
  .get('/shopcart',ic.getShopcart)

module.exports= router;