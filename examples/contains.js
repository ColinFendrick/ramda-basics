/*
  The contains() function returns true if the specified value is in the list.
  First, we use the pluck()
  function to form a list from the name property. Then we check
  if 'John' is in the list with contains().
*/

import { pluck, contains } from '../index.js';

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

const listHas = (list, field) => name => contains(name, pluck(field, list));

const hasJohn = listHas(users, 'name')('John');

if (hasJohn) console.log('Users list contains John');
