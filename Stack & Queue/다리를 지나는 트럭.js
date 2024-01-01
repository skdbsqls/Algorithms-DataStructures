/* 
[문제 설명]
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 
모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 
다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 
단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 
무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 
이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

[제한 조건]
- bridge_length는 1 이상 10,000 이하입니다.
- weight는 1 이상 10,000 이하입니다.
- truck_weights의 길이는 1 이상 10,000 이하입니다.
- 모든 트럭의 무게는 1 이상 weight 이하입니다.
*/

// 풀이 1
function solution(bridge_length, weight, truck_weights) {
  let answer = 0; // 경과 시간
  let bridge = new Array(bridge_length).fill(0); // 다리에 올라갈 수 있는 트럭 수에 맞게 다리 생성

  // 다리를 건너는 트럭이 없을 때까지 (모든 트럭이 다리를 건널 떄까지 반복)
  while (bridge.length) {
    // 다리를 건너는 트럭 중 첫 번째 요소 삭제
    bridge.shift();

    // 대기 트럭이 존재하는 경우
    if (truck_weights.length) {
      // 다리를 건너는 트럭의 무게 합
      const bridge_weight = bridge.reduce((acc, cur) => acc + cur, 0);

      // 다리가 견딜 수 있는 무게에 여유가 있는 경우
      if (bridge_weight + truck_weights[0] <= weight) {
        // 대기 트럭의 첫 번째 요소 삭제 및 다리에 올리기
        bridge.push(truck_weights.shift());
      }
      // 다리가 견딜 수 있는 무게가 끝난 경우
      else bridge.push(0);
    }
    // 경과 시간 +1초
    answer++;
  }
  return answer;
}

// 풀이 2
function solution(bridge_length, weight, truck_weights) {
  let time = 0; // 경과 시간
  let qu = [[0, 0]]; // [트럭 무게, 나갈 시간]
  let bridge_weight = 0; // 다리 위 트럭의 총 무게

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때까지 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // (1) 현재 시간이 큐의 맨 처음 요소의 나갈 시간과 같다면
    //     첫 번째 요소를 내보내고 다르 위 트럭의 무게에서 빼준다
    if (qu[0][1] === time) {
      bridge_weight -= qu.shift()[0];
    }
    // (2) 다리가 견딜 수 있는 무게에 여유가 있다면
    //     다리 위 트럭 무게를 더해주고, 큐 위에 새로운 트럭도 추가한다
    if (bridge_weight + truck_weights[0] <= weight) {
      bridge_weight += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // (3) 다리가 견딜 수 있는 무게가 끝난 경우
      //     큐의 첫 번째 요소가 빠지도록 그 시간으로 점프한다
      if (qu[0]) {
        time = qu[0][1] - 1;
      }
    }
    // 경과 시간 업데이트
    time++;
  }
  return time;
}
