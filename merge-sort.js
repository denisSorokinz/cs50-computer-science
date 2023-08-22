/*
issue: on each iteration, divide an array into two halves, sort them, then merge
recursiveSort(arr):
  if array.length===1 -> return array

  take left half
  take right half

  sortedLeftHalf = recursiveSort(leftHalf)
  sortedRightHalf = recursiveSort(rightHalf)

  merged = mergeTwoHalves(leftHalf, rightHalf)

  return merged

mergeTwoHalves(leftHalf, rightHalf):
  leftPointer = 0, rightPointer = 0
  merged = []

  in loop while (leftPointer <= leftHalf.length-1 && rightPointer <= rightHalf.length-1):
    if (
      leftHalf[leftPointer] !== undefined && rightHalf[rightPointer] === undefined ||
      leftHalf[leftPointer] <= rightHalf[rightPointer]
    ):
      merged.push(leftHalf[leftPointer])
      leftPointer++
    else if (
      leftHalf[leftPointer] === undefined && rightHalf[rightPointer] !== undefined ||
      leftHalf[leftPointer] > rightHalf[rightPointer]
    ):
      merged.push(rightHalf[rightPointer])
      rightPointer++

  if(leftPointer <= leftHalf.length - 1) merged = merged.concat(leftHalf.slice(leftPointer))
  if(rightPointer <= rightHalf.length - 1) merged = merged.concat(rightHalf.slice(rightPointer))
*/

// 14 36

// 34 12
// 3467 1259

const mergeTwoHalves = (leftHalf, rightHalf) => {
  let leftPointer = 0,
    rightPointer = 0;
  let merged = [];

  while (leftPointer < leftHalf.length && rightPointer < rightHalf.length) {
    if (leftHalf[leftPointer] <= rightHalf[rightPointer]) {
      merged.push(leftHalf[leftPointer]);
      leftPointer++;
    } else if (leftHalf[leftPointer] > rightHalf[rightPointer]) {
      merged.push(rightHalf[rightPointer]);
      rightPointer++;
    }
  }

  if (leftPointer <= leftHalf.length - 1) merged = merged.concat(leftHalf.slice(leftPointer));
  if (rightPointer <= rightHalf.length - 1) merged = merged.concat(rightHalf.slice(rightPointer));

  return merged;
};

const recursiveMergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const pointer = Math.floor((arr.length - 1) / 2);

  const leftHalf = arr.slice(0, pointer + 1);
  const rightHalf = arr.slice(pointer + 1);

  const sortedLeftHalf = recursiveMergeSort(leftHalf);
  const sortedRightHalf = recursiveMergeSort(rightHalf);

  const merged = mergeTwoHalves(sortedLeftHalf, sortedRightHalf);

  return merged;
};

/*
length: 8
0 1 2 3 4 5 6 7

leftHalf = 0 1 2 3
rightHalf = 4 5 6 7
*/

const arr = [4, 3, 7, 8, 9, 1, 10, 5];
// const arr = [...new Array(10)].map((item) => Math.round(Math.random() * 10));

console.log(arr, recursiveMergeSort(arr));

// 4 3 7 8 9 1 10 5
// 1 3 4 5 7 8 9 10
