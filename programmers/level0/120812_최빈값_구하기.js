// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  const data = {};
  let frequency = 0;
  array.forEach((item) => (data[item] = data[item] ? data[item] + 1 : 1));

  Object.keys(data).forEach(
    (item) => (frequency = data[item] > frequency ? data[item] : frequency)
  );

  const result = Object.keys(data).reduce(
    (acc, cur) => (data[cur] === frequency ? [...acc, cur] : acc),
    []
  );

  return result.length !== 1 ? -1 : Number(result[0]);
}

solution([1, 2, 3, 3, 3, 4]);
