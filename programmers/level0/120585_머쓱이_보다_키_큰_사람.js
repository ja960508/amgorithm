// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  return array.filter((item) => item > height).length;
}

const arr = [149, 180, 192, 170];
const height = 167;

console.log(solution(arr, height));
