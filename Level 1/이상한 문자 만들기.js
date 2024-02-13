/*
[문제 설명]
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

[제한 사항]
- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
*/

function solution(s) {
  let sArr = s.split(" "); // 공백을 기준으로 배열로 만들기

  let answer = []; // 정답 배열

  for (let i = 0; i < sArr.length; i++) {
    let word = sArr[i]; // 한 단어
    let weird = ""; // 이상한 단어
    for (let j = 0; j < word.length; j++) {
      // 짝수이면
      if (j % 2 === 0) {
        weird += word[j].toUpperCase(); // 대문자
      } else weird += word[j].toLowerCase(); // 홀수이면 소문자
    }
    answer.push(weird); // 완성된 이상한 단어 push
  }

  return answer.join(" "); // 배열을 문자열로 변환
}
