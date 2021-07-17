// imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const Campground = require('./models/campground');
const methodOverride = require('method-override');
const WrapAsync = require('./utils/WrapAsync');
const ExpressError = require('./utils/ExpressError')
const {campgroundSchema} = require('./joiSchemas')
mongoose.connect('mongodb://localhost:27017/yelp-camp',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});

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


const validateCampground = (req,res,next)=>{
    const result = campgroundSchema.validate(req.body);
    if(result.error){
        const msg = result.error.details.map((el)=>el.message).join(',');
        throw new ExpressError(msg,400)
    }
    else{
        next();
    }
}

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/campgrounds',WrapAsync(async(req,res)=>{
    const camps = await Campground.find({});
    res.render('campgrounds/index',{camps})
}))

app.get('/campgrounds/new',(req,res)=>{
    res.render('campgrounds/new')
})

app.post('/campgrounds/',validateCampground,WrapAsync(async (req,res,next)=>{
    // if(!req.body.campground) throw new ExpressError('Invalid Campground Data',400);
    const camp = new Campground(req.body.campground);
    await camp.save();
    res.redirect(`/campgrounds/${camp._id}`)
}))

app.get('/campgrounds/:id',WrapAsync( async(req,res)=>{
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/show',{camp})
}))

app.get('/campgrounds/:id/edit',WrapAsync(async (req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit',{camp})
}))

app.put('/campgrounds/:id',validateCampground,WrapAsync(async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findByIdAndUpdate(id,{...req.body.campground})
    res.redirect(`/campgrounds/${camp._id}`)
}))

app.delete('/campgrounds/:id',WrapAsync(async(req,res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds/')
}))

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

