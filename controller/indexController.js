"use strict"
class CindexController{
  getIndex(req,res,next){
    res.render('index', {title: "Artesania Perú",message : req.query.message})
  }
  getProductDetail(req,res,next){
    res.render('product_detail',{title: "Detalle Producto"})
  }
  getProduct(req,res,next){
    res.render('products',{title: "Productos"})
  }
  getContact(req,res,next){
    res.render('contact',{title: "Contacto"})
  }
  getCheckout(req,res,next){
    res.render('checkout',{title: "Checkout"})
  }
  getShopcart(req,res,next){
    res.render('shopcart',{title: "Carrito"})    
  }
}
module.exports=CindexController;