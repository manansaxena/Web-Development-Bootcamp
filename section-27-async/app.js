//-----------------call stack----------------

// function multiply(x,y){
//     return x*y;
// }
// function square(x){
//     return multiply(x,x);
// }
// function isRightTriangle(a,b,c){
//     return square(a)+square(b)===square(c);
// }

// isRightTriangle(1,2,3)

//-------------callback and single threaded--------------
// console.log('retrieving data from the server')
// setTimeout(function(){
//     console.log('Data loaded')
// },3000);
// console.log('file read')

// This is a little unpotimized. We can nest these to improve
// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
// },1000)
// setTimeout(()=>{
//     document.body.style.backgroundColor = 'orange';
// },2000)
// setTimeout(()=>{
//     document.body.style.backgroundColor = 'blue';
// },3000)

// we can still make it better by writing a separate function
// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'green';
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'orange';
//         },1000)
//     },1000)
// },1000)

// function delayColorChange(color,delay,doNext){
//     setTimeout(()=>{
//             document.body.style.backgroundColor = color;
//             doNext && doNext();
//         },delay)
// }

// delayColorChange('red',1000,
//     ()=>{
//         delayColorChange('orange',1000,
//             ()=>{
//                 delayColorChange('green',1000,()=>{

//                 })
//             }
//         )
//     }
// )

// And the above keeps going on which leads us to callback hell. What's worse we sometime might need to run different callbacks

// searchMoviesAPI('green mile',()=>{
//     // If API works
//     saveToDB(movies,()=>{
//         // if added
//     },()=>{
//         // if failed
//     })
// },()=>{
//     // if API is down
// })

//-------------Promises--------------------
// function fakeRequestCallback(url, success, failure) {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(function () {
//     if (delay > 4000) {
//       failure("Conection Timeout");
//     } else {
//       success(`Here is your data ${url}`);
//     }
//   }, delay);
// }

// fakeRequestCallback(
//   "books.com/page1",
//   function (str) {
//     console.log(str);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (str) {
//         console.log(str);
//       },
//       function (str) {
//         console.log(str);
//       }
//     );
//   },
//   function (str) {
//     console.log(str);
//   }
// );

// function fakeRequestPromise(url) {
//   return new Promise(function (resolve, reject) {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(function () {
//       if (delay > 4000) {
//         reject("Conection Timeout");
//       } else {
//         resolve(`Here is your data ${url}`);
//       }
//     }, delay);
//   });
// }

// fakeRequestPromise('books.com/page1')
// .then(function(){
//     console.log('it worked page 1')
//     fakeRequestPromise('books.com/page2')
//     .then(function(){
//         console.log('it worked page 2')
//     })
//     .catch(function(){
//         console.log('error page 2')
//     })
// })
// .catch(function(){
//     console.log('error page 1');
// })

// this makes promise better than callbacks. we can return our nested callback and attach then at the same levels of the parent.

// fakeRequestPromise('books.com/page1')
// .then((data)=>{
//   console.log('successful page 1');
//   console.group(data)
//   return fakeRequestPromise('books.com/page2');
// })
// .then((data)=>{
//   console.log('successful page 2');
//   console.group(data)
//   return fakeRequestPromise('books.com/page3')
// })
// .then((data)=>{
//   console.log('successful page 3');
//   console.group(data)
// })
// .catch((err)=> {
//   console.log('error occured');
//   console.log(err)
// })

//---------------creating new promise--------------------

const fakeRequest = (url) => {
  return new Promise((resolve,reject)=>{
    let rand = Math.random();
    setTimeout(()=>{
      if(rand<0.7){
        resolve("Your fake data");
      }
      else{
        reject("Rejected")
      }
    },1000)
  })
};

// fakeRequest('bing.com/blah')
// .then((data)=>{
//   console.log(data,'success');
// })
// .catch((error)=>{
//   console.log(error,"Error")
// })

// const colorChange = (color,delay) => {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       document.body.style.backgroundColor = color;
//       resolve();
//     },delay)
//   })
// }

// colorChange('blue',1000)
// .then(()=>{
//   return colorChange('red',1000);
// })
// .then(()=>{
//   return colorChange('green',1000);
// })

//----------------------async function-----------------

// async function hello(){
//   return 'hello world';
// }
// console.log(hello())

// const sing = async ()=>{
//   throw new Error('Failed')
//   return 'broken dreams'
// }
// sing()
// .then((data)=>{
//   console.log('promise successful with song: ',data)
// })
// .catch((err)=>{
//   console.log('rejection',err)
// })

// const login = async (username,password) => {
//   if(!username || !password) throw Error('missing cred')
//   if(password==="kill") return 'logged in'
//   throw Error('wrong password');
// }

// login('namo','kill').then(data=>{
//   console.log(data);
// }).catch(error=>{
//   console.log(error)
// })

// async function rainbow(){
//   await colorChange('red',1000)
//   await colorChange('blue',1000)
//   await colorChange('green',1000)
//   return "all done"
// }

// async function printRainbow(){
//   await rainbow();
//   console.log("done")
// }

async function makeTwoRequests(){
  try {
    let data1 = await fakeRequest('page1')
    let data2 = await fakeRequest('page2')
    console.log('blah',data1,data2)
  } catch (error) {
    console.log(error)
  } 
}