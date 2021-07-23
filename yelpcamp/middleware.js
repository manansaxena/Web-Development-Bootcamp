const {campgroundSchema,reviewSchema} = require('./joiSchemas');
const ExpressError = require('./utils/ExpressError');
const Campground = require('./models/campground');
const Review = require('./models/review');

module.exports.isLoggedIn = (req,res,next)=>{
    if (!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error','you must be logged in')
        return res.redirect('/login')
    }
    next();
}

module.exports.validateCampground = (req,res,next)=>{
    const result = campgroundSchema.validate(req.body);
    if(result.error){
        const msg = result.error.details.map((el)=>el.message).join(',');
        throw new ExpressError(msg,400)
    }
    else{
        next();
    }
}

module.exports.isOwner = async (req,res,next)=>{
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground.owner.equals(req.user._id)){
        req.flash('error','Not authorized to perform this action')
        return res.redirect(`/campgrounds/${id}`)
    }
    next();
}

module.exports.isReviewOwner = async (req,res,next)=>{
    const {id,reviewId} = req.params;
    const review = await Review.findById(reviewId);
    if(!review.owner.equals(req.user._id)){
        req.flash('error','Not authorized to perform this action')
        return res.redirect(`/campgrounds/${id}`)
    }
    next();
}


module.exports.validateReview = (req,res,next)=>{
    const result = reviewSchema.validate(req.body);
    if(result.error){
        const msg = result.error.details.map(el=>el.message).join(',')
        throw new ExpressError(msg,400)
    }
    else{
        next();
    }
}