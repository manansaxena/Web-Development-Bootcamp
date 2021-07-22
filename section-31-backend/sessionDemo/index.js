const express = require('express');
const session = require('express-session');


const app = express();

app.use(session({
    secret:'thisismine',
    resave: false,
    saveUninitialized: false
}))

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count +=1;
    }
    else{
        req.session.count = 1;
    }
    res.send(`You have views ${req.session.count}`)
})

app.get('/register',(req,res)=>{
    const {username = 'Anonymous'} = req.query;
    req.session.username = username
    res.redirect('/greet')
})

app.get('/greet',(req,res)=>{
    res.send(`Hello ${req.session.username}`)
})


app.listen(3000,()=>{
    console.log('serving on 3000')
})