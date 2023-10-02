// https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
  return box
    .map((item) => parseInt(item / n))
    .reduce((acc, cur) => acc * cur, 1);
}
