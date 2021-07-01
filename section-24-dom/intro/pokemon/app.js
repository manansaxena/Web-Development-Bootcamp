const contain = document.querySelector('.container')

let baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(let i=1;i<100;i++){
    const newDiv = document.createElement('div')
    const newSpan = document.createElement('span')
    const newPokemon = document.createElement('img');
    newPokemon.src = `${baseUrl}${i}.png`;
    newSpan.innerText = i
    newDiv.classList.add('pokemon')
    newDiv.append(newPokemon,newSpan)
    contain.append(newDiv)
}

