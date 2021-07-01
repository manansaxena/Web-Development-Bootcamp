// JSON

// const data = `{
//     "glossary": {
//         "title": "example glossary",
// 		"GlossDiv": {
//             "title": "S",
// 			"GlossList": {
//                 "GlossEntry": {
//                     "ID": "SGML",
// 					"SortAs": "SGML",
// 					"GlossTerm": "Standard Generalized Markup Language",
// 					"Acronym": "SGML",
// 					"Abbrev": "ISO 8879:1986",
// 					"GlossDef": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
// 						"GlossSeeAlso": ["GML", "XML"]
//                     },
// 					"GlossSee": "markup"
//                 }
//             }
//         }
//     }
// }`

// const parsedData = JSON.parse(data);
// console.log(parsedData);
// console.log(parsedData.glossary.title);

// const jsData = {'temp':'repo',joker:12345,zop:undefined};
// const JSData = JSON.stringify(jsData)
// console.log(JSData)


//-----------------XMLHttpRequest------------------
// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("we got the request successfully")
//     const data = JSON.parse(this.responseText)
//     console.log(data.ticker.price   )
// }

// req.onerror = function(){
//     console.log('we ran into an error')
//     console.log(this)
// }

// req.open('get','https://api.cryptonator.com/api/ticker/btc-usd')
// req.send()

//--------------FetchAPI---------------------------
// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
// .then((res)=>{
//     console.log("Response",res)
//     return res.json()
// })
// .then((data)=>{
//     console.log('data parsed',data.ticker.price)
// })
// .catch((e)=>{
//     console.log("Rejected",e)
// })

// async function fetchBTPrice(){
//     try{
//         const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
//         const data = await res.json()
//         console.log('data is: ',data.ticker.price);
//     }
//     catch(err){
//         console.log(error)
//     }
    
// }
// fetchBTPrice()

//-------------------Axios----------------------------
// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then((res)=>{
//         console.log(res.data.ticker)
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// async function getBTPrice(){
//     try{
//         const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//         console.log(res.data.ticker)
//     }catch(err){
//         console.log(err)
//     }
// }


// const dadButton = document.querySelector('#dadJoke');
// const div = document.querySelector('div')
// dadButton.addEventListener('click',function(evt){
//     populateJoke()
// })

// async function populateJoke(){
//     const data = await getDadJoke();
//     let heading = document.createElement('h4');
//     heading.innerText = data.joke;
//     div.append(heading);
// }
// async function getDadJoke(){
//     const config = {"headers":{"Accept":"application/json"}}
//     const res = await axios.get('https://icanhazdadjoke.com/',config)
//     return res.data;

// }


//--------------------TV API---------------------------

const tvForm = document.querySelector('#tvForm')
const showList = document.querySelector('#showList')

tvForm.addEventListener('change',function(){
    let showName = this.elements.enterShow.value;
    populateShow(showName)
    this.elements.enterShow.value = ''
    showList.innerHTML = ''
})


async function populateShow(showName){
    const data = await getTvShow(showName);
    for(let i of data){
        let imgAdd = document.createElement('img');
        imgAdd.src = i;
        showList.append(imgAdd);
    }
}

async function getTvShow(showName){
    try {
        const config = {params: {q:showName}}
        const res = await axios.get(`http://api.tvmaze.com/search/shows`,config)
        const showArray = [];
        for(let result of res.data){
            if(result.show.image){
                showArray.push(result.show.image.medium)
            }
        }
        return showArray
    }catch(err){
        alert(`show name: ${showName} not found`)
        console.log(err)
    }
    
}