console.log("Math Operations")
//Addition
console.log(121+212)
//Subtraction
console.log(121-212)
//Multiplication
console.log(121*212)
//Division
console.log(121/212)
//Modulo
console.log(212%121)
//Exponentiation
console.log(121**2)

//NaN
console.log("NaN's type - " + typeof(NaN))

console.log("Variables")

let myAge = 22;
let herAge = 23;

let ourAge = myAge+herAge;
console.log("Our Age is: "+ ourAge)

console.log("After one year")

myAge = myAge + 1;
herAge = herAge + 1;
ourAge = myAge+herAge
console.log("Our newAge is: "+ ourAge)

const diffAge = herAge - myAge;
// console.log("Trying to change a const value: "+ diffAge++)

let loveIs = true;
console.log("Testing boolean: "+ loveIs)

console.log("Changing a variable Type")
let number = 3;
console.log("Original: "+ number)
number = false;
console.log("New: "+ number)
