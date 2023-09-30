// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  return my_string
    .split("")
    .map((item) => item.repeat(n))
    .join("");
}
