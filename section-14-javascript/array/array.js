// To make an empty array
let emptyArray = []

// Array of strings
let stringArray = ["Hello","World","!"]

// Array of numbers
let numberArray = [1,2,3]

//Mixed Array
let mixedArray = [true,1,"World",null]

console.log(`${emptyArray} | ${stringArray} | ${numberArray} | ${mixedArray} | length of mixedArray: ${mixedArray.length}`)
console.log(`${stringArray[1]} ${stringArray[1][0]}`)

stringArray[0] = "Nello"
console.log(stringArray)
stringArray[6] = "I just skipped."
console.log(stringArray,stringArray[4])

let movieLine = ["Tom","Dick"];
movieLine.push("Harry")
console.log(movieLine)
movieLine.unshift('Nancy')
console.log(movieLine)
movieLine.push("Julian","George")
console.log(movieLine)
movieLine.pop()
console.log(movieLine)

console.clear()

let favBurger = ["McVeggie","McSpicy Paneer"];
let favPizza = ["Peppy Paneer", "Farmhouse"]
let favFood = favBurger.concat(favPizza)
console.log(favFood)
console.log(favFood.includes("Maharaja Mac"))
console.log(favFood.indexOf("Peppy Paneer"))
console.log(favBurger.reverse())
console.log(favFood.slice(0,3))
console.log(`no argument is slice gives entire array ${favFood.slice()}`)
console.log(favFood.splice(1,0,'Chilli Paneer'))
console.log(favFood.splice(0,1))

let numArray = [1.5,11,156,2,-1,0];
console.log(`Dont use normal sort for many purposes ${numArray} and this turns to ${numArray.sort()}`)

const myEggs = ["Blue","Purple","Green"];
console.log(`we can change the values as long as the reference remains the same ${myEggs.push("Orange")}`)
myEggs[0] = "Red";
console.log(myEggs)
// But we can't reassign eggs to a completely new array like myEggs=["Yellow","Black"];

console.clear()


const board = [
    ['0',null,'X'],
    [null,'X','0'],
    ['X','0',null]
];

console.log(board)
console.log(board[0][1])