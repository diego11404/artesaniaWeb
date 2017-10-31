const schema = require('./schema/authSchema')
class CIndexModel{
  getDataUser(id,cb){
    schema.findById({
      _id : id._id
    }).exec((err,data)=>{
      if(err) throw err
      cb(data);
    })
  }
  updateDataUser(user,cb){
    schema.findOneAndUpdate(
          {
          _id: user._id},
          {
              email: user.email,
              name: user.name,
              lastName : user.lastName
          },
          {new : true},
          (err, doc)=>{
              if(err) throw err
              cb(doc)
          })
  }
}
module.exports=CIndexModel