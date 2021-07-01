// -----------------event and eventlistener----------------------

// const buttonV2 = document.querySelector('#v2');

// buttonV2.onclick = function(){
//     document.body.style.backgroundColor = "Pink";
//     console.log('clicked')
// }

// buttonV2.onmouseenter = function(){
//     buttonV2.classList.add('bg-warning');
// }

// const buttonV3 = document.querySelector('#v3');

// buttonV3.addEventListener('click',function(){
//     document.querySelector('body').style.backgroundColor = "Purple";
//     document.querySelector('h1').classList.add("text-white");
// })

// const duoButton = document.querySelector('#duo');

// function changeColor(){
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     console.log("change color ran")
// }

// function bolderText(){
//     let buttons = document.querySelectorAll('button')
//     for(let btn of buttons){
//         btn.classList.add('btn-lg')
//     }
//     console.log("bolder button ran")
// }
// duoButton.addEventListener('click',changeColor,{once:true})
// duoButton.addEventListener('click',bolderText)


//------------------this and event---------------------------

const btn = document.querySelector('#once')
const column = document.querySelector('.col')
column.addEventListener('click',function(evt){
    if (evt.target.nodeName === 'BUTTON'){
        for(let i=0;i<51;i++){
            const newButton = document.createElement('button');
            newButton.classList.add('btn','btn-primary','m-4')
            newButton.innerText = 'Formed'
            column.append(newButton)
        }
        btn.classList.add('m-4')
    }
    
});

function makeRandomColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}

// const allButtons = document.querySelectorAll('button');

// for(let b of allButtons){
//     b.addEventListener('click',colorize)
// }

// const allH4s = document.querySelectorAll('h4');

// for(let h of allH4s){
//     h.addEventListener('click',colorize)
// }

// function colorize(){
//     this.style.backgroundColor = makeRandomColor();
//     this.style.color = makeRandomColor();
// }


//--------------------Event Object------------------------
// document.querySelector('button').addEventListener('click',function(evt){
//     console.log(evt)
// })

// const inp = document.querySelector('input');
// inp.addEventListener('keydown',function(evt){
//     document.body.style.backgroundColor = makeRandomColor();
//     console.log(evt.code)
//     console.log(evt.key)
// })

// inp.addEventListener('keyup',function(){
//     document.body.style.backgroundColor = makeRandomColor();
// })

// window.addEventListener('keydown',function(evt){
//     console.log(evt.code)
// })

//----------------------Form Events and delegation--------------------------

const tweetForm = document.querySelector('#tweetForm')
const tweets = document.querySelector('#tweets');

tweetForm.addEventListener('submit',function(evt){    
    console.log('Submitted!!');
    evt.preventDefault();
    addTweet(this.elements.username.value,this.elements.tweet.value);
    this.elements.username.value ='';
    this.elements.tweet.value = '';
})


function addTweet(username,tweet){
    //
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweets.append(newTweet)
}

tweets.addEventListener('click',function(evt){
    evt.target.nodeName==='LI' && evt.target.remove()
})

//----------------------Input Change Events-------------------
// const input = document.querySelector('input')
// const h1 = document.querySelector('h1');
// input.addEventListener('change',function(){
//         console.log(`changes`)
//     }
// )

// input.addEventListener('input',function(){
//     // console.log('changes')
//     h1.innerText = this.value;
// })

//----------------Event Bubbling-------------------------------

// const container = document.querySelector('#container')
// const changeColor = document.querySelector('#changeColor')

// container.addEventListener('click',function(){
//     container.classList.toggle('hide');
// })

// changeColor.addEventListener('click',function(evt){
//     container.style.backgroundColor = makeRandomColor();
//     evt.stopPropagation()
// })