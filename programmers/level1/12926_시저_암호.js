// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const lower = "abcdefghijklmnopqrstuvwxyz".split("");
  const upper = lower.map((c) => c.toUpperCase());

  const isUpper = (c) => c.toUpperCase() === c;
  const isSpace = (c) => c === " ";

  return s
    .split("")
    .map((item) => {
      if (isSpace(item)) return item;
      if (isUpper(item)) return upper[(upper.indexOf(item) + n) % upper.length];
      return lower[(lower.indexOf(item) + n) % lower.length];
    })
    .join("");
}
