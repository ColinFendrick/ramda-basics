/*
The reduce() function aggregates list values into a single value.
It applies a function against an accumulator and each element in the list(from left to right)
to reduce it to a single value.
*/

import { reduce, splitEvery } from '../index.js';

const nums = [2, 3, 4, 5, 6, 7];

let sum = reduce((x, y) => x + y, 0, nums);
console.log(sum);

let product = reduce((x, y) => x * y, 1, nums);
console.log(product);

// 2*3 + 4*5 + 6*7 = 68
let ret = reduce((acc, x) => acc + x[0] * x[1], 0, splitEvery(2, nums));
console.log(ret);
