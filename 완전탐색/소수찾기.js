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
  if (num < 2) return false;
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

  console.log(results);

  // 중복 제거
  const set = new Set(results);
  return set.size;
}

// 소수 판별하기
// (1) 반복문 (n-1)
const isPrime1 = (n) => {
  for (let i = 2; i < n; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// (2) 반복문 (n-2)
const isPrime2 = (n) => {
  for (let i = 2; i < n / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// (3) 반복문 (√n)
const isPrime3 = (n) => {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// (4) 에라토스테네스의 체
const isPrime4 = (n) => {
  // 인덱스가 0부터 n까지인 배열 생성 (인덱스 0과 1은 false 나머지는 true)
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  // 2부터 n의 제곱근까지 반복
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      // i의 배수는 false로 변경
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  // n까지의 숫자 중 소수만 true인 배열 반환
  return arr;
};
