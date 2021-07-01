// for(let i=0;i<=10;i++){
//     console.log(i);
// };

// let numArray = [];

// for(let i=0;i<20;i=i+2){
//     numArray.push(i);
// }
// console.log(numArray)

// let countArray = []

// for(let i=100;i>=0;i-=10){
//     countArray.push(i);
// }
// console.log(countArray)

// let loopArray = ["Scarlett","Jennifer","Emmy"]
// for(let i=0;i<loopArray.length;i++){
//     console.log(i,loopArray[i])
// }
// for(let i=loopArray.length-1;i>=0;i--){
//     console.log(i,loopArray[i])
// }

// let str = 'SOS';

// for(let i=0;i<4;i++){
//     console.log('outer loop: ',i);
//     for(let j=0;j<3;j++){
//         console.log(' inner loop: ',str[j])
//     } 
// }

// const seatingChart = [
//     ['Norman','Damian','Enes'],
//     ['Stephen','Klay','James', 'Andre'],
//     ['Brie','Kristen','Emma']
// ]

// for(let i=0;i<seatingChart.length;i++){
//     for(let j=0;j<seatingChart[0].length;j++){
//         console.log(seatingChart[i][j])
//     }
// }

// console.clear()


// let count = 0;
// while(count<10){
//     console.log(count);
//     count++;
// }

// const SECRET = "Monica";

// let enterMessage = prompt("Enter the code");

// while(enterMessage!==SECRET){
//     enterMessage = prompt("Enter the code");
// }

// let firstArray = [1,2,3,4,5];
// let secondArray = [0,0,0,2,1];
// let found  = false;
// while(true){
//     for(let i=0;i<secondArray.length;i++){
//         if(firstArray.includes(secondArray[i])){
//             console.log(`Match Found ${secondArray[i]}`)
//             found = true;
//             break;
//         }
//     }
//     if(found===false){
//         console.log('not found')
//     }
//     break;
// }

console.clear()

// let maxNumber = parseInt(prompt("Enter your max number"));

// while(!maxNumber){
//     maxNumber = parseInt(prompt("Enter a valid Number"))
// }

// const targetNumber = Math.floor(Math.random()*maxNumber) + 1;

// console.log(targetNumber)

// let guessNumber = parseInt(prompt("enter your first guess"));

// let count = 1;
// while(parseInt(guessNumber)!==targetNumber){

//     if(guessNumber==='q'){
//         break;
//     }
//     count++;
//     if(guessNumber>targetNumber){
//          guessNumber =prompt("Guess Lower");
//     }
//     else{
//         guessNumber = prompt("Guess Higher");
//     }
// }
// if(guessNumber==='q'){
//     console.log('You Quit')
// }
// else{
//     console.log(`You guessed it in ${count} tries`)
// }

// console.log("For Of loop")


// const subreddits = ["colorization","food","japanpics"]

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }

// const seatingChart = [
//     ['Norman','Damian','Enes'],
//     ['Stephen','Klay','James', 'Andre'],
//     ['Brie','Kristen','Emma']
// ]

// for(let row of seatingChart){
//     for(let name of row){
//         console.log(name);
//     }
// }

// let charArray = [];
// for(let char in "Hello World"){
//     charArray.push(char)
// }
// console.log(charArray)

console.log("Iterating over object literals")

const groceryList = {
    Apple: 2,
    Banana: 2,
    Milk: 1,
    Pineapple: 3
}

for(let item in groceryList){
    console.log(`Amount of ${item} is ${groceryList[item]} kg`)
}

for(let item of Object.keys(groceryList)){
    console.log(`Amount of ${item} is ${groceryList[item]} kg`)
}

let sumAmount = 0;
for(let amount of Object.values(groceryList)){
    sumAmount += amount;
}
console.log(`Average amount is ${sumAmount/Object.values(groceryList).length}`)