// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  const p = s.replace(/[^p]/gi, "");
  const y = s.replace(/[^y]/gi, "");

  return p.length === y.length;
}
