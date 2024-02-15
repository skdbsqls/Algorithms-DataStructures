/*
[문제 설명]
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

[제한 조건]
- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.
*/

function solution(s, n) {
  let answer = "";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자
  let lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자

  for (let i = 0; i < s.length; i++) {
    // 공백일 때
    if (s[i] === " ") {
      answer += " ";
    }
    // 대문자일 때
    if (upper.includes(s[i])) {
      let index = upper.indexOf(s[i]) + n; // 인덱스 구하기
      index >= upper.length // 인덱스가 대문자 배열의 길이보다 커지면 ex) Z에서 1만큼 밀리는 경우 A
        ? (answer += upper[index - upper.length]) // 인덱스는 앞서 구한 인덱스 값에서 upper.length만큼을 빼서 정확한 인덱스를 찾아줌
        : (answer += upper[index]);
    }
    // 소문자일 때
    if (lower.includes(s[i])) {
      let index = lower.indexOf(s[i]) + n;
      index >= lower.length
        ? (answer += lower[index - lower.length])
        : (answer += lower[index]);
    }
  }
  return answer;
}
