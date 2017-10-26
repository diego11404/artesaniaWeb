"use strict"
class CindexController{
  getIndex(req,res,next){
    res.render('index')
  }
}

module.exports=CindexController;