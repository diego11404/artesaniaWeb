"use strict"
class CindexController{
  getIndex(req,res,next){
      res.render('index', {title: "Artesania Perú",message : req.query.message, user: req.session.name})
  }
  getProductDetail(req,res,next){
    if(req.session.username){
    res.render('product_detail',{title: "Detalle Producto", user: req.session.name})
    }else{
      res.redirect('/auth/login')
    }
  }
  getProduct(req,res,next){
    res.render('products',{title: "Productos" , user: req.session.name})
  }
  getContact(req,res,next){
    res.render('contact',{title: "Contacto" , user: req.session.name})
  }
  getAccount(req,res,next){
    if(req.session.username)      
      res.render('account',{title: "Cuenta", user: req.session.name})
    else res.redirect('/auth/login')
    }
  getShopcart(req,res,next){
    if(req.session.username){ 
      res.render('shopcart',{title: "Carrito", user: req.session.name})    
    }else{
      res.redirect('/auth/login')
    }      
  }
}
module.exports=CindexController;