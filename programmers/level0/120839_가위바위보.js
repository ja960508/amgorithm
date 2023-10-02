// https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  const rock = "0";
  const scissor = "2";
  const paper = "5";

  const winTable = {
    [rock]: paper,
    [scissor]: rock,
    [paper]: scissor,
  };

  return rsp.split("").reduce((acc, cur) => acc + winTable[cur], "");
}
