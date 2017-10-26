"use strict"
const express = require('express'),
      body_parser = require('body-parser'),
      path = require('path'),
      morgan = require('morgan'),
      session = require('express-session'),
      favico = require('serve-favicon')(`${__dirname}/public/img/icono.png`),
      router = require('./router/index-router'),
      port = process.env.PORT || 8686;
      
let app = express();
app.set('views',path.join(__dirname,'views'))
   .set('view engine','ejs')
   .set('port',port)
   
   .use(body_parser.json())
   .use(express.static(path.join(__dirname,'public')))
   .use(body_parser.urlencoded({ extended: false }))
   .use(favico)
   .use(morgan('dev'))
   .use(router)

module.exports = app;