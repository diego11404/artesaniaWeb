"use strict"
const confi = require('./config'),
      mongoose = require("mongoose"),
      opts = {
        host : confi.mongo.host,
        database: confi.mongo.database
      }
      mongoose.connect(`mongodb:\/\/${opts.host}/${opts.database}`)
      
module.exports=mongoose;