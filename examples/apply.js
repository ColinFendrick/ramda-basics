import { apply } from '../index.js';

let nums = [3, 5, 7, 8, 2, 1];

let res = apply(Math.min, nums);
console.log(res);

let res2 = apply(Math.max, nums);
console.log(res2);
