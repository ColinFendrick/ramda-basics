import R from 'ramda';

export const users = [
	{ name: 'John', age: 25 },
	{ name: 'Lenny', age: 51 },
	{ name: 'Andrew', age: 43 },
	{ name: 'Peter', age: 81 },
	{ name: 'Anna', age: 43 },
	{ name: 'Albert', age: 76 },
	{ name: 'Adam', age: 47 },
	{ name: 'Robert', age: 72 }
];

export const members = [
	{ name: 'John', city: 'London', born: '2001-04-01' },
	{ name: 'Lenny', city: 'New York', born: '1997-12-11' },
	{ name: 'Andrew', city: 'Boston', born: '1987-02-22' },
	{ name: 'Peter', city: 'Prague', born: '1936-03-24' },
	{ name: 'Anna', city: 'Bratislava', born: '1973-11-18' },
	{ name: 'Albert', city: 'Bratislava', born: '1940-12-11' },
	{ name: 'Adam', city: 'Trnava', born: '1983-12-01' },
	{ name: 'Robert', city: 'Bratislava', born: '1935-05-15' },
	{ name: 'Robert', city: 'Prague', born: '1998-03-14' }
];

export const students = [
	{ name: 'Adam', score: 84 },
	{ name: 'Eddy', score: 58 },
	{ name: 'Peter', score: 69 },
	{ name: 'Roman', score: 93 },
	{ name: 'Jane', score: 56 },
	{ name: 'Lucy', score: 76 },
	{ name: 'Jack', score: 88 }
];

export const {
	add,
	apply,
	call,
	comparator,
	contains,
	equals,
	filter,
	find,
	findLast,
	flip,
	groupBy,
	gt,
	head,
	init,
	last,
	lt,
	map,
	partition,
	pluck,
	prop,
	reduce,
	reject,
	repeat,
	reverse,
	sort,
	sortBy,
	splitEvery,
	startsWith,
	subtract,
	tail,
	where
} = R;
