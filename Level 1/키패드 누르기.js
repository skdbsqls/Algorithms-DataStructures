/*
[문제 설명]
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

    1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
    2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
    3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
    4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
      4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

[제한사항]
- numbers 배열의 크기는 1 이상 1,000 이하입니다.
- numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
- hand는 "left" 또는 "right" 입니다.
  - "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
- 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
*/

function solution(numbers, hand) {
  const left = [1, 4, 7, "*"]; // 왼손 엄지손가락 사용
  const middle = [2, 5, 8, 0]; // 가까운 쪽 엄지손가락 사용
  const right = [3, 6, 9, "#"]; // 오른쪽 엄지손가락 사용

  let leftHands = ["*"]; // 왼손 엄지손가락 위치 (처음 위치는 "*")
  let rightHands = ["#"]; // 오른손 엄지손가락 위치 (처음 위치는 "#")

  let answer = ""; // 정답

  for (let i = 0; i < numbers.length; i++) {
    // [1, 4, 7]인 경우
    if (left.includes(numbers[i])) {
      // 왼손 엄지손가락 사용
      leftHands.push(numbers[i]);
      answer += "L";
    }

    // [3, 6, 9]인 경우
    if (right.includes(numbers[i])) {
      // 오른손 엄지손가락 사용
      rightHands.push(numbers[i]);
      answer += "R";
    }

    // [2, 5, 8, 0]인 경우
    if (middle.includes(numbers[i])) {
      let leftHand = 0;
      let rightHand = 0;
      let input = 0;

      // 입력값의 위치 찾기
      for (let k = 0; k < 4; k++) {
        if (numbers[i] === middle[k]) {
          input = k;
        }
      }

      for (let j = 0; j < 4; j++) {
        // 왼손 엄지손가락 거리 계산하기
        if (leftHands[leftHands.length - 1] === left[j]) {
          leftHand = Math.abs(input - j) + 1;
        }
        if (leftHands[leftHands.length - 1] === middle[j]) {
          leftHand = Math.abs(input - j);
        }

        // 오른손 엄지손가락 거리 계산하기
        if (rightHands[rightHands.length - 1] === right[j]) {
          rightHand = Math.abs(input - j) + 1;
        }
        if (rightHands[rightHands.length - 1] === middle[j]) {
          rightHand = Math.abs(input - j);
        }
      }

      // 왼손 엄지손가락이 가까운 경우
      if (leftHand < rightHand) {
        leftHands.push(numbers[i]);
        answer += "L";
      }

      // 오른손 엄지손가락이 가까운 경우
      if (leftHand > rightHand) {
        rightHands.push(numbers[i]);
        answer += "R";
      }

      // 왼손 엄지손가락과 오른손 엄지손가락의 거리가 같은 경우
      if (leftHand === rightHand) {
        if (hand === "left") {
          leftHands.push(numbers[i]);
          answer += "L";
        } else {
          rightHands.push(numbers[i]);
          answer += "R";
        }
      }
    }
  }

  return answer;
}

// 수정
// leftHand와 rightHand의 값을 갱신해가면서 풀 수 있는지 풀어보기
// 키패드를 좌표로 보고 풀어보기
