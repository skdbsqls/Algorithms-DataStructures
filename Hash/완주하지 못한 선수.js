/* 
[문제 설명]
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

[제한사항]
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다. 
*/

// 풀이 1
function solution(participant, completion) {
  // Map 생성
  const Marathon = new Map();

  // 참가자 이름 및 인원수 추가
  for (const person of participant) {
    Marathon.has(person)
      ? Marathon.set(person, Marathon.get(person) + 1)
      : Marathon.set(person, 1);
  }

  // 완주한 참가자의 경우 - 1
  for (const person of completion) {
    if (Marathon.has(person)) {
      Marathon.set(person, Marathon.get(person) - 1);
    }
  }

  // 완주하지 못한 사람
  for (const [key, value] of Marathon) {
    if (value === 1) return key;
  }
}

// 풀이 2
function solution(participant, completion) {
  // Map 생성
  const map = new Map();

  // 참가자 등록 (+1) 및 완주자 확인 (-1)
  for (let i = 0; i < participant.length; i++) {
    // 참가자와 완주자
    let a = participant[i];
    let b = completion[i];

    // 등록되지 않았다면 등록 0 + 1, 이미 등록되었다면 현재 값 + 1
    map.set(a, (map.get(a) || 0) + 1);
    // 등록되지 않았다면 0 - 1, 이미 등록되었다면 현재 값 - 1
    map.set(b, (map.get(b) || 0) - 1);
  }

  // 완주하지 못한 사람
  for (const [key, value] of map) {
    if (value === 1) return key;
  }
}
