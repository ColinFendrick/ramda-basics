/*
  The pluck() function returns a new list
  by plucking the specified property
  off all objects in the list supplied.
*/
import { pluck } from '../index.js';

const users = [
	{ name: 'John', age: 25 },
	{ name: 'Lenny', age: 51 },
	{ name: 'Andrew', age: 43 },
	{ name: 'Peter', age: 81 },
	{ name: 'Anna', age: 43 },
	{ name: 'Albert', age: 76 },
	{ name: 'Adam', age: 47 },
	{ name: 'Robert', age: 72 }
];

console.log(`
  plucing ages: ${pluck('age', users)}
  plucking names: ${pluck('name', users)}
`);
