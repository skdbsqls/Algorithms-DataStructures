/*
[문제 설명]
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

[제한 조건]
- n은 10,000,000,000이하인 자연수입니다.
*/

function solution(n) {
  return n
    .toString() // 문자열로 변환
    .split("") // 배열로 변환
    .reverse() // 배열 뒤집기
    .map((e) => Number(e)); // 배열의 요소를 숫자로 변환
}
