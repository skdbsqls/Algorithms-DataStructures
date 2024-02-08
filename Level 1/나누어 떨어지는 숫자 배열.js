/*
[문제 설명]
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

[제한사항]
- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.
*/

// 풀이 1
function solution(arr, divisor) {
  let anwser = [];

  // arr 배열을 돌면서
  for (let i = 0; i < arr.length; i++) {
    // 나누어 떨어지면
    if (arr[i] % divisor === 0) {
      anwser.push(arr[i]); // anwser 배열에 추가
    }
  }

  // anwser 배열에 요소가 있으면 ? 오름차순 정렬 :  없으면 ? '-1' 추가
  anwser.length ? anwser.sort((a, b) => a - b) : anwser.push(-1);

  return anwser;
}

// 풀이 2 (filter 활용)
function solution(arr, divisor) {
  const anwser = arr.filter((v) => v % divisor === 0);

  return anwser.length ? anwser.sort((a, b) => a - b) : [-1];
}
