// The where() function allows to create complex queries on objects.
import moment from 'moment';

import { members, where, equals, filter, startsWith } from '../index.js';

const getAge = dt =>
	moment.duration(moment() - moment(dt, 'YYYY-MM-DD', true)).years();

const res1 = filter(where({ city: equals('Bratislava') }))(members);
console.log('City equals Bratislava:', res1);

const res2 = filter(where({
	city: equals('Bratislava'),
	name: startsWith('A')
}))(members);

console.log('City equals Bratislava, name starts with "A":', res2);

const res3 = filter(where({
	born: dt => getAge(dt) > 40
}))(members);

console.log('Over 40:', res3);

const res4 = filter(where({
	born: dt => getAge(dt) < 50,
	city: equals('Bratislava'),
	name: startsWith('A')
}))(members);

console.log('Just Anna', res4);
