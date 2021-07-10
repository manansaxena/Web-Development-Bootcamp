//-------------------POST request overview---------------------

// const express = require('express');
// const app = express();
// const path = require('path')
// app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'/views'))

// app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded in post requests
// app.use(express.json()); // for parsing application/json in post requests

// app.get('/',(req,res)=>{
//     res.render('getposts.ejs')
// })

// app.get('/tacos',(req,res)=>{
//     const {type,qty} = req.query;
//     res.render('tacos.ejs',{type,qty});
// })

// app.post('/tacos',(req,res)=>{
//     console.log(req.body)
//     const {type,qty} = req.body;
//     res.render('tacos.ejs',{type,qty});
// })

// app.listen(3000,()=>{
//     console.log('listening on port 3000');
// })

/*
Dummy Dataset of comments
GET /comments - list all comments   index
GET /comments/new - form to create new element - new
POST /comments - create a new comment   create
GET /comments/:id - to get a particular comment - show route
PUT/PATCH /comments/:id - update one comment
DELETE /comments/:id - delete one comment
*/

//------------------Implementing Comments using REST---------------
const express = require('express');
const app = express();
const path = require('path');
const {v4: uuid} = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));


let comments = [
    {   
        id: uuid(),
        username: 'Todd',
        comment: `What's up you dawg`
    },
    {   
        id:uuid(),
        username: 'Chimp',
        comment: 'Hoo Haa Hoo Hoo'
    }
]
// to get all comments
app.get('/comments',(req,res)=>{
    res.render('comments/index.ejs',{comments})
})
// to just render a form for getting new input
app.get('/comments/new',(req,res)=>{
    res.render('comments/new.ejs')
})
// to create a new comment
app.post('/comments',(req,res)=>{
    const {username,comment} = req.body;
    comments.push({username:username,comment:comment,id:uuid()})
    res.redirect('/comments')
})

// to get a particular comment
app.get('/comments/:id',(req,res)=>{
    const parameters = req.params;
    const comment = comments.find((c)=>c.id===parameters.id);
    res.render('comments/show',{comment})
})

// to render an edit page
app.get('/comments/:id/edit',(req,res)=>{
    const parameters = req.params;
    const comment = comments.find((c)=>c.id===parameters.id);
    res.render('comments/edit',{comment})
})

// to update a comment
app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c=>c.id===id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

//delete a comment
app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})
app.listen(3000,()=>{
    console.log('listening on port 3000');
})