// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let result = 0;

  for (let i = 1; i <= n / 2; i++) {
    if (!(n % i)) result += i;
  }

  return result + n;
}
