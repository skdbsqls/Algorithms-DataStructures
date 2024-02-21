/*
[문제 설명]
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 
그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 
다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

 1. 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
 2. 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 
    지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
 3. "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
 4. 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

[입력 형식]
입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.

- 1 ≦ n ≦ 16
- arr1, arr2는 길이 n인 정수 배열로 주어진다.
- 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.

[출력 형식]
원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.
*/

function solution(n, arr1, arr2) {
  let binaryNums1 = [];
  let binaryNums2 = [];

  // arr1의 정수를 길이가 n인 이진수로 변환
  for (let i = 0; i < arr1.length; i++) {
    let binaryNum = ""; // 길이가 n인 이진수
    let temp = arr1[i].toString(2); // 배열의 요소를 이진수로 변환

    // 만약 변환한 이진수의 길이가 n보다 작으면
    if (temp.length < n) {
      binaryNum += "0".repeat(n - temp.length); // 부족한 길이만큼 0을 추가
    }

    binaryNum += temp; // 변환한 이진수 추가
    binaryNums1.push(binaryNum); // 완성된 길이가 n인 이진수를 배열에 추가
  }

  // arr2의 정수를 길이가 n인 이진수로 변환
  for (let i = 0; i < arr2.length; i++) {
    let binaryNum = ""; // 길이가 n인 이진수
    let temp = arr2[i].toString(2); // 배열의 요소를 이진수로 변환

    // 만약 변환한 이진수의 길이가 n보다 작으면
    if (temp.length < n) {
      binaryNum += "0".repeat(n - temp.length); // 부족한 길이만큼 0을 추가
    }

    binaryNum += temp; // 변환한 이진수 추가
    binaryNums2.push(binaryNum); // 완성된 길이가 n인 이진수를 배열에 추가
  }

  // 전체 지도 구하기
  let entire = [];

  for (let i = 0; i < n; i++) {
    let temp = ""; // 전체 지도의 하나의 행
    let binaryNum1 = binaryNums1[i]; // arr1의 정수를 이진수로 변환한 요소 하나
    let binaryNum2 = binaryNums2[i]; // arr2의 정수를 이진수로 변환한 요소 하나

    // arr1과 arr2의 요소를 하나를 하나씩 확인하면서
    for (let j = 0; j < n; j++) {
      // 둘 다 공백인 경우 " "
      if (binaryNum1[j] === "0" && binaryNum2[j] === "0") {
        temp += " ";
      }
      // 하나라도 벽인 경우 "#"
      else temp += "#";
    }

    entire.push(temp); // 하나의 행을 전체 지도 배열에 추가
  }

  return entire;
}

// 간단하게
function solution(n, arr1, arr2) {
  let binaryNums1 = [];
  let binaryNums2 = [];

  for (let i = 0; i < n; i++) {
    let binaryNum1 = "";
    let binaryNum2 = "";

    let temp1 = arr1[i].toString(2);
    let temp2 = arr2[i].toString(2);

    if (temp1.length < n || temp2.length < n) {
      binaryNum1 += "0".repeat(n - temp1.length);
      binaryNum2 += "0".repeat(n - temp2.length);
    }

    binaryNum1 += temp1;
    binaryNum2 += temp2;

    binaryNums1.push(binaryNum1);
    binaryNums2.push(binaryNum2);
  }

  let entire = [];

  for (let i = 0; i < n; i++) {
    let temp = "";
    let binaryNum1 = binaryNums1[i];
    let binaryNum2 = binaryNums2[i];

    for (let j = 0; j < n; j++) {
      if (binaryNum1[j] === "0" && binaryNum2[j] === "0") {
        temp += " ";
      } else temp += "#";
    }

    entire.push(temp);
  }

  return entire;
}
