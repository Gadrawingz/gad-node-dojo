// Consuming lodash
let _ = require('lodash')

console.log(_.isNumber(50)); // true
console.log(_.isArray("30")) // false
console.log(_.isEmpty("")) // true

// CONSUMING IT:
const numRange = _.range(1, 9);
console.log(numRange)
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]

const chunks = _.chunk(numRange, 3);
console.log(chunks)
// => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const right = _.takeRight(numRange, 2);
console.log(right)
// => [7, 8, 9]