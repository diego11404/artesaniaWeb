const schema = require('./schema/authSchema')
class CIndexModel{
  dataUser(id,cb){
    schema.findById({
      _id : id._id
    }).exec((err,data)=>{
      if(err) throw err
      cb(data);
    })
  }
}
module.exports=CIndexModel