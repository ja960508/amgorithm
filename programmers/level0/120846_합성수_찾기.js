// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
  let result = 0;

  const getDivisor = (n) => {
    let count = 0;

    for (let i = 1; i <= n; i++) count += n % i === 0 ? 1 : 0;

    return count;
  };

  while (n) {
    result += getDivisor(n) >= 3 ? 1 : 0;
    n--;
  }

  return result;
}
