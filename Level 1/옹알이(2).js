/*
[문제 설명]
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

[제한사항]
- 1 ≤ babbling의 길이 ≤ 100
- 1 ≤ babbling[i]의 길이 ≤ 30
- 문자열은 알파벳 소문자로만 이루어져 있습니다.
*/

function solution(babbling) {
  let count = 0; // 발음할 수 있는 단어의 개수
  const pronunciations = ["aya", "ye", "woo", "ma"]; // 발음할 수 있는 단어

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < pronunciations.length; j++) {
      // 연속해서 같은 발음을 하는 것은 불가능 -> break
      if (babble.includes(pronunciations[j].repeat(2))) {
        break;
      }

      // split을 이용해 발음할 수 있는 단어를 제외
      babble = babble.split(pronunciations[j]).join(" ");
    }

    // 발을할 수 있는 단어는 제외된 상태이기 때문에
    // babble에 문자가 남아있다면 발음할 수 없는 단어
    // 즉, babble의 문자가 남아있지 않다면 모두 발음할 수 있는 단어로 이루어진 것이므로
    // count + 1
    if (babble.split(" ").join("").length === 0) {
      count++;
    }
  }

  return count;
}
