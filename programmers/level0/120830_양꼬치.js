// https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  const LAMB_SKEWERS_PRICE = 12000;
  const JUICE_PRICE = 2000;
  const serviceJuices = parseInt(n / 10, 10);
  const juicesForPay = k <= serviceJuices ? 0 : k - serviceJuices;

  return n * LAMB_SKEWERS_PRICE + juicesForPay * JUICE_PRICE;
}
