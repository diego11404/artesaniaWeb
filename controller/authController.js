const authModel = require('../model/authModel'),
      authM = new authModel(),
      error = require('../middleware/error');
      
class CAuthController{
  getJoin(req,res,next){
    if(req.session.username)
      res.redirect('/')
    else
    res.render('userRegistration',{title : "Sign in", user: ""})
  }
  getLogin(req,res,next){
    if(req.session.username)
      res.redirect('/')
    else
    res.render('login',{title: "Login" , user: ""})
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
        req.session.username = (data!=null) ?  (req.session.name = data.name,data.username ) : null;
        
        console.log(req.session)
        return (req.session.username) ? res.render('index',{title: "Artesania Perú",message : req.query.message, user : req.session.name }) : error.error401(req,res,next)
    })
  }
  getLogout(req,res,next){
    req.session.destroy((err)=>{
      return (err) ? error.error500(req,res,next) : res.redirect('/auth/login')
    })
  }
}
module.exports= CAuthController