/*
  Filter() and the companion reject() make a new list by including/excluding
  all elemenets of the list which match the criteria.
  Partition() separates the list into two separate objects, the first which satisfies it,
  the second which does not.
*/

import { users, filter, reject, partition } from '../index.js';

const isOver = target => ({ age }) => age >= target;

console.log('Old users:', filter(isOver(70), users));
console.log('Young users:', reject(isOver(70), users));

const [old, young] = partition(isOver(70), users);
console.log('Paritions:', 'old:', old, 'young:', young);
