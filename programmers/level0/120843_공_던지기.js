// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  if (k === 1) return 0;
  k -= 1;

  console.log((k * 2) % numbers.length);

  return numbers[(k * 2) % numbers.length];
}
