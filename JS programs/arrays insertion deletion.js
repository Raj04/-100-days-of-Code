

//push,shift,unshift,pop
var array=[1,2,3,4,5];
// array.push(6);
// console.log(array); -->[ 1, 2, 3, 4, 5, 6 ]

// console.log(array.shift());// returns the elements which shifted towards left side
// console.log(array);

console.log(array.unshift(1));// the push() method, only it works at the beginning of the array. returns the new length.
console.log(array);
console.log(array.indexOf(5));//returns -1 if not found else returns an index

