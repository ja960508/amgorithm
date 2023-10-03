// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  const MAP_X_LENGTH = maps.length;
  const MAP_Y_LENGTH = maps[0].length;
  const queue = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = Array.from({ length: MAP_X_LENGTH }, () =>
    Array(MAP_Y_LENGTH).fill(false)
  );
  const [MaxRow, MaxCol] = [MAP_X_LENGTH - 1, MAP_Y_LENGTH - 1];

  queue.push({ row: 0, col: 0, dist: 1 });
  visited[0][0] = true;

  while (queue.length > 0) {
    const { row, col, dist } = queue.shift();

    if (row === MaxRow && col === MaxCol) {
      return dist;
    }

    for (const [dr, dc] of directions) {
      const nextRow = row + dr;
      const nextCol = col + dc;

      if (
        nextRow >= 0 &&
        nextRow <= MaxRow &&
        nextCol >= 0 &&
        nextCol <= MaxCol &&
        maps[nextRow][nextCol] === 1 &&
        !visited[nextRow][nextCol]
      ) {
        queue.push({ row: nextRow, col: nextCol, dist: dist + 1 });
        visited[nextRow][nextCol] = true;
      }
    }
  }

  return -1;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

console.log(solution(maps));
