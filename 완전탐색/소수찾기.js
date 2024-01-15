/*
[문제 설명]
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 
흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 
종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

[제한사항]
- numbers는 길이 1 이상 7 이하인 문자열입니다.
- numbers는 0~9까지 숫자만으로 이루어져 있습니다.
- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
*/

// 소수 판별하기
const isPrime = (num) => {
  // 0과 1은 소수가 아님
  if (num <= 1) return false;
  // 소수는 2부터 1과 자신만으로 나누어 떨어짐
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(numbers) {
  // 배열로 변환
  const arr = numbers.split("");
  const results = [];

  // 모든 순열 구하기
  const getPermutation = (arr, fixed) => {
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        // fixed을 제외한 배열 만들기
        const temp = [...arr];
        temp.splice(i, 1);

        // parseInt? "011"과 "11"은 같은 숫자로 취급
        if (isPrime(parseInt(fixed + arr[i]))) {
          results.push(parseInt(fixed + arr[i]));
        }
        getPermutation(temp, fixed + arr[i]);
      }
    }
  };
  getPermutation(arr, "");

  // 중복 제거
  const set = new Set(results);
  return set.size;
}

solution("17");
solution("011");
