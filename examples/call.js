// The call() function invokes a provided function on arguments separated by comma.
import { call, repeat, add } from '../index.js';

const res = call(add, 1, 2);
console.log(res);

console.log(call(repeat, 'x')(5));

call(console.log, [1, 2, 3]);
