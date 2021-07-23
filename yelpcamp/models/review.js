const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    body: String,
    rating: Number,
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Review',reviewSchema);