function sing(){
    console.log('Hey Jude');
    console.log("Don't be mad");
}

function greet(firstName,lastName){
    console.log(`Hi! ${firstName} ${lastName}`);
}

function repeat(message,numTimes){
    let resultStr = '';
    for(let i=0;i<numTimes;i++){
        resultStr += message;
    }
    console.log(resultStr)
}

function add(num1,num2){
    if(typeof(num1)!=='number' || typeof(num2)!=='number'){
        return false;
    }
    return num1+num2;
}



sing()
greet('Ayden','Frost')
repeat('Slut',5)
let sum = add(2,3)
console.log(sum)