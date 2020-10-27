import { add, subtract } from '../index.js';

console.log(add(2, 5));
console.log(subtract(2, 5));

const res = add(add(2, 5), subtract(2, 10));
console.log(res);
