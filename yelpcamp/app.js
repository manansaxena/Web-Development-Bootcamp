if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}
// imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const campgroundRoutes = require('./routes/campgrounds')
const reviewRoutes = require('./routes/reviews')
const userRoutes = require('./routes/users');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const localStrategy = require('passport-local')
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/yelp-camp',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false});

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("Database Connected");
})


// express app stuff and configs
const app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('ejs',ejsMate)


app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))
app.use(session({
    secret:'secretsecret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires: Date.now()+1,
        maxAge:1000*60*60*24
    }
}))
app.use(flash())


app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.successMsg = req.flash('success');
    res.locals.errorMsg = req.flash('error')
    next();
})



// app.get('/fakeUser',async(req,res)=>{
//     const user = new User({email:'hello@gmail.com',username:'hello'});
//     const newUser = await User.register(user,'hello');
//     res.send(newUser)
// })

app.use('/campgrounds',campgroundRoutes);
app.use('/campgrounds/:id/reviews',reviewRoutes);
app.use('/',userRoutes)

app.get('/',(req,res)=>{
    res.render('home')
})


app.all('*',(req,res,next)=>{
    next(new ExpressError('Page Not Found',404))
})

app.use((err,req,res,next)=>{
    const {statusCode=500} = err;
    if(!err.message) err.message = 'Oh, Something Went Wrong';
    res.status(statusCode).render('error',{err});
})

app.listen(3000,()=>{
    console.log('connected to port 3000');
})

