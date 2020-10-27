const R = require('ramda');

const { add, subtract } = R;

console.log(add(2, 5));
console.log(subtract(2, 5));

let res = add(add(2, 5), subtract(2, 10));
console.log(res);
