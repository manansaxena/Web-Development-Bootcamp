const User = require('../models/user');


module.exports.registerForm = (req,res)=>{
    res.render('users/register')
};

module.exports.registeruser = async (req,res,next)=>{
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
};

module.exports.loginForm = (req,res)=>{
    res.render('users/login')
};

module.exports.loginUser = async(req,res)=>{
    req.flash('success','Welcome Back to YelpCamp');
    const goToUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(goToUrl)
};

module.exports.logoutUser = (req,res)=>{
    req.logout();
    req.flash('success','Logged Out')
    res.redirect('/campgrounds');
};