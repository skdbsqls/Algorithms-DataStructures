/*
[문제 설명]
전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

- 구조대 : 119
- 박준영 : 97 674 223
- 지영석 : 11 9552 4421

전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 
어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

[제한 사항]
- phone_book의 길이는 1 이상 1,000,000 이하입니다.
- 각 전화번호의 길이는 1 이상 20 이하입니다.
- 같은 전화번호가 중복해서 들어있지 않습니다.
*/

// 풀이 1
function solution(phone_book) {
  // 전화번호 배열 정렬
  phone_book.sort();

  // 현재 번호와 다음 번호를 비교할 것이기 때문에 phone_book.length - 1
  for (let i = 0; i < phone_book.length - 1; i++) {
    // 현재 번호가 다음 번호의 시작과 같으면 false
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length))
      return false;
  }
  return true;
}

// 풀이 2
function solution(phone_book) {
  // 전화번호 배열 정렬
  phone_book.sort();

  // Map 생성
  const Book = new Map();

  // 전화번호 배열의 모든 전화번호 Map 등록
  for (phoneNumber of phone_book) {
    Book.set(phoneNumber, true);
  }

  // 전화번호 배열의 순회하면서
  for (phoneNumber of phone_book) {
    // 하나의 전화번호가 가지는 모든 접두어에 접근
    for (let i = 0; i < phoneNumber.length; i++) {
      const prefix = phoneNumber.slice(0, i);

      // 전화번호 Map에 해당 접두어가 있으면 false
      if (Book.has(prefix)) return false;
    }
  }
  return true;
}
