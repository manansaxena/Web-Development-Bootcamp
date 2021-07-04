//------------------basic---------------------------

// const express = require('express');
// initializing an express application. the app variable made is of type object
// const app = express();
// console.dir(app)

// anytime we have an incoming request of any type, it's going to run this callback

// app.use((req,res)=>{
//     console.log('we got a new request')
    // console.dir(req)
    // res.send('Hello, we got your request') //generates an http response
    // res.send({"name":"ayden frost"})
//     res.send('<h1>this would be rendered as an h1 in the browser</h1>')
// })

// starting a server which basically means start listening for requests.
// it requires a port number and a callback functions which runs when the app starts listening on the port specified
// currently this line just starts the server, but we aren't sending any request yet. And even postman or google etc can access this 
// if we want, but some other user can't access our localhost

// app.listen(3000,()=>{
//     console.log('Our app is listening on port 3000')
// })

// ports are just an enterance to our machibne.If we have multiple express app running, then we should have different port 
// numbers in them

//-----------different response for different request------------

// const express = require('express');
// const app = express();


// app.get('/',(req,res)=>{
//     res.send('You are at the home page')
// })

// app.get('/dogs',(req,res)=>{
//     res.send('Go buy a puppy')
// })

// app.post('/dogs',(req,res)=>{
//     res.send('this is a post response')
// })

// app.get('*',(req,res)=>{
//     res.send(`I don't know the path to that request`)
// })

// app.listen(3000,()=>{
//     console.log('listening at port no. 3000')
// })

//--------------defining route patterns---------------------

const express = require('express');
const app = express();

// this will match the actual string subreddit but also all the patterns that follow this
// app.get('/r/:subreddit',(req,res)=>{
//     res.send('this is a subreddit')
// })

// to access what we sent in that subreddit we use req.params
app.get('/r/:subreddit',(req,res)=>{
    // console.log(req.params)
    const parameters = req.params;
    res.send(`this is a ${parameters.subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId',(req,res)=>{
    const parameters = req.params;
    res.send(`this is the post by ${parameters.postId} on ${parameters.subreddit} subreddit`)
})
app.listen(3000,()=>{
    console.log('listening at port 3000')
})

// accessing the query string
app.get('/search/',(req,res)=>{
    const queries = req.query;
    if(Object.keys(queries).length===0){
        res.send('nothing found if nothing searched');
    }
    else {
        res.send(`the location set is ${queries.location} and timezone is ${queries.timezone}`)
    }
})