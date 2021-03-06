/*
  The contains() function returns true if the specified value is in the list.
  First, we use the pluck()
  function to form a list from the name property. Then we check
  if 'John' is in the list with contains().
*/

import { users, pluck, contains } from '../index.js';

const listHas = (list, field) => name => contains(name, pluck(field, list));

const hasJohn = listHas(users, 'name')('John');

if (hasJohn) console.log('Users list contains John');
