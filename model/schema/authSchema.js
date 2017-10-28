"use strict"
const mongoose = require('./connection'),
      Schema = mongoose.Schema,
      user = new Schema({
        id: Schema.Types.ObjectId,
        username: String,
        email: String,
        name: String,
        lastName: String,
        password: String,
      },{
        collection: "users"
      }),
      model = mongoose.model('users',user)

      module.exports=model;
      


