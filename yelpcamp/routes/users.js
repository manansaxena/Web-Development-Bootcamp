const express = require('express');
const routers = express.Router();
const User = require('../models/user');
const passport = require('passport')
const ExpressError = require('../utils/ExpressError');
const WrapAsync = require('../utils/WrapAsync');


routers.get('/register',(req,res)=>{
    res.render('users/register')
})

routers.post('/register',WrapAsync(async (req,res,next)=>{
    try{
        const {email,username,password} = req.body;
        const user = new User({email,username});
        const registerUser = await User.register(user,password);
        req.login(registerUser,(err)=>{
            if(err) return next(err);
            req.flash('success','Welcome to yelpcamp !!');
            res.redirect('/campgrounds')
        })
    } catch(err){
        req.flash('error',err.message);
        res.redirect('/register')
    }
}))

routers.get('/login',(req,res)=>{
    res.render('users/login')
})

routers.post('/login',passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),WrapAsync(async(req,res)=>{
    req.flash('success','Welcome Back to YelpCamp');
    const goToUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(goToUrl)
}))

routers.get('/logout',(req,res)=>{
    req.logout();
    req.flash('success','Logged Out')
    res.redirect('/campgrounds');
})


module.exports = routers;