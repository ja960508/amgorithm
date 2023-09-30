// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1)
    .filter((item) => item % 2);
}
