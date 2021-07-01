const rollDie = function(numSides=6){
    return Math.floor(Math.random()*numSides)+1
}
let roll = rollDie();

function greet(personName,msg='Yo'){
    console.log(`${msg} ${personName}!`)
}

const nums = [1,1,2,34,24,24,23,4,3532,5,323,34]

console.log(Math.min(...nums))
console.log(...'Hello World!')

const tbbtCharacters = ['Penny','Raj','Leonard','Shelon','Howard']
const ggCharacters = ['Dan','Blair','Serena','Nate','Chuck']

const allCharacters = [...tbbtCharacters,...ggCharacters]
console.log(allCharacters)
console.log([..."Hello"])

const music = {
    bandName: "Smiths",
    year: "1986"
}

const movie = {
    movieName: "Sing Street",
    year: "2016"
}

const mixOfTwo = {...music,...movie} ;
console.log({...'Hello',what:'isthisgood'})


function sum(){
    console.log(arguments)
}

sum(1,2,3,24,324,32,4,234);

function product(...nums){
    console.log(nums)
}
product(12,21,321,3,124,21,412,4)

function result(gold,silver,...everyoneElse){
    console.log(`Gold goes to: ${gold}`)
    console.log(`Silver goes to: ${silver}`)
    console.log(`Everyone else boo: ${everyoneElse}`)
}

result('josh','josphine','jack','john','jim')

const hypotheticalGFs = ['Kim','Elizabeth','Anne','Emma','Emmy']
const [first,second,...restOfThem] = hypotheticalGFs

console.log(first,second,restOfThem)

const me = {
    firstName: 'Ayden',
    lastName: 'Frost',
    dream: 'Live in Japan'
}

const {firstName:myName,dream:myDream,favFood='Pizza'} = me
console.log(myName,myDream,favFood)

function defineMe({dream}){
    console.log(`${dream}`)
}

defineMe(me)