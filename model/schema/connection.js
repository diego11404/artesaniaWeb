"use strict"
const confi = require('./config'),
      mongoose = require("mongoose"),
      opts = {
        host : confi.mongo.host,
        database: confi.mongo.database
      }
      //mongoose.connect("mongodb:\/\/diegolq:diegolq@ds141175.mlab.com:41175/shoptest")
      mongoose.connect(`mongodb:\/\/${opts.host}/${opts.database}`)
      
module.exports=mongoose;