// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const max = parseInt(nums.length / 2);
  const set = new Set(nums);

  return set.size > max ? max : set.size;
}
