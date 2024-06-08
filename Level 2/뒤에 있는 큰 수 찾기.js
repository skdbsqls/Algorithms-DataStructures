/*
[문제 설명]
정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 
단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

[제한사항]
- 4 ≤ numbers의 길이 ≤ 1,000,000
 - 1 ≤ numbers[i] ≤ 1,000,000
*/

// 오답(56.5 / 100.0) - 시간 초과
function solution(numbers) {
  let answer = [];

  // numbers 배열의 원소가 없어질 때까지
  while (numbers.length) {
    let target = numbers.shift(); // 배열의 각 원소
    let max = -1; // 뒤에 있는 큰 수 (뒷 큰수가 없는 경우: -1)

    // 자신보다 뒤에 있는 숫자 중에서
    for (let i = 0; i < numbers.length; i++) {
      // 자신보다 크면서 가장 가까이 있는 수가 있다면
      if (target < numbers[i]) {
        max = numbers[i]; // 뒷 큰수
        break;
      }
    }

    answer.push(max);
  }

  return answer;
}

// 오답(82.6 / 100.0) - 시간 초과
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let target = numbers[i];
    let max = -1;

    for (let j = i + 1; j < numbers.length; j++) {
      if (target < numbers[j]) {
        max = numbers[j];
        break;
      }
    }

    answer.push(max);
  }

  return answer;
}

// 정답
function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    while (stack.length && numbers[stack.at(-1)] < num) {
      answer[stack.pop()] = num;
    }
    stack.push(i);
  }

  return answer;
}
