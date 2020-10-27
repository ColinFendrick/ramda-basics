// The flip() function returns a new function from the supplied one where its arguments are reversed.
import { subtract, flip } from '../index.js';

const val = subtract(2, 10);
console.log(val);

const val2 = flip(subtract)(2, 10);
console.log(val2);
