// const add = (x,y) => x+y;
// const square = (x) => x*x;
//-----------one way to add-----------------
// module.exports.add = add;
// module.exports.text = 'I added something';
// module.exports.square = square;

//---------we can create a dict and then pass it on
// math = {
//     add: add,
//     square: square,
//     text: 'I added something'
// };

// module.exports = math

//-------or we can directly add something--------
module.exports.text = 'I added something'
module.exports.add = (x,y) => x+y;
module.exports.square = (x) => x*x;