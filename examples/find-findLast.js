/*
  The find() function returns the first element of the list
  which matches the predicate, or undefined if there is no match.
  The findLast() function returns the last element of the list
  which matches the predicate, or undefined if no element matches.
*/

import { find, findLast } from '../index.js';

const isPositive = x => x > 0;

const values = [-1, 0, -4, 5, 6, -1, 9, -2];

const val = find(isPositive, values);
const val2 = findLast(isPositive, values);
console.log(`
  values: ${values}
  firstPositive: ${val}
  lastPositive: ${val2}
`);
