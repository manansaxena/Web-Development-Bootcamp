const fitBitData = {
    totalSteps : 30800,
    caloriesBurnt : 1200,
    healthy: 'Good Work Out',
    tags: ['Excellent','Hard Workers','Committed']
};

console.log(fitBitData)
console.log(fitBitData["healthy"])
console.log(fitBitData.tags)

let whatToKnow = "totalSteps";
console.log(`This is not possible with the . access but possible with [] ${fitBitData[whatToKnow]}`)

fitBitData.caloriesBurnt = 1300;
console.log(fitBitData)

fitBitData.timeSpent = "11hrs";
console.log(fitBitData)

console.clear()

const comments = [
    {
        name: "tammy",
        text: "lololo",
        upVotes: 9
    },
    {
        name: "Sinbad",
        text: "the sailor",
        upVotes: 8
    }
];

console.log(comments[0].name)
comments.push({name:"Zimba",text:"chomp",upVotes:9})
console.log(comments)