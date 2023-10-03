// https://school.programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
  const mod = 1_000_000_007;
  const cases = new Array(n);
  cases[0] = 1;
  cases[1] = 2;

  for (let i = 2; i < n; i++) {
    cases[i] = (cases[i - 1] + cases[i - 2]) % mod;
  }

  return cases[n - 1];
}

console.log(solution(4000));
