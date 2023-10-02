function solution(s) {
  const mid = parseInt(s.length / 2);

  if (s.length % 2) return s[mid];

  return s.slice(mid - 1, mid + 1);
}
