/* 
[문제 설명]
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

[제한사항]
- 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
- 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
- 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
*/

// 풀이 1
function solution(brown, yellow) {
  let answer = [];

  // brown + yellow의 약수 구하기
  const measures = [];

  for (let i = 1; i <= brown + yellow; i++) {
    if ((brown + yellow) % i === 0) {
      measures.push(i);
    }
  }

  // 약수의 가장 가운데 값 구하기
  const middle = Math.floor(measures.length / 2);

  // 약수의 개수가 홀수일 때
  if (measures.length % 2 !== 0) {
    answer.push(measures[middle]);
    answer.push(measures[middle]);
  }
  // 약수의 개수가 짝수일 때
  else {
    // 약수의 짝을 맞추기 위해 배열을 둘로 나눔
    const arr1 = measures.slice(0, middle);
    const arr2 = measures.slice(middle).reverse();

    // 두 배열을 돌면서 약수의 짝들 중에 yellow 수가 맞는 것을 찾아줌
    for (let i = 0; i < middle; i++) {
      if ((arr1[i] - 2) * (arr2[i] - 2) === yellow) {
        answer.push(arr2[i]);
        answer.push(arr1[i]);
      }
    }
  }

  return answer;
}

// 풀이 2
function solution(brown, yellow) {
  let answer = [];
  // x는 가로, y는 세로 (x와 y의 최소값은 3)
  for (let y = 3; y <= (brown + yellow) / y; y++) {
    // x(가로) = (brown + yellow) / y(세로)
    let x = Math.floor((brown + yellow) / y);
    // x, y가 될 수 있는 수 중에서 yellow 수가 맞는 것 찾기
    if ((x - 2) * (y - 2) === yellow) {
      answer.push(x);
      answer.push(y);
      break;
    }
  }
  return answer;
}
