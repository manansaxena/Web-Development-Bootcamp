const express = require('express');
const routers = express.Router();
const User = require('../models/user');
const passport = require('passport')
const ExpressError = require('../utils/ExpressError');
const WrapAsync = require('../utils/WrapAsync');
const users = require('../controllers/users')

routers.get('/register',users.registerForm)

routers.post('/register',WrapAsync(users.registeruser))

routers.get('/login',users.loginForm)

routers.post('/login',passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),WrapAsync(users.loginUser))

routers.get('/logout',users.logoutUser)


module.exports = routers;