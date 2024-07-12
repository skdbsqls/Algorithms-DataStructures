/*
[문제 설명]
선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 
썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 
따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

선행 스킬 순서 skill과 유저들이 만든 스킬트리를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

[제한 조건]
- 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
- 스킬 순서와 스킬트리는 문자열로 표기합니다.
 - 예를 들어, C → B → D 라면 "CBD"로 표기합니다
- 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
- skill_trees는 길이 1 이상 20 이하인 배열입니다.
- skill_trees의 원소는 스킬을 나타내는 문자열입니다.
 - skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
*/

// 오답
function solution(skill, skill_trees) {
  skill = skill.split(""); // 선행 스킬 순서 배열로 변환

  for (let i = 0; i < skill_trees.length; i++) {
    let tree = skill_trees[i]; // 스킬 트리
    let skills = [...skill]; // 스킬 복사

    for (let j = 0; j < tree.length; j++) {
      // 스킬 트리의 스킬이 선행 스킬 순서와 관련 없으면 pass
      if (!skill.includes(tree[j])) continue;
      // 선행 스킬 순서를 지키질 않는 스킬 트리는 불가능
      if (skills.shift() !== tree[j]) {
        skill_trees[i] = "X";
        break; // 선행 스킬을 배우지 않은 경우 뒤는 볼 필요 X
      }
      skill_trees[i] = "O"; // 선행 스킬 순서를 지킨 경우
    }
  }
  console.log(skill_trees); // ['O', 'O', 'X', 'X', 'X', 'AEX', 'X', 'X', 'O', 'X']
  console.log(skill_trees.filter((v) => v === "O").length); // 3

  // 오답 이유: 선행 스킬과 무관해 가능한 스킬트리는 "O"를 표시할 수 없는 구조
  return skill_trees.filter((v) => v === "O").length;
}

// 반례
solution("CBDK", [
  "CB",
  "CXYB",
  "BD",
  "AECD",
  "ABC",
  "AEX",
  "CDB",
  "CBKD",
  "IJCB",
  "LMDK",
]);

// function solution(skill, skill_trees) {
//   skill = skill.split(""); // 선행 스킬 순서 배열로 변환
//   let count = skill_trees.length; // 스킬 트리 총 개수

//   for (let i = 0; i < skill_trees.length; i++) {
//     let tree = skill_trees[i]; // 스킬 트리
//     let skills = [...skill]; // 스킬 복사

//     for (let j = 0; j < tree.length; j++) {
//       // 스킬 트리의 스킬이 선행 스킬 순서와 관련 없으면 pass
//       if (!skill.includes(tree[j])) continue;
//       // 선행 스킬 순서를 지키질 않는 스킬 트리는 불가능
//       if (skills.shift() !== tree[j]) {
//         count--; // 총 개수에서 -1
//         break; // 선행 스킬을 배우지 않은 경우 뒤는 볼 필요 X
//       }
//     }
//   }
//   return count;
// }
