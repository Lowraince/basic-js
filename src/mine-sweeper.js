const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;

  const arr = Array.from({length:row},() => Array(column).fill(0))

  const temp = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0]  , [1, 1]
  ]

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column; j += 1) {
      if (matrix[i][j] === true) {

        for (const [dx, dy] of temp) {
          const x = i + dx;
          const y = j + dy;

          if(x >= 0 && x < row && y >= 0 && y < column) {
            arr[x][y]++;
          }
        }
      }
    }
  }

  return arr;
}

module.exports = {
  minesweeper
};
