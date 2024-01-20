let answer = [];

const combination = (origin, selectNum, start, boxLength, box) => {
  // 종료 조건
  if (boxLength === selectNum) {
    const copy = [...box];
    answer.push(copy);
    return;
  }

  // 실행 함수
  for (let i = start; i < origin.length; i++) {
    box.push(origin[i]);
    combination(origin, selectNum, i + 1, boxLength + 1, box);
    box.pop();
  }
  return answer;
};

const results = combination([1, 2, 3, 4, 5], 3, 0, 0, []);
console.log(results);
/* [
  [ 1, 2, 3 ], [ 1, 2, 4 ],
  [ 1, 2, 5 ], [ 1, 3, 4 ],
  [ 1, 3, 5 ], [ 1, 4, 5 ],
  [ 2, 3, 4 ], [ 2, 3, 5 ],
  [ 2, 4, 5 ], [ 3, 4, 5 ]
] */
