const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    }
})

// this is going to add on a field for password and username onto our schema
userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User',userSchema);