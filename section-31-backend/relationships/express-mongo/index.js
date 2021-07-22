const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const Product = require('./models/product')
const methodOverride = require('method-override')
const AppError = require('./AppError');
const Farm = require('./models/farm')
const flash = require('connect-flash');
const session = require('express-session');


// mongoose stuff
mongoose.connect('mongodb://localhost:27017/farmAppTake2',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('Mongo connection open');
    })
    .catch((err)=>{
        console.log('mongo connnection error',err);
    })

function wrapAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch(err => next(err));
    }
}

categories = ['fruit','vegetable','dairy']

// express stuff
const app = express();
app.use(session({secret:'thisisasecret',resave:false,saveUninitialized:false}))
app.use(flash());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


app.use((req,res,next)=>{
    res.locals.messages = req.flash('success');
    next();
})




//--------------farm routes----------------

app.get('/farms',wrapAsync(async(req,res,next)=>{
    const farms = await Farm.find({});
    res.render('farms/index',{farms})
}))


// to display form for new farm
app.get('/farms/new',(req,res)=>{
    res.render('farms/new')
})

app.get('/farms/:id',wrapAsync(async(req,res,next)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id).populate('products');
    res.render('farms/show',{farm})
}))

app.get('/farms/:id/products/new',async(req,res,next)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new',{categories,farm})
})


app.post('/farms/:id/products',wrapAsync(async(req,res,next)=>{
    const {id} = req.params;
    const product = new Product(req.body);
    const farm = await Farm.findById(id);
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${farm._id}`)
}))


app.post('/farms',wrapAsync(async(req,res,next)=>{
   const farm = new Farm(req.body);
   await farm.save()
   req.flash('success','made a farm')
   res.redirect('/farms')
}))

app.delete('/farms/:id',wrapAsync(async(req,res,next)=>{
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms')
}))











//----------------product routes-------------------
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
app.post('/products',async (req,res,next)=>{
    try{
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    }catch(err){
        next(err);
    }
   
})


// to view details of a product
app.get('/products/:id',async (req,res,next)=>{
    const parameters = req.params;
    const product = await Product.findById(parameters.id)
    if(!product){
        return next(new AppError('Product Not found',404));
    }
    res.render('products/show',{product:product});
})

// to edit products. Edit form display
app.get('/products/:id/edit',async (req,res,next)=>{
    try{
        const parameters = req.params;
        const product = await Product.findById(parameters.id)
        if(!product){
            throw new AppError('Product Not found',404);
        }
        res.render('products/edit',{product})
    }catch(err){
        next(err)
    }
    
})

//patch
app.patch('/products/:id',async (req,res,next)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,{price:req.body.price,category:req.body.category},{runValidators:true,new:true})
        res.redirect(`/products/${product._id}`)
    }catch(err){
        next(err);
    }
    
})


//delete
app.delete('/products/:id',wrapAsync(async (req,res)=>{
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
}))

app.use((err,req,res,next)=>{
    const {status=500,message='something went wrong'} = err;
    res.status(status).send(message)
})


app.listen(3000,()=>{
    console.log('app on 3000')
})