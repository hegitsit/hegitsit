/*
What is insertion sort?

time complexity is O(n^2)

*/

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
}

console.log(insertionSort([-10, 1, 3, 8, -13, -50, 32, 9, 5])); // [-50, -13, -10, 1, 3, 5, 8, 9, 32]