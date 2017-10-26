"use strict";
const app = require('./app')
      app.listen(app.get('port'),()=>{
        console.log(`Running in port: ${app.get('port')} :)`)
      });