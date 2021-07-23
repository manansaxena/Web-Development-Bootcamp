const express = require('express');
const router = express.Router({mergeParams:true});
const WrapAsync = require('../utils/WrapAsync');
const Campground = require('../models/campground');
const Review = require('../models/review');
const {isLoggedIn,validateReview,isReviewOwner} = require('../middleware');


router.post('/',isLoggedIn,validateReview,WrapAsync(async(req,res)=>{
    const {id} = req.params;
    const {body,rating} = req.body.review;
    const camp = await Campground.findById(id);
    const review = await new Review({body,rating});
    review.owner = req.user._id;
    camp.reviews.push(review);
    await review.save();
    await camp.save();
    req.flash('success','review added')
    res.redirect(`/campgrounds/${camp._id}`)
}))

router.delete('/:reviewId',isLoggedIn,isReviewOwner,WrapAsync(async(req,res,next)=>{
    const {id,reviewId} = req.params;
    const camp = await Campground.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId)
    req.flash('success','review deleted')
    res.redirect(`/campgrounds/${id}`)
}))


module.exports = router;