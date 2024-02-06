/*
[문제 설명]
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

[제한사항]
- N의 범위 : 100,000,000 이하의 자연수
*/

function solution(n) {
  return n
    .toString() // 문자열로 변환
    .split("") // 배열로 변환
    .map((v) => Number(v)) // 배열의 각 요소를 다시 숫자로 변환
    .reduce((a, b) => a + b); // 각 자릿수의 합
}
