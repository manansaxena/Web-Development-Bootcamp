const mongoose = require('mongoose');
const { campgroundSchema } = require('../joiSchemas');
const Schema =  mongoose.Schema;
const Review = require('./review')



const imageSchema = new Schema({
    url: String,
    filename:String
})

imageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload','/upload/w_400')
})

const CampgroundSchema = new Schema(
    {
        title:String,
        images: [
            imageSchema
        ],
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