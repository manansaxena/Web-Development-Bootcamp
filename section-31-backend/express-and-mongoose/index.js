const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const Product = require('./models/product')
const methodOverride = require('method-override')


// mongoose stuff
mongoose.connect('mongodb://localhost:27017/farmApp',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('Mongo connection open');
    })
    .catch((err)=>{
        console.log('mongo connnection error',err);
    })



// express stuff
const app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


// to view all products in one page. No details about the product
app.get('/products',async (req,res)=>{
   const products = await Product.find({});
   res.render('products/index',{products:products})
})

// to display form for new products
app.get('/products/new',(req,res)=>{
    res.render('products/new')
})
// to get the information submitted from form
app.post('/products',async (req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})


// to view details of a product
app.get('/products/:id',async (req,res)=>{
    const parameters = req.params;
    const product = await Product.findById(parameters.id)
    res.render('products/show',{product:product});
})

// to edit products. Edit form display
app.get('/products/:id/edit',async (req,res)=>{
    const parameters = req.params;
    const product = await Product.findById(parameters.id)
    res.render('products/edit',{product})
})

//patch
app.patch('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,{price:req.body.price,category:req.body.category},{runValidators:true,new:true})
    res.redirect(`/products/${product._id}`)
})

//delete
app.delete('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})




app.listen(3000,()=>{
    console.log('app on 3000')
})