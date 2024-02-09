/*
[문제 설명]
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

[제한사항]
- s는 길이가 1 이상, 100이하인 스트링입니다.
*/

function solution(s) {
  let answer = []; // 정답 배열
  const arr = s.split(""); // 배열로 변환
  const middle = Math.floor(s.length / 2); // 가운데 수

  // 짝수일 때
  if (s.length % 2 === 0) {
    answer.push(arr[middle - 1]);
    answer.push(arr[middle]);
  }
  // 홀수일 때
  else {
    answer.push(arr[middle]);
  }

  return answer.join(""); // 정답
}
