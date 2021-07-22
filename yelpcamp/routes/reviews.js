const express = require('express');
const router = express.Router({mergeParams:true});
const WrapAsync = require('../utils/WrapAsync');
const ExpressError = require('../utils/ExpressError')
const {reviewSchema} = require('../joiSchemas')
const Campground = require('../models/campground');
const Review = require('../models/review');

const validateReview = (req,res,next)=>{
    const result = reviewSchema.validate(req.body);
    if(result.error){
        const msg = result.error.details.map(el=>el.message).join(',')
        throw new ExpressError(msg,400)
    }
    else{
        next();
    }
}

router.post('/',validateReview,WrapAsync(async(req,res)=>{
    const {id} = req.params;
    const {body,rating} = req.body.review;
    const camp = await Campground.findById(id);
    const review = await new Review({body,rating});
    camp.reviews.push(review);
    await review.save();
    await camp.save();
    req.flash('success','review added')
    res.redirect(`/campgrounds/${camp._id}`)
}))

router.delete('/:reviewId',WrapAsync(async(req,res,next)=>{
    const {id,reviewId} = req.params;
    const camp = await Campground.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId)
    req.flash('success','review deleted')
    res.redirect(`/campgrounds/${id}`)
}))


module.exports = router;