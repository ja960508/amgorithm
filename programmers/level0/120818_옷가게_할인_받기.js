// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function getDiscountRate(price) {
  const NO_DISCOUNT = 1;
  const UPPER_100000 = 0.95;
  const UPPER_300000 = 0.9;
  const UPPER_500000 = 0.8;

  if (price < 100000) return NO_DISCOUNT;
  if (price < 300000) return UPPER_100000;
  if (price < 500000) return UPPER_300000;

  return UPPER_500000;
}

function solution(price) {
  return parseInt(price * getDiscountRate(price), 10);
}
