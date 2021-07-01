const chanceForm = document.querySelector('form');
const p1Button = document.querySelector('#button-p1');
const p2Button = document.querySelector('#button-p2');
const resetButton = document.querySelector('#reset');
const p1display = document.querySelector('#display-p1');
const p2display = document.querySelector('#display-p2');

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOver = false;


p1Button.addEventListener('click',function(){
    if(!isGameOver){
        p1Score+=1;
        if(p1Score===winningScore){
            isGameOver = true;
            p1Button.classList.add('disabled')
            p2Button.classList.add('disabled')
            p1display.style.color = 'green';
            p2display.style.color = 'red';
        }
        p1display.innerText = `${p1Score}`;
    }  
})

p2Button.addEventListener('click',function(){
    if(!isGameOver){
        p2Score+=1;
        if(p2Score===winningScore){
            isGameOver = true;
            p1Button.classList.add('disabled')
            p2Button.classList.add('disabled')
            p2display.style.color = 'green';
            p1display.style.color = 'red';
        }
        p2display.innerText = `${p2Score}`;
    }  
})

resetButton.addEventListener('click',reset)

chanceForm.addEventListener('change',function(evt){
    evt.preventDefault();
    winningScore = parseInt(this.elements.chances.value);
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1display.innerText = '0';
    p2display.innerText = '0';
    p1display.style.color = 'black';
    p2display.style.color = 'black';
    isGameOver = false;
    p1Button.classList.remove('disabled');
    p2Button.classList.remove('disabled');
}