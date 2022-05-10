// concat() merge two or more arrays
[1, 2].concat([3], [4], [5], 6, 7, 8, 9, 0); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var anotherArray = [1, true, {}, () => { }];
[].concat(...anotherArray); // returns [1, true, {…}, ƒ]


// every() tests if all elements in the array pass the test
[1, 30, 40].every(el => el > 0) // true





// copyWithin() copies part of array to another location
[1, 2, 3, 4, 5].copyWithin(0, 2) // [ 3, 4, 5, 4, 5 ];
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1) // [1, 2, 3, 3, 4]


// entries() Array Iterator with key/value pairs for each index
['a', 'b', 'c'].entries()