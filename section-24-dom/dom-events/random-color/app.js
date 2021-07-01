const btn = document.querySelector('button');
const heading = document.querySelector('h1'); 

btn.addEventListener('click', function(){
    const rgb_val = [];
    for(let i=0;i<3;i++){
        let num = Math.floor(Math.random()*255);
        rgb_val.push(num);
    }
    document.body.style.backgroundColor = `rgb(${rgb_val[0]},${rgb_val[1]},${rgb_val[2]})`;
    heading.innerText = `The color is : rgb(${rgb_val[0]},${rgb_val[1]},${rgb_val[2]})`;
    heading.style.color = `rgb(${155-rgb_val[0]},${155-rgb_val[1]},${155-rgb_val[2]})`;
    rgb_val.splice(0,rgb_val.length)
});
