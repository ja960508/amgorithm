function solution(s) {
  const OPEN = "(";
  const CLOSE = ")";
  const [first, ...rest] = s;
  const stack = [first];

  rest.forEach((item) => {
    const top = stack[stack.length - 1];

    if (top === OPEN && item === CLOSE) {
      stack.pop();
      return;
    }

    stack.push(item);
  });

  return !stack.length;
}

console.log(solution(")()("));
