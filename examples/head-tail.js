/*
The head() returns the first element of the given list or string.
The tail() returns all but the first element of the given list or string.
The init() returns all but the last element of the given list or string.
The last() returns the last element of the given list or string.
*/

import { head, tail, init, last } from '../index.js';

const nums = [2, 4, 6, 8, 10];

console.log(`
  base: ${nums}
  head: ${head(nums)}
  tail: ${tail(nums)}
  init: ${init(nums)}
  last: ${last(nums)}
`);
