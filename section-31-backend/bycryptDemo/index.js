//----------------------------demo------------------------------

// const bcrypt = require('bcrypt');


// const hashPassword = async function(pw){
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw,salt)
//     console.log(salt)
//     console.log(hash)
//     return String(hash.data);
// }

// const verifyPassword = async function(pw,hashPw){
//     const res = await bcrypt.compare(pw,hashPw);
//     if(res){
//         console.log('You are in !!')
//     }else{
//         console.log('Oops!! Enter again')
//     }
// }

// // hashPassword('killmagic89');
// verifyPassword('killmagic89','$2b$12$5QhXEV3XpNY9wr3nYNYgn.4LHk58QJGZ/ICL4Mfn5.VePIk.0fqo6');


//-------------------with express---------------------------------
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path')
const User = require('./models/user');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('mongo connected')
    })
    .catch((err)=>{
        console.log('oops error',err)
    })



const app = express();
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'));
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}))

const loggedIn = (req,res,next)=>{
    if(!req.session.userId){
        return res.redirect('/login')
    }
    next();
}


app.get('/',(req,res)=>{
    res.send('This is the home page')
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    // const hashPwd = await bcrypt.hash(password,12);
    // const user = new User({username,password:hashPwd});
    const user = new User({username,password})
    await user.save();
    req.session.userId = user._id;
    res.redirect('/')
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const foundUser = await User.findAndValidate(username,password)
    if(foundUser){
        req.session.userId = foundUser._id;
        res.redirect('/secret')
    }else{
        res.redirect('/login')
    }
})

app.post('/logout',(req,res)=>{
    req.session.userId = null;
    // We can also destroy the entire session
    // req.session.destroy();
    res.redirect('/login')
})

app.get('/secret',loggedIn,(req,res)=>{
    res.render('secret')
})


app.listen(3000,()=>{
    console.log('serving on 3000 !!!')
})