// https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
  return array.filter((item) => item === n).length;
}

const inputArr = [0, 2, 3, 4];
const inputNum = 1;

console.log(solution(inputArr, inputNum));
