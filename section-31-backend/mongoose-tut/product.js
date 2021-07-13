const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('connection succesful')
    })
    .catch((err)=>{
        console.log('connection failed',err)
    })


const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            maxLength: 20
        },
        price:{
            type: Number,    // askig us to enter something which can be converted to a number
            required: true,
            min: 0
        },
        onSale:{
            type: Boolean,
            default: false
        },
        categories:{
            type: [String] // tells that categories should be an array holding String only
        }, 
        qty:{
            online:{
                type:Number,
                default:0
            },
            inStore:{
                type:Number,
                default:1
            }
        },
        size:{
            type: String,
            enum: ['S','M','L']
        }
    }
)


// const Product = mongoose.model('Product',productSchema);

// const bike = new Product({name:'Jersey',price:50,color:'red'})//if we send extra keys than specified in schema, then those extra ones are ignored and not stored
// bike.save()    
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// Product.findOneAndUpdate({name:'Jersey'},{price:20},{new:true,runValidators:true})
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// const newProd = new Product({name:'Bottle',price:10})
// newProd.save()    
//     .then(data=>{
//         console.log(data)
//     })
// newProd.greet();

// Custom instance methods
productSchema.methods.greet = function(){
    console.log('Ho Ho Ho');
    console.log(`From ${this.name}`)
}

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategories = function(newCat){
    this.categories.push(newCat);
    return this.save();
}

//custom static Methods
productSchema.statics.fireSale = function(){
    return this.updateMany({},{onSale:true,price:0});
}

const Product = mongoose.model('Product',productSchema);


const findProduct = async () => {
    const foundProduct = await Product.findOne({name:'Jersey'})
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategories('Outdoors');
    console.log(foundProduct)
}

// findProduct()

const fireSaleEnabler = async ()=>{
    const enabledFS = await Product.fireSale();
    console.log(enabledFS)
}

fireSaleEnabler();