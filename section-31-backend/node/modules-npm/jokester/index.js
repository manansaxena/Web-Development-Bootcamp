const jokes = require('give-me-a-joke');
console.dir(jokes)
const colors = require('colors')

jokes.getRandomDadJoke(function(joke){
    console.log(joke.green)
})

// console.log(colors.green('this is green'))