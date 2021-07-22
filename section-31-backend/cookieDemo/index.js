const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('omgsecret'));



app.get('/greet',(req,res)=>{
    // console.log(req.cookies)
    const {name = 'John Doe',animal = 'Dog'} = req.cookies
    res.send(`Hey There ${name}`)
})

app.get('/setname',(req,res)=>{
    res.cookie('name','Hamilton')
    res.cookie('animal','giraffe')
    res.send('sent you a cookie')
})

app.get('/getsignedcookie',(req,res)=>{
    res.cookie('fruit','orange',{signed:true})
    res.send('sent you a signed cookie')
})

app.get('/verifyfruit',(req,res)=>{
    res.send(req.signedCookies)
})

app.listen(3000,()=>{
    console.log('serving on port 3000 !!!')
})