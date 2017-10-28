const authModel = require('../model/authModel'),
      authM = new authModel();
class CAuthController{
  getJoin(req,res,next){
    res.render('userRegistration',{title : "Sign in", message :req.query.message})
  }
  getLogin(req,res,next){
    res.render('login',{title: "Login"})
  }
  postJoin(req,res,next){
    let user ={
      username: req.body.username,
      email: req.body.email,
      name :req.body.name,
      lastName: req.body.lastName,
      password:req.body.password
    }
    console.log(user);
    authM.registration(user,(data)=>{
      res.redirect(`/?message=El usuario ${user.name} ${user.lastName} ha sido creado`)
      console.log(data, '<==Creado');
    })
  }
  postLogin(req,res,next){
    let user = {
      username : req.body.username,
      password : req.body.password
    }
    authM.getUser(user,data=>{
        if(data!=null){
          res.redirect('/');
        }else{
          console.log("NO LOGIN");
          res.redirect('/login');
        }
    })
  }
  getLogout(req,res,next){
    //
  }
}
module.exports= CAuthController