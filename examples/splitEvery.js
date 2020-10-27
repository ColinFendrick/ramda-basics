/*
With splitEvery() function,
we can split a list into chunks of specified length.
*/

import { splitEvery } from '../index.js';

const nums = [1, 2, 3, 4, 5, 6];

console.log(`
  every two: ${splitEvery(2, nums)}
  every three: ${splitEvery(3, nums)}
`);
