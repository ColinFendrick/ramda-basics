import { sort, reverse, comparator, lt, gt } from '../index.js';

const nums = [3, 1, 4, 2, 8, 5, 6];

// sort ascending
// console.log(`sort asending: ${sort((x, y) => x - y, nums)}`);
console.log(`sort ascending: ${sort(comparator(lt), nums)}`);

// sort descending
// console.log(`sort descending: ${sort((x, y) => y - x, nums)}`);
console.log(`sort descending ${sort(comparator(gt), nums)}`);

console.log('reversing:');

// reversing
console.log(`reversing nums: ${reverse(nums)}`);
console.log(`reversing "forest": ${reverse('forest')}`);
