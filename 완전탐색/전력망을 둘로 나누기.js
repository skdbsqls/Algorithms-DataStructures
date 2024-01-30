/*
[문제 설명]
n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다. 
당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다. 
이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.

송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다. 
전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때, 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.

[제한사항]
- n은 2 이상 100 이하인 자연수입니다.
- wires는 길이가 n-1인 정수형 2차원 배열입니다.
- wires의 각 원소는 [v1, v2] 2개의 자연수로 이루어져 있으며, 이는 전력망의 v1번 송전탑과 v2번 송전탑이 전선으로 연결되어 있다는 것을 의미합니다.
- 1 ≤ v1 < v2 ≤ n 입니다.
- 전력망 네트워크가 하나의 트리 형태가 아닌 경우는 입력으로 주어지지 않습니다.
*/

// 풀이 1 (bfs)
function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER; // 최소값을 찾기 위함

  // 인덱스는 0부터 전선은 1부터 시작하기 때문에 n + 1
  const graph = Array.from(Array(n + 1), () => []);
  // 인덱스는 노드, 해당 인덱스에 연결된 노드들을 저장
  // 각 전선을 연결된 노드들로 그래프에 추가
  for (const wire of wires) {
    let [from, to] = wire;

    graph[from].push(to);
    graph[to].push(from);
  }

  // start는 bfs 탐색 시작점, expect는 제외할 노드(방문하지 않을 노드)
  const bfs = (start, except) => {
    let count = 0; // 도달할 수 있는 노드의 개수
    let queue = [start];
    // 주어진 배열의 크기와 같은(n + 1) 배열 선언, false 초기화
    let visited = Array.from(Array(n + 1), () => false);

    // 시작 노드 방문 처리
    visited[start] = true;

    // 더 이상 방문할 노드가 없으면 종료
    while (queue.length) {
      let index = queue.shift(); // 노드 선택
      // 해당 인덱스에 연결된 노드들 중
      graph[index].forEach((element) => {
        // 제외한 노드가 아니고, 방문하지 않은 노드라면
        if (element !== except && visited[element] === false) {
          // 노드 방문 후 방문 처리 true
          visited[element] = true;
          // 다음 방문을 위해 queue에 담기
          queue.push(element);
        }
      });
      // 도달한 노드의 개수 + 1
      count++;
    }

    return count;
  };

  // 주어진 전선들을 하나씩 끊으면서 송전탑의 개수가 가장 비슷했을 때 차이 구하기
  wires.forEach((element) => {
    let [from, to] = element;
    answer = Math.min(answer, Math.abs(bfs(from, to) - bfs(to, from)));
  });

  return answer;
}
