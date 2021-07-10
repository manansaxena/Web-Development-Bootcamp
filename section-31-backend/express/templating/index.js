const express = require('express');
const app = express();
const path = require('path')
const redditData = require('./data.json')

// to serve the box of html, css and js 
app.use(express.static(path.join(__dirname,'/public')))

// setting ejs as our view engine
app.set('view engine','ejs')
// to make views accessible from different directory. __dirname give directory where index is located in this case
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/random',(req,res)=>{
    const num = Math.floor(Math.random()*10)+1;
    // we are sending in num for being referenced in random.ejs, where it will be used as a variable named rand
    res.render('random.ejs',{rand:num})
})

app.get('/r/:subreddit',(req,res)=>{
    const parameters = req.params;
    const data = redditData[parameters.subreddit]
    if(data){
        res.render('subreddit',{subreddit: parameters.subreddit,data:data});
    }
    else{
        res.send('not found')
    }
    // we can also do ...data, this will break the data down into pieces then we could directly interact with name, author key etc
})

app.get('/food',(req,res)=>{
    const food = [
        'pizza','burger','drinks'
    ]
    res.render('food.ejs',{food: food})
})
app.listen(3000,()=>{
    console.log('listening on port no. 3000')
})