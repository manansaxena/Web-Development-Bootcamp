const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationships',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('mongo connected');
    })
    .catch((err)=>{
        console.log('mongo ran into an error',err)
    })


const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    season:{
        type: String,
        enum: ['Spring','Summer','Fall','Winter']
    }
})

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{type: mongoose.Schema.Types.ObjectId,ref:'Product'}]
})


const Product = new mongoose.model('Product',productSchema);
const Farm = new mongoose.model('Farm',farmSchema);

// Product.insertMany([
//     {
//         name:'Melon',price:2.4,season:'Summer'
//     },
//     {
//         name:'Apple',price:3,season:'Winter'
//     },
//     {
//         name:'Orange',price:2.5,season:'Spring'
//     }
// ])

const makeFarm = async () => {
    const farm = new Farm({'name':'hello',city:'michigan'});
    const melon = await Product.findOne({name:'Melon'});
    farm.products.push(melon);
    await farm.save();
    console.log(farm);
}

const addProduct = async () => {
    const farm = await Farm.findOne({name:'hello'});
    const apple = await Product.findOne({name:'Apple'});
    farm.products.push(apple);
    await farm.save();
    console.log(farm);
}

// makeFarm();
// addProduct();

Farm.findOne({name:'hello'})
    .populate('products')
    .then(farm=> console.log(farm))