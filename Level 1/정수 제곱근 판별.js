/*
[문제 설명]
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

[제한 사항]
- n은 1이상, 50000000000000 이하인 양의 정수입니다.
*/

function solution(n) {
  let answer = 0;
  let sqrt = Math.sqrt(n); // Math.sqrt() 함수는 숫자의 제곱근을 반환

  // 제곱근인 경우
  if (sqrt % 1 === 0) {
    // Math.pow(base, exponent) 함수는 base에 exponent를 제곱한 값을 반환
    // base가 음수이고 exponent가 정수가 아닌 경우에는 NaN을 반환
    answer = Math.pow(sqrt + 1, 2);
  }
  // 제곱근이 아닌 경우
  else {
    answer = -1;
  }
  return answer;
}
