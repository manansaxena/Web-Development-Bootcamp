const express = require('express');
const router = express.Router({mergeParams:true});
const WrapAsync = require('../utils/WrapAsync');
const Campground = require('../models/campground');
const Review = require('../models/review');
const {isLoggedIn,validateReview,isReviewOwner} = require('../middleware');
const reviews = require('../controllers/reviews')

router.post('/',isLoggedIn,validateReview,WrapAsync(reviews.createReview))

router.delete('/:reviewId',isLoggedIn,isReviewOwner,WrapAsync(reviews.deleteReview))


module.exports = router;