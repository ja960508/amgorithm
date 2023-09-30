// https://school.programmers.co.kr/learn/courses/30/lessons/120823

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", () => solution(input[0]));

function solution(input) {
  console.log(
    Array.from({ length: input }, (_, i) => "*".repeat(i + 1)).join("\n")
  );
}
