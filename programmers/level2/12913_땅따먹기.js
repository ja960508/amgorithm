function solution(land) {
  const dp = Array.from({ length: land.length }, () =>
    new Array(land[0].length).fill(0)
  );
  dp[0] = [...land[0]];

  for (let row = 1; row < land.length; row++) {
    for (let col = 0; col < land[0].length; col++) {
      const withOutCurrentCol = dp[row - 1].filter((_, idx) => idx !== col);
      dp[row][col] = land[row][col] + Math.max(...withOutCurrentCol);
    }
  }

  return Math.max(...dp[dp.length - 1]);
}

const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

solution(land);
