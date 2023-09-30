// https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
  const sortedEmergency = [...emergency].sort((a, b) => b - a);

  return emergency.map(
    (item) => sortedEmergency.findIndex((data) => data === item) + 1
  );
}
