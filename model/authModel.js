const schema = require('./schema/authSchema')
class CAuthModel{
  registration(user,cb){
    schema.create(user,(err,data)=>{
        if(err) throw err
        cb(data)
    })
  }
  getUser(user,cb){
    schema.findOne({
      username : user.username,
      password : user.password
    }).exec((err,data)=>{
      if(err) throw err
      cb(data);
    })
  }
}
module.exports=CAuthModel