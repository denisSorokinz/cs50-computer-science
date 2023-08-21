const recursiveBinarySearch = (arr, n, leftPointer = 0, rightPointer = arr.length - 1) => {
  debugger;
  const currentIndex = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
  const number = arr[currentIndex];

  if (number === n) return currentIndex;

  if (leftPointer === rightPointer) return -1;

  if (number < n) leftPointer = currentIndex + 1;
  if (number > n) rightPointer = currentIndex - 1;

  return recursiveBinarySearch(arr, n, leftPointer, rightPointer);
};

const arr = [4, 3, 7, 8, 9, 1, 10, 5];
const sortedArr = arr.sort((prev, next) => prev - next);

console.log(recursiveBinarySearch(arr, 10));


// const binarySearchIndexOfN = (arr, n) => {
//   debugger;
//   // sort arr:
//   let newArr = arr.sort((prev, next) => prev - next);

//   // loop:
//   while (newArr.length > 1) {
//     // pointer = ceil(arr.length/2)
//     let pointer = Math.floor((newArr.length - 1) / 2);
//     // look up number at arr[pointer]
//     let number = newArr[pointer];
//     // if number === n -> return pointer
//     if (number === n) return pointer;
//     // if number < n -> arr = arr.slice(pointer, arr.length-1)
//     else if (number < n) newArr = newArr.slice(pointer + 1);
//     // if number > n -> arr = arr.slice(0, pointer)
//     else if (number > n) newArr = newArr.slice(0, pointer);
//   }

//   return newArr[0] === n ? 0 : -1;
// };

