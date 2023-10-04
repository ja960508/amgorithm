function solution(n) {
  const binaryNumberArr = n.toString(2).split("");
  const firstOne = [...binaryNumberArr].reverse().indexOf("1") + 1;

  const adder = parseInt(binaryNumberArr.slice(-firstOne).join(""), 2);
  const nextBinaryNumberArr = (n + adder).toString(2).split("");

  const numOfNOnes = binaryNumberArr.filter((item) => item === "1").length;
  const numOfNextOnes = nextBinaryNumberArr.filter(
    (item) => item === "1"
  ).length;
  const gap = Math.abs(numOfNOnes - numOfNextOnes);

  for (let i = 1; i <= gap; i++) {
    nextBinaryNumberArr[nextBinaryNumberArr.length - i] = "1";
  }

  return parseInt(nextBinaryNumberArr.join(""), 2);
}

console.log(solution(78));
