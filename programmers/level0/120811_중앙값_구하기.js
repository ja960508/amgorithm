// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  const mid = parseInt(array.length / 2, 10);
  return array.sort((a, b) => a - b)[mid];
}
