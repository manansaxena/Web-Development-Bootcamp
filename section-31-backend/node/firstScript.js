console.log('my first script running on node')

console.log(process.argv)

// Greeter
const args = process.argv.slice(2);
for(let i of args){
    console.log(`Hola!! ${i}`);
}