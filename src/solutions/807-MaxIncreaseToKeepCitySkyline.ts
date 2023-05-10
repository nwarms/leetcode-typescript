/*
https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/
*/

function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const n = grid.length;
  let total = 0;
  const findHighestInRow = (row:number) => {
    let highest = 0;
    for (let i = 0; i < n; i++) {
      highest = grid[row][i] > highest ? grid[row][i] : highest;
    }
    return highest;
  }

  const findHighestInColumn = (column:number) => {
    let highest = 0;
    for (let i = 0; i < n; i++) {
      highest = grid[i][column] > highest ? grid[i][column] : highest;
    }
    return highest;
  }

  const highestColumns: Array<number> = [];
  const highestRows: Array<number> = [];
  for(let i = 0; i < n; i++){
    highestColumns[i] = findHighestInColumn(i);
    highestRows[i] = findHighestInRow(i);
  }

  const newGrid = grid.map(((row, y) => {
    return row.map((building, x) => {
      const lowestHighest = highestColumns[x] > highestRows[y] ? highestRows[y] : highestColumns[x];
      if(lowestHighest>building){
        total += lowestHighest - building;
      }
      return lowestHighest;
    });
  }));
  return total;
};

export default maxIncreaseKeepingSkyline;