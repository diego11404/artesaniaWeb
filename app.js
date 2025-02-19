"use strict"
const express = require('express'),
      body_parser = require('body-parser'),
      path = require('path'),
      serveStatic = require('serve-static'),
      morgan = require('morgan'),
      session = require('express-session'),
      error = require('./middleware/error'),
      favico = require('serve-favicon')(`${__dirname}/public/img/icono.png`),
      methodOverride = require('express-method-override')('_method'),
      auth = require('./router/authRouter'),
      router = require('./router/indexRouter'),
      port = process.env.PORT || 9090;
let app = express();
app.use(session({ secret:'true-secret', saveUninitialized: true, resave: true }))
   .set('views',path.join(__dirname,'views'))
   .set('view engine','ejs')
   .set('port',port)
   .use(body_parser.json())
   .use(serveStatic(path.join(__dirname, 'public')))
   .use(express.static(path.join(__dirname,'public')))
   .use(body_parser.urlencoded({ extended: false }))
   .use(methodOverride)
   .use(auth)
   .use(favico)
   .use(morgan('dev'))
   .use(router)
   .use(error.error404)


module.exports = app;