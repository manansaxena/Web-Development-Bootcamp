//--------------- a file that we run on it's own ie. just mongo and mongoose to get some data in our database-------
const mongoose = require('mongoose');
const Product = require('./models/product')



mongoose.connect('mongodb://localhost:27017/farmApp',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('mongo successfully connected')
    })
    .catch((err)=>{
        console.log('oops error',err)
    })

// const p = new Product(
//     {
//         name:'Grapefruit',
//         price:1.99,
//         category:'fruit'
//     }
// )

// p.save().then((data)=>console.log(data)).catch((err)=>{console.log(err)})

const seedProducts = [
    {
        name:'Brinjal',
        price: 4,
        category:'vegetable'
    },
    {
        name:'Tomato',
        price: 2,
        category:'fruit'
    },
    {
        name:'Milk',
        price: 10,
        category:'dairy'
    },
    {
        name:'Cherry',
        price: 1,
        category:'fruit'
    }
]

Product.insertMany(seedProducts)
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err)
    })