// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
  const [x, y] = dot;

  if (x > 0) {
    return y > 0 ? 1 : 4;
  }

  return y > 0 ? 2 : 3;
}
