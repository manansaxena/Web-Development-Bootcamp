//----------------first flavour---------------------

// const express = require('express');
// const morgan = require('morgan');

// const app = express();
// // using a middleware named morgan for logging purposes
// app.use(morgan('dev'))
// app.use((req,res,next)=>{
//     console.log('this is my first middleware using use')
//     next();// we need next to move on, if we don't then it will get stuck and wouldn't implement anything below
//     console.log('blah blah')// this will still be implemented but first we will go through all the next middlewares and then implement this
// })

// app.use((req,res,next)=>{
//     console.log('this is my second middleware using use')
//     return next();// to make sure that nothing after next() in this function runs
// })

// app.get('/',(req,res)=>{
//     console.log('this ran before blah blah')
//     res.send('hello world')
// })

// app.get('/dogs',(req,res)=>{
//     res.send('hello dogs')
// })

// app.listen(3000,()=>{
//     console.log('running on localhost 3000')
// })


//----------------more serious--------------------
const express = require('express');
const morgan = require('morgan');

const app = express();

const requestTime = (req,res,next)=>{
    req.requestTime = Date.now();
    next();
}
app.use(requestTime);

app.use('/dogs',(req,res,next)=>{
    console.log('at home');
    next()
})

function verifyPassword(req,res,next){
    const {password} = req.query;
    if(password==='iloveme'){
        next();
    }
    res.send('Access Denied');
}

app.get('/',(req,res,next)=>{
    console.log(`request time is ${req.requestTime}`)
    res.send('hello world')
})

app.get('/secret',verifyPassword,(req,res)=>{
    res.send('You got it')
})

app.use((req,res)=>{
    res.status(404).send('Not Found')
})

app.listen(3000,()=>{
    console.log('running on localhost 3000')
})