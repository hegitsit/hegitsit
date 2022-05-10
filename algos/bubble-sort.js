/*
What is bubble sort?

Bubble sort bubbles the current largest number to the top/end of the list
Time complexity is O(n^2)
*/

// Input: let arr = [10, 20, 1, 3, 5, 113, 13, 54, 6, 90]

// ASCENDING
function bubbleSortASC(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {  // Only change is '<'
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array; // Output: let arr = [1, 3, 5, 6, 10, 13, 20, 54, 90, 113]
}

//DESCENDING
function bubbleSortDSC(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array; // Output: let arr = [113, 90, 54, 20, 13, 10, 6, 5, 3, 1]
}