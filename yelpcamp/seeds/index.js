const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {descriptors,places} = require('./seedHelpers');


mongoose.connect('mongodb://localhost:27017/yelp-camp',{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("Database Connected");
})

const sample = (array)=>{
    return array[Math.floor(Math.random()*array.length)]
}

const seedDB = async ()=>{
    await Campground.deleteMany({})
    for(let i=0;i<50;i++){
        let randomNum = Math.floor(Math.random()*1000);
        const price = Math.floor(Math.random()*20)+10
        const newCamp = new Campground({
            owner: '60f9af2176c8ad4fb1f8965c',
            location:`${cities[randomNum].city}, ${cities[randomNum].state}`,
            title:`${sample(descriptors)} ${sample(places)}`,
            image:`https://source.unsplash.com/random/1080x720`,
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, distinctio et. Quisquam delectus culpa, sapiente a nam alias veritatis. Vel labore ipsum fugiat culpa reprehenderit est quia maxime, tempora totam.`,
            price: price,
        })
        await newCamp.save();
    }
}

seedDB().then(()=>{
    mongoose.connection.close();
})