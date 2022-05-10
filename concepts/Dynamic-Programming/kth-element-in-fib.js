// find the kth element in Fibonacci sequence
//


/*
Create an array storing the answers at each index. Start with [1, 1],
representing that the first answers are 1, 1. Iterate from 2 to k,
adding the sum of the two previous locations.
*/

function fib(k) {
  let array = [1, 1];

  for (let i = 1; i < k; i++) {
    array.push(array[i] + array[i - 1]);
  }
  return array[array.length - 1];
}





