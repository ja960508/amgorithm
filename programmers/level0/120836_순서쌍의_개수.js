// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) answer += n % i === 0 ? 1 : 0;

  return answer;
}
