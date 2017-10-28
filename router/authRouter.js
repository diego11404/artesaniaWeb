"use strict"
const express = require('express'),
      router= express.Router(),
      authController = require('../controller/authController'),
      ac = new authController();
router
  .get('/auth/join',ac.getJoin)
  .get('/auth/login',ac.getLogin)
  .post('/auth/join',ac.postJoin)
  .post('/auth/login',ac.postLogin)
  .get('/auth/logout',ac.getLogout)
  module.exports=router