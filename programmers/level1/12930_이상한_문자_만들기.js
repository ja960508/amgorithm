// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  return s
    .split(" ")
    .map((item) =>
      item
        .split("")
        .map((c, idx) => (idx % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");
}
