const linearSearch = (arr, n) => {
  for (let currentIndex in arr) {
    if (arr[currentIndex] === n) return currentIndex;
  }

  return -1;
};

const arr = [4, 3, 7, 8, 9, 1, 10, 5];
const sortedArr = arr.sort((prev, next) => prev - next);

console.log(linearSearch(arr, 10));
