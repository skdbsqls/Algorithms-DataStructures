/*
[문제 설명]
어떤 게임에는 붕대 감기라는 기술이 있습니다.

붕대 감기는 t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복합니다. t초 연속으로 붕대를 감는 데 성공한다면 y만큼의 체력을 추가로 회복합니다. 
게임 캐릭터에는 최대 체력이 존재해 현재 체력이 최대 체력보다 커지는 것은 불가능합니다.

기술을 쓰는 도중 몬스터에게 공격을 당하면 기술이 취소되고, 공격을 당하는 순간에는 체력을 회복할 수 없습니다. 
몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 붕대 감기를 다시 사용하며, 연속 성공 시간이 0으로 초기화됩니다.

몬스터의 공격을 받으면 정해진 피해량만큼 현재 체력이 줄어듭니다. 이때, 현재 체력이 0 이하가 되면 캐릭터가 죽으며 더 이상 체력을 회복할 수 없습니다.

당신은 붕대감기 기술의 정보, 캐릭터가 가진 최대 체력과 몬스터의 공격 패턴이 주어질 때 캐릭터가 끝까지 생존할 수 있는지 궁금합니다.

붕대 감기 기술의 시전 시간, 1초당 회복량, 추가 회복량을 담은 1차원 정수 배열 bandage와 최대 체력을 의미하는 정수 health, 몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열 attacks가 매개변수로 주어집니다. 
모든 공격이 끝난 직후 남은 체력을 return 하도록 solution 함수를 완성해 주세요. 만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return 해주세요.

[제한사항]
- bandage는 [시전 시간, 초당 회복량, 추가 회복량] 형태의 길이가 3인 정수 배열입니다.
 - 1 ≤ 시전 시간 = t ≤ 50
 - 1 ≤ 초당 회복량 = x ≤ 100
 - 1 ≤ 추가 회복량 = y ≤ 100
- 1 ≤ health ≤ 1,000
- 1 ≤ attacks의 길이 ≤ 100
 - attacks[i]는 [공격 시간, 피해량] 형태의 길이가 2인 정수 배열입니다.
 - attacks는 공격 시간을 기준으로 오름차순 정렬된 상태입니다.
 - attacks의 공격 시간은 모두 다릅니다.
 - 1 ≤ 공격 시간 ≤ 1,000
 - 1 ≤ 피해량 ≤ 100
*/

// 풀이 1
function solution(bandage, health, attacks) {
  let [t, x, y] = bandage; // 시전 시간, 초당 회복량, 추가 회복량
  let curHealth = health; // 현재 체력
  let curAttack = 0; // 최근 공격 시간

  for (let i = 0; i < attacks.length; i++) {
    let [attackTime, damage] = attacks[i]; // 공격 시간, 피해량
    let timeDiff = attackTime - curAttack - 1; // 이전 공격과 현재 공격 시간의 차이(공격 시간 차)
    let contiSuccess = Math.floor(timeDiff / t); // 연속 성공 횟수(공격 시간 차 / 시전 시간)
    let totalRecovery = timeDiff * x + contiSuccess * y; // 총 회복량(공격 시간 차 * 초당 회복량 + 연속 성공 횟수 * 추가 회복량)

    // 현재 체력 업데이트
    curHealth += totalRecovery;
    // 단, 현재 체력이 최대 체력보다 커지는 것은 불가능
    if (curHealth >= health) curHealth = health;

    // 공격 받을 시 체력 감소
    curHealth -= damage;
    // 단, 체력이 0이하면 죽음(-1 반환)
    if (curHealth <= 0) return -1;

    // 최근 공격 시간 업데이트
    curAttack = attackTime;
  }

  return curHealth;
}

// 풀이 2
function solution(bandage, health, attacks) {
  let [t, x, y] = bandage; // 시전 시간, 초당 회복량, 추가 회복량
  let lastAttack = attacks[attacks.length - 1][0]; // 마지막 공격 시간
  let curHealth = health; // 현재 체력
  let contiSuccess = 0; // 연속 공격

  for (let i = 0; i <= lastAttack; i++) {
    // 현재 시간이 공격 시간과 같으면 해당 공격 진행
    let attack = attacks.find((attack) => attack[0] === i);

    // 공격 시간이면
    if (attack) {
      curHealth -= attack[1]; // 현재 체력 감소
      contiSuccess = 0; // 연속 공격 초기화

      // 단, 체력이 0이하면 죽음(-1 반환)
      if (curHealth <= 0) return -1;
    }
    // 회복 시간이면
    else {
      contiSuccess++; // 연속 공격 + 1
      curHealth += x; // 초당 회복
      // 단, 현재 체력이 최대 체력보다 커지는 것은 불가능
      if (curHealth >= health) curHealth = health;
      // 연속 공격 횟수가 시전 시간과 같으면
      else if (contiSuccess === t) {
        curHealth += y; // 추가 회복
        // 단, 현재 체력이 최대 체력보다 커지는 것은 불가능
        if (curHealth >= health) curHealth = health;
        contiSuccess = 0; // 연속 공격 초기화
      }
    }
  }

  return curHealth;
}
