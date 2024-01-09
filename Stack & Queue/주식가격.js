/*
[문제 설명]
초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

[제한사항]
- prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
- prices의 길이는 2 이상 100,000 이하입니다.
*/

// 풀이 1
function solution(prices) {
  let answer = [];

  // 주식가격이 담긴 배열의 첫 번째 요소부터
  for (let i = 0; i < prices.length; i++) {
    let time = 0; // 기간
    // 남은 주식가격 중 앞에서 부터 하나씩 비교
    for (let j = i + 1; j < prices.length; j++) {
      // 그렇지 않은경우 시간 + 1
      time++;
      // 첫 번째 요소보다 작은 숫자가 있으면 (가격이 떨어지는 시점에서 stop)
      if (prices[i] > prices[j]) break;
    }
    answer.push(time);
  }

  return answer;
}

// 풀이 2
function solution(prices) {
  // 배열 뒤집기
  prices.reverse();

  let answer = [];

  // 배열의 길이 만큼
  while (prices.length) {
    // 뒤에서 하나씩 꺼내면? pop() 메서드의 시간 복잡도는 O(1)
    let last = prices.pop();
    let time = 0;

    // 남은 배열의 요소를 뒤에서부터 하나씩 비교
    for (let i = prices.length - 1; i >= 0; i--) {
      if (prices[i] < last) {
        time++;
        break;
      } else time++;
    }
    answer.push(time);
  }
  return answer;
}

// 풀이 3
function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  let length = prices.length;

  for (let i = 0; i < length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }

  return answer;
}
