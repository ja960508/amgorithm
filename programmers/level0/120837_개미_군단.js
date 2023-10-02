// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  const GENERAL = 5;
  const SOLDIER = 3;

  const numOfGeneral = parseInt(hp / GENERAL);
  hp -= GENERAL * numOfGeneral;
  const numOfSoldier = parseInt(hp / SOLDIER);
  hp -= SOLDIER * numOfSoldier;

  return numOfGeneral + numOfSoldier + hp;
}
