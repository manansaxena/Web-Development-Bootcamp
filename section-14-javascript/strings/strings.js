console.log("Strings")

let myName = "Ayden Frost";
console.log("My Name: "+myName)

let herName = "Amy 'Wilson'";
console.log("Her Name: "+herName)

console.log("Third character of my name: "+myName[2])
console.log("The length is: "+ myName.length)
console.log("Our name added together: "+myName+herName)

console.log("String Methods")

let methodString = "We are together!";
console.log("Uppercase: "+methodString.toUpperCase())
console.log("Lowercase: "+methodString.toLowerCase())

let methodString2 = "   We spaced out for a while    ";
console.log("Trim: "+methodString2.trim()) // Removes space before and after the sentence
console.log("Both trim and uppercase: "+methodString2.trim().toUpperCase())

console.log("Index of 'are': "+methodString.indexOf("are"))
console.log("Index of 'as': "+methodString.indexOf("as")) // not existing so -1
console.log("Index of 'e': "+methodString.indexOf("e")) // the first occurance

console.log("Begin index:0 and end index:4 : "+methodString.slice(0,4))
console.log("Begin index:-5 and end index:-3 : "+methodString.slice(-5,-3)+" length of the string "+methodString.length)

console.log("Replacing: "+methodString.replace("are","aren't")) // Only replaces the first instance 
console.log("Repeating 2 times: "+methodString.repeat(2))

let insanityLevel = 3;
let normalityLevel = 7;

console.log(`The level of insanity is lower by: ${normalityLevel-insanityLevel}`)

let ourLikeness = null;
console.log(`Current ${ourLikeness}`)

ourLikeness = true;
console.log(`Now it's ${ourLikeness}`)

console.log(`Testing out math class ${Math.PI} or ${Math.sqrt(9)} or ${Math.floor(24.9999)} or ${Math.ceil(24.9999)}`)

console.log("Tryong out a number between 0 and 100 using Math.random")

let randomNumber = Math.random();
randomNumber = Math.floor(randomNumber * 100);
console.log(`And our random number is ${randomNumber}`)