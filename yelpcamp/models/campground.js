const mongoose = require('mongoose');
const { campgroundSchema } = require('../joiSchemas');
const Schema =  mongoose.Schema;
const Review = require('./review')


const CampgroundSchema = new Schema(
    {
        title:String,
        image:String,
        price:Number,
        description:String,
        location: String,
        reviews:[
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Review'
            }
        ],
        owner:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:'User'
        }
    }
)

CampgroundSchema.post('findOneAndDelete',async function(camp){
    if(camp){
        await Review.deleteMany(
            {
                _id: {
                    $in: camp.reviews
                }
            }
        )
    }
})



module.exports = mongoose.model('Campground',CampgroundSchema);