/*
[문제 설명]
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. 
number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

[제한 조건]
- number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
- k는 1 이상 number의 자릿수 미만인 자연수입니다.
*/

// 풀이 1
function solution(number, k) {
  let numbers = number
    .split("")
    .map((num) => Number(num))
    .reverse(); // shift()는 O(N), pop()은 O(1)이기 때문에 reverse 해줌
  let answer = []; // 정답 배열

  while (numbers.length) {
    const first = numbers.pop(); // 첫 번째 숫자 꺼내기
    if (!answer.length) {
      // answer에 요소가 없으면
      answer.push(first); // 바로 push
    } else {
      // 있으면
      while (k > 0 && answer[answer.length - 1] < first) {
        // k가 0보다 크고, answer의 마지막 요소가 첫 번째 요소보다 작으면
        answer.pop(); // answer 요소를 꺼내줌
        k -= 1; // 삭제되면 k는 -1
      }
      answer.push(first); // 나머지 요소는 마저 넣어줌
    }
  }

  // answer 배열에 마지막 요소보다 더 큰 수가 나오지 않을 경우 k가 끝까지 소모되지 않을 수 있음
  // 그럼 남은 요소가 모두 answer에 들어가기 때문에 k만큼 뒤에서 지워줘야 함 ex)100010000
  return answer.slice(0, answer.length - k).join("");
}
