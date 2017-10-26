const express = require('express'),
      router = express.Router();
const indexController = require("../controller/index-controller");
      ic = new indexController();
router.get('/',(req,res,nex)=>{
  res.redirect('/index')
});
router.get('/index',ic.getIndex);

router.get('/product-detail',(req,res,next)=>{
  res.render('product_detail')
})
router.get('/products',(req,res,next)=>{
  res.render('products')
})
router.get('/join',(req,res,next)=>{
  res.render('register')
})
router.get('/contact',(req,res,next)=>{
  res.render('contact')
})
router.get('/checkout',(req,res,next)=>{
  res.render('checkout')
}) 
router.get('/shopcart',(req,res,next)=>{
  res.render('shopcart')
})

module.exports=router;