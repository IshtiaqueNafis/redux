const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
console.log(index)
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
//  [ 1, 4, 2, 3 ] // 4 is added in between
// Removing
const removed = numbers.filter(n => n !== 2);
console.log(removed) // [ 1, 3 ] removed.
// Updating
const updated = numbers.map(n => (n === 2 ? 20 : n));
//[ 1, 20, 3 ] updated only 2 and leave the rest behind.
console.log(updated);
