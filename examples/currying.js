//Currying is the process of transforming a function that expects
// multiple parameters into another function that,
// when supplied fewer parameters, returns a new function that
// awaits the remaining ones.
import { add, map } from '../index.js';

const addOneToAll = map(add(1));
const res = addOneToAll([1, 2, 3]);

console.log(res);
