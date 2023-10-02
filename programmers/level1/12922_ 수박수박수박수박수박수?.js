// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  const watermelon = "수박";
  const repeated = watermelon.repeat(parseInt(n / 2));
  const isOdd = !!(n % 2);

  return isOdd ? repeated + watermelon[0] : repeated;
}
