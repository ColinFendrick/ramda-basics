import { users, sortBy, prop } from '../index.js';

console.log('\nSorted by age:');

const sortedByAge = sortBy(prop('age'), users);
console.log(sortedByAge);

console.log('\nSorted by name:');

const sortedByName = sortBy(prop('name'), users);
console.log(sortedByName);
