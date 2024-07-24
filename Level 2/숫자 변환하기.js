/*
[문제 설명]
자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

    x에 n을 더합니다
    x에 2를 곱합니다.
    x에 3을 곱합니다.

자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 
이때 x를 y로 만들 수 없다면 -1을 return 해주세요.

[제한사항]
- 1 ≤ x ≤ y ≤ 1,000,000
- 1 ≤ n < y
*/

// 오답 (50.0 / 100.0)
function solution(x, y, n) {
  let answer = -1;
  let counts = [];

  function dfs(x, count) {
    if (x === y) {
      counts.push(count);
      return;
    }

    if (x > y) return;

    dfs(x + n, count + 1);
    dfs(x * 2, count + 1);
    dfs(x * 3, count + 1);
  }

  dfs(x, 0);

  counts.length ? (answer = Math.min(...counts)) : (answer = -1);
  return answer;
}

// 정답
function solution(x, y, n) {
  const dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] !== Infinity ? dp[y] : -1;
}
