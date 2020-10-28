/*
The groupBy() function splits a list into sub-lists stored in an object,
based on the result of calling a String-returning
function on each element, and grouping the results according to values returned.
*/
import { students, groupBy } from '../index.js';

const groupByGrade = groupBy(({ score }) =>
	score < 65 ? 'F' :
		score < 70 ? 'D' :
			score < 80 ? 'C' :
				score < 90 ? 'B' : 'A'
);

const grouped = groupByGrade(students);

console.log('Student(s) having A grade:');
console.log(grouped['A']);

console.log('Student(s) having B grade:');
console.log(grouped['B']);

console.log('Student(s) having C grade:');
console.log(grouped['D']);

console.log('Student(s) having D grade:');
console.log(grouped['D']);

console.log('Student(s) having F grade:');
console.log(grouped['F']);
