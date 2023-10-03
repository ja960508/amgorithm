// https://school.programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  let answer = 0;
  if (board.length <= 1 || board[0].length <= 1) {
    return 1;
  }

  for (let x = 1; x < board[0].length; x++) {
    for (let y = 1; y < board.length; y++) {
      if (board[y][x] === 0) continue;
      board[y][x] =
        Math.min(board[y][x - 1], board[y - 1][x - 1], board[y - 1][x]) + 1;
      answer = answer < board[y][x] ? board[y][x] : answer;
    }
  }

  return answer ** 2;
}

console.log(
  solution([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
);
