const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationships',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('mongo connected');
    })
    .catch((err)=>{
        console.log('mongo ran into an error',err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses:[
        {   
            _id:{id:false},
            street:String,
            city:String,
            state:String,
            country:String
        }
    ]
})

const User = mongoose.model('User',userSchema);

const makeUser = async () => {
    const newUser = new User({
        first:'Harry',
        last:'Potter',

    })

    newUser.addresses.push({
        street: 'A',
        city: 'B',
        state: 'C',
        country: 'D'
    })

    const res = await newUser.save();
    console.log(res)
}

makeUser();