const mongoose = require('mongoose');
const Product = require('./product')

const farmSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Farm must have a name']
    },
    city:{
        type:String
    },
    email:{
        type:String,
        required:[true,'Email Required']
    },
    products:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:'Product'
        }
    ]
})



// farmSchema.pre('findOneAndDelete',async function (data){
//     console.log('pre middleware');
//     console.log(data)
// })
farmSchema.post('findOneAndDelete',async function (farm){
    if(farm.products.length){
        await Product.deleteMany({ _id : { $in : farm.products}})
    }
    console.log('post middleware');
    console.log(farm)
})



const Farm = mongoose.model('Farm',farmSchema);
module.exports = Farm;