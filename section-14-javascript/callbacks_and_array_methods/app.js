//-----------------------------FOR EACH-----------------------------------------

// let friendsCharacters = ['Chandler','Monica','Ross','Rachel','Joey','Phoebe'];
// let friendsCharacters = [
//     {
//         fullName: 'Chandler',
//         gender: 'Male'
//     },
//     {
//         fullName: 'Ross',
//         gender: 'Male'
//     },
//     {
//         fullName: 'Joey',
//         gender: 'Male'
//     },
//     {
//         fullName: 'Monica',
//         gender: 'Female'
//     },
//     {
//         fullName: 'Rachel',
//         gender: 'Female'
//     },
//     {
//         fullName: 'Phoebe',
//         gender: 'Female'
//     },
// ];


// friendsCharacters.forEach(
//     function(character){
//         if(character.gender==='Female'){
//             console.log(`Part of doing "it": ${character.fullName}`)
//         }
//     }
// );

// console.clear();

//--------------------------------------MAP-----------------------------------

const friendsCharacters = [
    {
        fullName: 'Chandler',
        gender: 'Male',
        age: 32
    },
    {
        fullName: 'Ross',
        gender: 'Male',
        age: 32
    },
    {
        fullName: 'Joey',
        gender: 'Male',
        age: 30
    },
    {
        fullName: 'Monica',
        gender: 'Female',
        age: 29
    },
    {
        fullName: 'Rachel',
        gender: 'Female',
        age: 29
    },
    {
        fullName: 'Phoebe',
        gender: 'Female',
        age: 31
    },
];

const friendsRespectName = friendsCharacters.map(
    function(character){
        if(character.gender==='Male'){
            return ('Mr. '+character.fullName)
        }
        else {
            return ('Mrs. '+character.fullName)
        }
    }
);

console.log(friendsRespectName)
console.clear()

//------------------------------------ARROW FUNCTIONS-------------------------

const square = (x)=>{
    return x**2;
}
console.log(square(21))

const rollDie = ()=>{       // When we have no argument to the function
    return Math.floor(Math.random()*6)+1
}
console.log(rollDie())

const add = (x,y)=>(x+y) // Implicit arrow function
console.log(add(4,5))

const friendsRespectNameCaps = friendsRespectName.map(
    character=>character.toUpperCase()
)

console.log(friendsRespectNameCaps)
console.clear()

//----------------------setTimeOut and setInterval------------------------

// console.log('Hello')
// setTimeout(()=>console.log('Are you still here'),3000);
// console.log('GoodBye')

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// clearInterval(id);

console.clear()

//---------------------FILTER----------------------------------------------

const youngCast = friendsCharacters
                                    .filter((character)=>character.age>30)
                                    .map(character=>character.fullName)

console.log(youngCast)

//----------------------------EVERY AND SOME-------------------------------
const areTheyLegal = friendsCharacters.every(character=>character.age>18)
console.log(areTheyLegal)

const fuzzyLegal = friendsCharacters.some(character=>character.age>31);
console.log(fuzzyLegal)

//---------------------------REDUCE-------------------------------------

const youngestCharacter = friendsCharacters.reduce((youngest,character)=>{
    if(youngest.age>character.age){
        return character
    }
    return youngest
})

console.log(youngestCharacter)