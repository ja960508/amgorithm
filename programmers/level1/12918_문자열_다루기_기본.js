// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  const reg = /^\d{4}$|^\d{6}$/;

  return reg.test(s);
}
