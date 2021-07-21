const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationships',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('mongo connected');
    })
    .catch((err)=>{
        console.log('mongo ran into an error',err)
    })


const userSchema = new mongoose.Schema({
    username: String,
    age:Number
});

const tweetSchema = new mongoose.Schema({
    text:String,
    likes:Number,
    user:{type:mongoose.SchemaTypes.ObjectId,ref:'User'}
})

const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet',tweetSchema);


const makeTweets = async () => {
    const user = new User({username:'fandom',age:23});
    const tweet1 = new Tweet({text:'hihihi',likes:0});
    const tweet2 = new Tweet({text:'hahaha',likes:46});
    tweet1.user = user;
    tweet2.user = user;
    await user.save();
    await tweet1.save();
    await tweet2.save();
}

// makeTweets();

Tweet.find({})
    .populate('user','username')
    .then(tweet=>console.log(tweet))
