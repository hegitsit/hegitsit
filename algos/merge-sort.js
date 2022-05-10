/*
What is merge sort?

Merge sort splits array into halves and linear merging them back together.
time complexity is O(n*Log n)

  YOU ALWAYS NEED A HELPER FUNCTION!!!!!
  DONT FORGET TO CALL MERGESORT ON THE ARRAYS BEFORE MERGING THEM
*/

// Input: let arr = [10, 20, 1, 3, 5, 113, 13, 54, 6, 90]

function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return mergeHelper(left, right);
}

function mergeHelper(arr1, arr2) {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      sorted.push(arr2[0])
      arr2.shift()
    } else {
      sorted.push(arr1[0])
      arr1.shift()
    }
  }

  while (arr1.length) {
    sorted.push(arr1[0]);
    arr1.shift()
  }

  while (arr2.length) {
    sorted.push(arr2[0])
    arr2.shift();
  }

  return sorted;
}

let arr = [10, 20, 1, 3, 5, 113, 13, 54, 6, 90];

console.log(mergeSort(arr)) // Output [1, 3, 5, 6, 10, 13, 20, 54, 90, 113]