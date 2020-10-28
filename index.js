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

export const {
	add,
	apply,
	call,
	contains,
	comparator,
	flip,
	gt,
	head,
	init,
	last,
	lt,
	map,
	prop,
	pluck,
	repeat,
	reverse,
	splitEvery,
	sort,
	sortBy,
	subtract,
	tail
} = R;
