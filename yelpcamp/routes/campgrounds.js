const express = require('express');
const router = express.Router();
const WrapAsync = require('../utils/WrapAsync');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const {campgroundSchema} = require('../joiSchemas');
const {isLoggedIn} = require('../middleware')

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

router.get('/',WrapAsync(async(req,res)=>{
    const camps = await Campground.find({});
    res.render('campgrounds/index',{camps})
}))

router.get('/new',isLoggedIn,(req,res)=>{
    return res.render('campgrounds/new')
})

router.post('/',isLoggedIn,validateCampground,WrapAsync(async (req,res,next)=>{
    // if(!req.body.campground) throw new ExpressError('Invalid Campground Data',400);
    const camp = new Campground(req.body.campground);
    await camp.save();
    req.flash('success','successfully created your campground')
    res.redirect(`/campgrounds/${camp._id}`)
}))

router.get('/:id',WrapAsync( async(req,res)=>{
    const { id } = req.params;
    const camp = await Campground.findById(id).populate('reviews');
    if(!camp){
        req.flash('error','Campground Not Found')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show',{camp})
}))

router.get('/:id/edit',isLoggedIn,WrapAsync(async (req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id);
    if(!camp){
        req.flash('error','Campground Not Found')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/edit',{camp})
}))

router.put('/:id',isLoggedIn,validateCampground,WrapAsync(async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findByIdAndUpdate(id,{...req.body.campground})
    if(!camp){
        req.flash('error','Campground Not Found')
        return res.redirect('/campgrounds')
    }
    req.flash('success','successfully updated your campground')
    res.redirect(`/campgrounds/${camp._id}`)
}))

router.delete('/:id',isLoggedIn,WrapAsync(async(req,res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success','successfully deleted your campground')
    res.redirect('/campgrounds/')
}))


module.exports = router;