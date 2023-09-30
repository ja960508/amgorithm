// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function getGCD(x, y) {
  const mod = x % y;

  return mod === 0 ? y : getGCD(y, mod);
}

function getLCM(x, y) {
  const GCD = getGCD(x, y);

  return (x * y) / GCD;
}

function getMultiplier(x, y) {
  const LCM = getLCM(x, y);
  return [LCM / x, LCM / y];
}

function solution(numer1, denom1, numer2, denom2) {
  const [mul1, mul2] = getMultiplier(denom1, denom2);

  const numer = numer1 * mul1 + numer2 * mul2;
  const denom = denom1 * mul1;

  const GCD = getGCD(numer, denom);

  return [numer / GCD, denom / GCD];
}

console.log(solution(2, 4, 8, 16));
