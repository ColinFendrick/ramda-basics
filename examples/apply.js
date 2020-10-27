import { apply } from '../index.js';

const nums = [3, 5, 7, 8, 2, 1];

const res = apply(Math.min, nums);
console.log(res);

const res2 = apply(Math.max, nums);
console.log(res2);
