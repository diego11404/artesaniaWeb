"use strict"
const indexModel = require('../model/indexModel'),
      im= new indexModel();

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
  //get account
  getAccount(req,res,next){
    if(req.session.username){
      let id = {
        _id : req.session.name._id,
      }
      im.getDataUser(id,(data)=>{
        res.render('account',{title: "Cuenta", user: req.session.name, dataUser: data})
      })
    }
    else res.redirect('/auth/login')
    }
    /// put Account
  putAccount(req,res,next){
    console.log(req.params.id)
    if (req.session.username) {
      let opts = {
        _id: (req.body._id || null),
        email: req.body.email,
        name: req.body.name,
        lastName: req.body.lastName,
      }
      im.updateDataUser(opts, (user) => {
        req.session.name = user;
        res.render('account',{title: "Cuenta", user: req.session.name, dataUser: user})
      })
    } else {
      res.redirect('/')
    }
  }
  getShopcart(req,res,next){
    if(req.session.username){ 
      res.render('shopcart',{title: "Carrito", user: req.session.name})    
    }else{
      res.redirect('/auth/login')
    }      
  }
  getInteractivo(req,res,next){
    res.render('interactivo',{title: "Interactivo", user: req.session.name})    
        
  }
}
module.exports=CindexController;