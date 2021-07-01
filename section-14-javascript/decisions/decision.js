console.log(`Lets test out decision making with JS`)

let favFood = "Burger";
let favDrink = "Orange Juice";

console.log(`Is Fav Food larger or not? ${favFood.length > favDrink.length}`)

console.log(`Weirdness of == ${null==undefined}`)
console.warn(`Testing the warning`)
console.error(`Testing out error!`)
// let userInput = prompt("Enter your favourite number")
// console.log(`${parseInt(userInput)+1}`)
// alert(`Never do this!!`)
console.clear() // To clear the console

// console.log(`Conditional Statements`)

// let moneyBank = 500;

// if(moneyBank===400) {
//     console.log("You have the exact amount for transaction")
// } else if (moneyBank<400) {
//     console.log(`Insufficient Funds`)
// } else {
//     console.log(`You have more than enough funds`)
// }

console.clear()

// const password = prompt("Enter a password")

// if(password.length>=6){
//     if(password.indexOf(" ")===-1){
//         console.log("Password saved")
//     }
//     else{
//         console.log("Please remove spaces")
//     }
// }
// else {
//     console.log("Please enter password greater than 6 characters")
// }

// const userInput = prompt("Enter something")

// if(userInput){
//     console.log("Truthy as it's not an empty string")
// }
// else{
//     console.log("Falsy")
// }

// let andVariable = "hello world";

// if(andVariable.length===11 && 1+1===2){
//     console.log("Yes both are true")
// }
// else {
//     console.log("Oops like one of them is false")
// }

// let password = prompt("Enter your password");

// if(password.length>=6 && password.indexOf(" ")===-1){
//     console.log("valid password")
// }else{
//     console.log("invalid password")
// }

// let firstName = prompt("Enter First Name")
// if(!firstName){
//     prompt("Enter Again")
// }

let day = "Tuesday";

switch (day){
    case "Monday":
        console.log("Monday")
        break;
    case "Tuesday":
        console.log("Tuesday")
        break;
    case "Wednesday":
    case "Thurday":
        console.log("Thurday and Wednesday are equivalent");
        break;
    default:
        console.log("Invalid")
}