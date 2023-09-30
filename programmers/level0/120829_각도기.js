// https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {
  if (angle === 90) return 2;
  if (angle === 180) return 4;
  if (angle < 90) return 1;
  if (90 < angle) return 3;
}
