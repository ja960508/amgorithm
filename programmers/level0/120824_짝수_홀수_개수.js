// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  const numOfOdds = num_list.filter((item) => item % 2).length;

  return [num_list.length - numOfOdds, numOfOdds];
}
