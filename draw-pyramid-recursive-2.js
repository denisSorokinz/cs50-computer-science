const recursiveDrawPyramid = (rows) => {
  if (rows === 0) return;

  recursiveDrawPyramid(rows - 1);

  for (let i = 0; i < rows; i++) console.log("#".repeat(rows));
};

const rows = 5;
recursiveDrawPyramid(rows);
