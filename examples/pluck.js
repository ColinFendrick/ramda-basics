/*
  The pluck() function returns a new list
  by plucking the specified property
  off all objects in the list supplied.
*/
import { pluck, users } from '../index.js';

console.log(`
  plucing ages: ${pluck('age', users)}
  plucking names: ${pluck('name', users)}
`);

// In the following example we will work with the formed list
const maxAge = Math.max(...pluck('age', users));
console.log(`The oldest person is ${maxAge} years old.`);
