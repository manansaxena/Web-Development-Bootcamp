const fig = require('figlet');
const color = require('colors');

fig('Yup',(err,data)=>{
    if (err){
        console.log(err)
    }
    console.log(data.rainbow)
})