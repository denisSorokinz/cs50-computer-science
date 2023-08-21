/*
issue: to sort an array selectively (i.e. by selecting the smallest element & putting him into the right position)
solution: iteratively, find the smallest element & put it into the right position
complexity: n^2
implementation:

recursiveSelectionSort(arr, leftPointer = 0):
  if(leftPointer === arr.length-1) return arr

  let currentMinInd = leftPointer;

  loop(i from leftPointer to arr.length-1)
    if(arr[i] < arr[currentMinInd]) {
      currentMinInd = i
    }

  arr = swap(arr, leftPointer, currentMinInd)
  leftPointer++
  recursiveSelectionSort(arr, leftPointer)
*/

const swapArrayItems = (arr, leftPointer, rightPointer) => {
  const newArr = [...arr];

  const temp = newArr[leftPointer];
  newArr[leftPointer] = newArr[rightPointer];
  newArr[rightPointer] = temp;

  return newArr;
};

const recursiveSelectionSort = (arr, leftPointer = 0) => {
  if (leftPointer >= arr.length - 1) return arr;

  let currentMinInd = leftPointer;

  for (let i = leftPointer; i < arr.length; i++) {
    if (arr[i] < arr[currentMinInd]) currentMinInd = i;
  }

  if (leftPointer !== currentMinInd) arr = swapArrayItems(arr, leftPointer, currentMinInd);

  leftPointer++;

  return recursiveSelectionSort(arr, leftPointer);
};

// const arr = [4, 3, 7, 8, 9, 1, 10, 5];
const arr = [...new Array(10)].map((item) => Math.round(Math.random() * 10));

console.log(arr, recursiveSelectionSort(arr));

// 4 3 7 8 9 1 10 5
// 1 3 4 5 7 8 9 10
