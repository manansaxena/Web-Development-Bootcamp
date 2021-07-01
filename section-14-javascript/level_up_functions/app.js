// ---------------------FUNCTION SCOPE-------------------------------

// WORKS

// function collectEggs(){
//     let totalEggs = 6;
//     console.log(totalEggs)
// }

// collectEggs();

// WONT WORK AS DEFINED IN THE FUNCTION SCOPE
 
//function collectEggs(){
//     let totalEggs = 6;
// }

// collectEggs();
// console.log(collectEggs)

// let totalEggs = 0; // Global Variable

// function collectEggs(){
//     totalEggs = 6;
// }
// console.log(totalEggs)
// collectEggs();
// console.log(totalEggs)

// let bird = 'Koyal';
// function birdWatch(){
//     let bird = 'Tota';
//     console.log(bird)
// }
// birdWatch();
// console.log(bird)

//----------------------END--------------------------------------


//--------------------BLOCK SCOPE------------------------------

// let radius = 8;
// if(radius>0){
//     const PI = 3.14159;
//     let msg = "Hi";
// }

// console.log(radius)
// console.log(msg)

// for(let i=0;i<5;i++){
//     let msg = 'Temperature';
//     console.log(msg)
// }

// console.log(msg)

//----------------------END------------------------------------

//---------------------LEXICAL SCOPING------------------------------

// function receipeMaker(){
//     let utensils = ['wisk','wok','pan'];
//     function printedUtensils(){
//         for(let i of utensils){
//             console.log(`We will need ${i}`)
//         }
//     }
//     printedUtensils();
// }
// receipeMaker();

//-----------------------END---------------------------------------

// const add = function (x,y) {
//     return x+y;
// }

// let result = add(2,3);
// console.log(result)

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDice(){
//     let roll = Math.floor(Math.random()*6) + 1;
//     console.log(roll)
// }

// callTwice(rollDice);

// function mysterFunc(){
//     let rand = Math.random();
//     if(rand>0.5){
//         return function(){
//             console.log("Congrats");
//         }
//     }
//     else {
//         return function(){
//             console.log("Oops");
//         }
//     }
// }

// let mystery = mysterFunc();
// mystery();

// function makeBetweenFunc(min,max){
//     return function(num){
//         return num>=min && num<=max;
//     }
// }

// let testRange = makeBetweenFunc(40,60);
// console.log(test(55));

//-------------------------------METHODS------------------------
// const myMath = {
//     pi: 3.14,
//     square: function(num){
//         return num*num;
//     },
//     addition: function(num1,num2){
//         return num1+num2;
//     }
// }

// console.log(myMath.square(4))

// const shortMath = {
//     pi:3.14,
//     add(num1,num2){
//         return num1+num2;
//     }
// }

// console.log(shortMath.add(1,2))

// const dog = {
//     name: "doggy",
//     breed: "Golden Retriever",
//     fullname(){
//         return `The name of this dog is: ${this.name}`
//     }
// }

// let nameOfTheDog = dog.fullname();
// console.log(nameOfTheDog)
//--------------------------END-------------------------------

//------------------------TRY/CATCH----------------------------

function justTesting(msg){
    try{
        console.log(msg.toUpperCase());
    }
    catch(e){
        console.log('we are in catch block')
        console.log(e)
    }
}

justTesting(234);