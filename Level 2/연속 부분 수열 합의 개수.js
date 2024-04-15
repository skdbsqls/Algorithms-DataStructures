/*
[문제 설명]
철호는 수열을 가지고 놀기 좋아합니다. 어느 날 철호는 어떤 자연수로 이루어진 원형 수열의 연속하는 부분 수열의 합으로 만들 수 있는 수가 모두 몇 가지인지 알아보고 싶어졌습니다. 
원형 수열이란 일반적인 수열에서 처음과 끝이 연결된 형태의 수열을 말합니다. 예를 들어 수열 [7, 9, 1, 1, 4] 로 원형 수열을 만들면 다음과 같습니다.

원형 수열은 처음과 끝이 연결되어 끊기는 부분이 없기 때문에 연속하는 부분 수열도 일반적인 수열보다 많아집니다.
원형 수열의 모든 원소 elements가 순서대로 주어질 때, 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return 하도록 solution 함수를 완성해주세요.

[제한사항]
- 3 ≤ elements의 길이 ≤ 1,000
- 1 ≤ elements의 원소 ≤ 1,000
*/

function solution(elements) {
  let set = new Set(); // 중복 제거

  // 길이가 n인 연속 부분 수열
  for (let i = 1; i <= elements.length; i++) {
    // 원순열 만들기 n개의 원소를 원본 배열 뒤에 추가
    let circle = elements.concat(elements.slice(0, i));

    // 길이가 n인 연속 부분 수열의 합
    for (let j = 0; j < elements.length; j++) {
      set.add(circle.slice(j, j + i).reduce((acc, cur) => acc + cur, 0));
    }
  }
  // 만들 수 있는 수의 개수
  return set.size;
}

// 풀이 2 (배열 두 개를 붙여 원순열로 만들어 놓고 시작하기)
function solution(elements) {
  let set = new Set(); // 중복 제거
  let circle = elements.concat(elements); // 원본 배열 + 원본 배열

  // 길이가 n인 연속 부분 수열
  for (let i = 1; i <= elements.length; i++) {
    let sum = 0; // 부분 수열의 합
    // 길이가 n인 연속 부분 수열의 합
    for (let j = 0; j < elements.length; j++) {
      sum += circle[i + j];
      set.add(sum);
    }
  }
  // 만들 수 있는 수의 개수
  return set.size;
}
