const mongoose = require('mongoose');
// connecting to a mongo database, here movieApp is the name of database. If it doesn't exist, then it will create one for us
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('connection succesful');
    })
    .catch((err)=>{
        console.log('connection failed')
        console.log(err)
    })

// we are defining a schema. Nothing to do directly with mongo, this is on js side
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// now we make a model, which returns us a class. The name sent is important, if we send Movie then we get movies as collection
const Movie = mongoose.model('Movie',movieSchema);
// we create a new instance of movie
// const fightClub = new Movie({title:'Fight Club',year:1999,score:8.8,rating:'R'});
// fightClub.save();

//-----------------create multiple at same time--------------
// Movie.insertMany([
//     {
//         'title':'Harry Potter',
//         'year': 1998,
//         'score': 7.8,
//         'rating':'R'
//     }
// ]).then(data=>{
//     console.log('added');
//     console.log(data);
// }).catch(err=>{
//     console.log(err)
// })

//-------------------finding-----------------------------
// Movie.find({score:{$lte:8}}).then(data=>(console.log(data)))
// Movie.findById("60e9938e67b1ee3a548de9bb").then(data=>(console.log(data)))

//------------------updation-----------------------------
// Movie.updateOne({title:'Harry Potter'},{score:7.5}).then(data=>console.log(data));
// Movie.updateMany({title:'Harry Potter'},{score:7.7}).then(data=>console.log(data));
// Movie.findOneAndUpdate({title:'Harry Potter'},{score:7.6},{new:true}).then(data=>console.log(data))

//--------------delete-----------------------------------
// Movie.deleteMany({title:'Harry Potter'}).then(data=>console.log(data))
Movie.findOneAndDelete({title:'Harry Potter'}).then(data=>console.log(data))
