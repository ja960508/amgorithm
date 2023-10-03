// https://school.programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let answer = '';

  while (n > 0) {
    let share = parseInt(n / 3);
    let remainder = n % 3;

    if (remainder === 0) {
      share -= 1;
      remainder = 4;
    }

    answer = remainder + answer;
    n = share;
  }

  return answer;
}
