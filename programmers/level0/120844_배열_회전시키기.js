// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  const RIGHT = "right";

  return direction === RIGHT
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}
