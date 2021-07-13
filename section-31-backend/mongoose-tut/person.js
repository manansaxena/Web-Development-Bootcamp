const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shopApp',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('connected succesfully');
    })
    .catch((err)=>{
        console.log('connection failed',err)
    })

const personSchema = new mongoose.Schema({
    first:{
        type: String,
        required: true
    },
    last:{
        type:String,
        required:true
    }
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.pre('save',async function (){
    this.first = 'Oh';
    this.last = 'Mama'
    console.log('going to save')
})

personSchema.post('save',async function(){
    console.log('saved')
})

const Person = new mongoose.model('Person',personSchema);

const newPerson = new Person({first:'jo',last:'Sorkin'})
newPerson.save()
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
console.log(newPerson.fullName)