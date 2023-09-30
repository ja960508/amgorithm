// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
    .filter((item) => !(item % 2))
    .reduce((acc, cur) => acc + cur, 0);
}
