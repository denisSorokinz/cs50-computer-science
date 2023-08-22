const recursiveDrawPyramid = (rows, currentRow = 0) => {
  if (rows === currentRow) return;

  const str = "#".repeat(currentRow + 1);
  console.log(str);

  currentRow++;
  recursiveDrawPyramid(rows, currentRow);
};

const rows = 5;
recursiveDrawPyramid(rows);