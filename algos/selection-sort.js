/*
What is selection sort?


time complexity is O(n^2) space is 0(1)

*/

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let currentMin = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[currentMin]) {
        currentMin = j;
      }
    }
    if (currentMin !== i) {
      [array[i], array[currentMin]] = [array[currentMin], array[i]]
    }
  }
  return array;
}

console.log(selectionSort([-10, 1, 3, 8, -13, -50, 32, 9, 1000, 5])); // [-50, -13, -10, 1, 3, 5, 8, 9, 32]
