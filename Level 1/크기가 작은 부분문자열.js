/*
[문제 설명]
숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 
이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

[제한사항]
- 1 ≤ p의 길이 ≤ 18
- p의 길이 ≤ t의 길이 ≤ 10,000
- t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.
*/

function solution(t, p) {
  let arr = t.split(""); // 배열로 변환
  let parts = []; // 부분 문자열 배열

  // 첫 번째 요소부터 (배열의 전체 길이에서 p의 길이만큼을 뺀)인덱스까지 돌면서
  for (let i = 0; i <= arr.length - p.length; i++) {
    // p의 길이만큼 배열을 잘라줌
    let part = arr.slice(i, i + p.length);
    // 부분 문자열에 join해서 push
    parts.push(part.join(""));
  }

  let count = 0; // p보다 작거자 같은 부분 문자열의 개수
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] <= p) count++;
  }

  return count;
}
