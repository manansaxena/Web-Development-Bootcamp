// console.log('my first script running on node')

// console.log(process.argv)

// Greeter
// const args = process.argv.slice(2);
// for(let i of args){
//     console.log(`Hola!! ${i}`);
// }

//------------File System------------------
const fs = require('fs')
const folderName = process.argv[2] || 'Project';
// console.log(fs)
// fs.mkdir('./temp',{recursive: true},(err)=>{
//     console.log('In the call back')
//     if(err) throw err;
// });
fs.mkdirSync(`./${folderName}`);
// console.log('I am after the mkdir func')
fs.writeFileSync(`./${folderName}/temp.js`,'text')
// fs.writeFileSync(`./${folderName}/temp.css`)