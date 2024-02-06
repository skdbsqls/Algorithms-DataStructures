/*
[문제 설명]
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

[제한 사항]
- n은 0 이상 3000이하인 정수입니다.
*/

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    // 약수 : 나머지가 0인 것
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}
