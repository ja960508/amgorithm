// https://school.programmers.co.kr/learn/courses/30/lessons/120840
// 순열 = 조합 + 줄세우기
// 조합 = 순열 / 줄세우기

function solution(balls, share) {
  const getPermutation = (n, m = n) => {
    if (n < m) throw new Error("n must be larger than m");
    if (m === 1) return n;

    return n * getPermutation(n - 1, m - 1);
  };

  return parseInt(getPermutation(balls, share) / getPermutation(share));
}

console.log(solution(7, 3));
