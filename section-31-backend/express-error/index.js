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
const AppError = require('./AppError')
const app = express();

const requestTime = (req,res,next)=>{
    req.requestTime = Date.now();
    console.log(req.method,req.path)
    next();
}
app.use(requestTime);

app.use('/dogs',(req,res,next)=>{
    console.log('I love dogs');
    next()
})

function verifyPassword(req,res,next){
    const {password} = req.query;
    if(password==='iloveme'){
        next();
    }
    // res.send('Access Denied');
    // throw new Error('Access Denied, correct password required')
    throw new AppError('password required',401)
}

app.get('/',(req,res,next)=>{
    console.log(`request time is ${req.requestTime}`)
    res.send('hello world')
})

app.get('/dogs',(req,res,next)=>{
    console.log(`Request Date:${req.requestTime}`)
    res.send('woof woof');
})

app.get('/error',(req,res,next)=>{
    Bird.fly();
})

app.get('/secret',verifyPassword,(req,res)=>{
    res.send('You got it')
})

app.get('/admin',(req,res)=>{
    throw new AppError('you are not an admin',403);
})

app.use((req,res)=>{
    res.status(404).send('Not Found')
})

// app.use((err,req,res,next)=>{
//     console.log('*********ERROR*********')
//     // res.status(500).send('you got an error')
//     next(err)
// })

// app.use((err,req,res,next)=>{
//     console.log('*********ERROR 2*********')
//     // res.status(500).send('you got an error')
//     // res.redirect('/')
//     next(err)
// })

app.use((err,req,res,next)=>{
    const {status = 500} = err; // we are able to destructure the status because we are throwing an apperror in secret path which has a status as we defined it. but if throw a normal default error, then we would run into problem as it wont have a status code.
    const {message = "Something went wrong"} = err; 
    res.status(status).send(message)
})


app.listen(3000,()=>{
    console.log('running on localhost 3000')
})