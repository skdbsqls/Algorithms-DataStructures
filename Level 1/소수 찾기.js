/*
[문제 설명]
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

[제한 조건]
- n은 2이상 1000000이하의 자연수입니다.
*/

// 에라토스테네스의 체
function solution(n) {
  // 인덱스가 0부터 n까지인 배열 생성 (인덱스 0과 1은 false, 나머지는 true)
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  // i는 2부터 n의 제곱근까지만 반복
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      // i의 배수는 false로 변경
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((e) => e).length; // 소수의 개수
}

// 다른 풀이 => 효율성 테스트 통과 못 함
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        count++;
        break;
      }
    }
    // 소수는 1과 자기 자신만으로 나누어 떨어짐
    if (count === 0) {
      answer++;
    }
  }
  return answer;
}
