// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const month_days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (a === 1) return days[b % 7];

  return days[
    month_days.slice(0, a - 1).reduce((acc, cur) => acc + cur, b) % 7
  ];
}
