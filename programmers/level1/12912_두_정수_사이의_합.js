function solution(a, b) {
  const larger = a > b ? a : b;
  const smaller = a > b ? b : a;

  return ((larger - smaller + 1) * (larger + smaller)) / 2;
}
