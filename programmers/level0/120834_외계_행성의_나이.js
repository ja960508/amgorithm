// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  const alphabet = "abcdefghij";

  return String(age)
    .split("")
    .map((item) => alphabet[item])
    .join("");
}
