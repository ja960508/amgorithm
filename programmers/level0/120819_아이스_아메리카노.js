// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  const AMERICANO_PRICE = 5500;
  return [parseInt(money / AMERICANO_PRICE, 10), money % AMERICANO_PRICE];
}
