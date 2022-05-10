/*
  What is a binary search?
    split the array in half until check

    takes an array and a target
    returns true if the target is in the array or false
    !!REQUIRES A SORTED ARRAY!!
    time complexity is O(Log n)
*/

function binarySearch(array, target) {

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) return true;

    if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

let arr = [1, 3, 4, 5, 6, 10, 13, 20, 54, 90];
let arr2 = [1, 3, 5, 6, 10, 13, 20, 54, 90, 11];

console.log(binarySearch(arr, 4)) // true
console.log(binarySearch(arr2, 30)) // false