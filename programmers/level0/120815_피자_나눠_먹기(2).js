// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function getGCD(x, y) {
  const mod = x % y;
  return mod === 0 ? y : getGCD(y, mod);
}

function getLCM(x, y) {
  return (x * y) / getGCD(x, y);
}

function solution(n) {
  const PIZZA_PIECES = 6;

  return getLCM(n, PIZZA_PIECES) / 6;
}
