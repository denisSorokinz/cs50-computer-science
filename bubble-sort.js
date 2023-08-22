/*
issue: to sort an array with bubble sort recursively
solution:
  each iteration would loop through the entire array, and swap items one by one (by link).
  if no swaps were made during current iteration -> return arr
  else -> return recursive(arr)
*/

Array.prototype.swap = function (leftPointer, rightPointer) {
  const temp = this[leftPointer];

  this[leftPointer] = this[rightPointer];
  this[rightPointer] = temp;
};

const recursiveBubbleSort = (arr) => {
  let wasSwapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    const leftPointer = i;
    const rightPointer = i + 1;

    if (arr[leftPointer] > arr[rightPointer]) {
      arr.swap(leftPointer, rightPointer);
      wasSwapped = true;
    }
  }

  return !wasSwapped ? arr : recursiveBubbleSort(arr);
};

// const arr = [4, 3, 7, 8, 9, 1, 10, 5];
const arr = [...new Array(10)].map(() => Math.floor(Math.random() * 10))
console.log(arr, recursiveBubbleSort(arr));
