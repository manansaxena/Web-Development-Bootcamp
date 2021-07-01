
// ------------------------------- FIRST DIVE -------------------------------
// document.all[11].innerText = 'Hello' 

// --------------------------------getElementById()--------------------------

// console.log(document.getElementById('chicken')) // no such id

// const banner = document.getElementById('banner')
// console.log(banner)
// console.dir(banner)

// const toc = document.getElementById('toc')
// console.log(toc)
// console.dir(toc)

// --------------------------------getElementsByTagName()--------------------------

// const allImages = document.getElementsByTagName('img')

// for(let image of allImages){
//     console.log(image)
//     // image.src = 'https://www.cheatsheet.com/wp-content/uploads/2019/07/Scarlett-Johansson-1024x683.jpg'
// }

// --------------------------------getElementsByClassName()--------------------------

// const squareImages = document.getElementsByClassName('square')
// console.log(squareImages)

// for(let image of squareImages){
//     image.src = 'https://www.cheatsheet.com/wp-content/uploads/2019/07/Scarlett-Johansson-1024x683.jpg'
// }

// --------------------------------querySelector()--------------------------

// const banner = document.querySelector('#banner')
// banner.src = 'https://www.cheatsheet.com/wp-content/uploads/2019/07/Scarlett-Johansson-1024x683.jpg'

// const para = document.querySelector('p')
// console.log(para)

// const squareImages = document.querySelector('.square')
// squareImages.src = 'https://i.pinimg.com/originals/93/c0/33/93c03342e36311afc54725d56de79b43.jpg'

// const thirdImage = document.querySelector('img:nth-of-type(3)')
// thirdImage.src = 'http://www.laughspark.info/thumbfiles/705X705/gemma-arterton-hot-photo-635704620242497293-13258.jpg'

// console.log(document.querySelector('a[title="Java"]'))

// --------------------------------querySelectorAll()--------------------------

// const allImages = document.querySelectorAll('img')
// allImages[3].src = 'https://i.redd.it/j9ongx3mwm541.jpg'

// const aUnderP = document.querySelectorAll('p a')
// aUnderP[0].href = 'https://sfwfun.com/wp-content/uploads/2018/06/Selena-Gomez-sexy-viral-instagram-photo.jpg'


// -----------------------------innerText, textContent and innerHTML---------------------

// const firstPara = document.querySelector('p')
// console.log(firstPara.innerText,firstPara.textContent)

// const allLinks = document.querySelectorAll('a')

// for(let link of allLinks){
//     link.innerText = 'I am a link'
//     link.href = 'https://www.cheatsheet.com/wp-content/uploads/2019/07/Scarlett-Johansson-1024x683.jpg'
// }

// const firstHeading = document.querySelector('h1')
// firstHeading.innerHTML = '<i>Scarlett</i>'
// firstHeading.innerHTML +='<sup><i>the best</i></sup>'

// -----------------------------Attributes------------------------------------------------
// let firstImage = document.querySelector('#banner')

// firstImage.id = 'whoops'

// firstImage = document.querySelector('#whoops')

// firstImage.id = 'banner'

// console.log(document.querySelector('a').href,)
// console.log(document.querySelector('a').getAttribute('href'))
// document.querySelector('a').setAttribute('href','https://www.google.com')
// document.querySelector('input[type="text"]').setAttribute('type','password')

//---------------------------Styles-----------------------------------------------------

// const h1 = document.querySelector('h1');
// console.log(h1.style);
// h1.style.color = 'blue';
// console.log(h1.style)

// const allLinks = document.querySelectorAll('a')

// for(let link of allLinks){
//     link.style.color = 'red';
//     link.style.textDecoration = 'underline dotted'
//     link.style.textDecorationColor = 'blue'
// }

// console.log(window.getComputedStyle(h1).fontSize)

// const h2 = document.querySelector('h2')
// console.log(h2.getAttribute('class'))
// console.log(h2.setAttribute('class','red'))
// let classes = h2.getAttribute('class')
// classes = `${classes} border`
// console.log(h2.setAttribute('class',classes))
// console.log(h2.getAttribute('class'))
// h2.classList.add('red','border')
// h2.classList.remove('red')
// console.log(h2.classList.contains('red'))
// h2.classList.toggle('red')

//-----------------------------Traversing----------------------------------
// const firstBold = document.querySelector('b');
// console.log(firstBold)
// console.log(`All the way to body: ${firstBold.parentElement.parentElement}`)
// console.log(firstBold.parentElement.childElementCount)
// console.log(firstBold.parentElement.children[0])

// const squareImg = document.querySelector('.square')
// console.log(squareImg)
// console.log(squareImg.nextSibling)
// console.log(squareImg.previousSibling)
// console.log(squareImg.nextElementSibling)
// console.log(squareImg.previousElementSibling)

//-------------------------Creating--------------------------------------
// const newImg = document.createElement('img')
// console.dir(newImg)

// newImg.src = 'https://www.cheatsheet.com/wp-content/uploads/2019/07/Scarlett-Johansson-1024x683.jpg'
// document.body.appendChild(newImg)
// newImg.classList.add('square')

// const newBold = document.createElement('b');
// const p = document.querySelector('p')
// newBold.append('Yeah she is')
// p.prepend(newBold)

// const newH2 = document.createElement('h2')
// newH2.innerText ='Scarlett is Hot 😍'
// const secondImage = document.querySelectorAll('.square')[2]
// secondImage.insertAdjacentElement('afterend',newH2)

//----------------------Removing-------------------------------

// const img = document.querySelectorAll('img')[0]
// img.parentElement.removeChild(img)

// const p = document.querySelector('p')
// p.remove()


