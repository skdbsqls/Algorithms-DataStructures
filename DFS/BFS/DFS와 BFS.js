/*
[문제]
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 
단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 
정점 번호는 1번부터 N번까지이다.

[입력]
첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 
다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 
어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 
입력으로 주어지는 간선은 양방향이다.

[출력]
첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. 
V부터 방문된 점을 순서대로 출력하면 된다.
*/

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");

// input 값을 그래프 배열로 변경
const [N, M, V] = input[0].split(" ").map(Number);
const graph = new Array(N + 1); // 인덱스는 0부터, node는 1부터 시작
// 배열의 요소를 배열로 (2차원 배열)
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
// 한 정점과 간선으로 연결된 정점들을 배열에 담아준다
for (let i = 0; i < M; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to); // 양방향
  graph[to].push(from); // 양방향
}

// DFS로 탐색하기 (1)스택
const DFS1 = (graph, V) => {
  let visited = []; // 방문한 노드
  let willVisit = []; // 방문할 노드

  // 시작 노드 스택에 삽입
  willVisit.push(V);

  // 더 이상 방문할 노드가 없으면 종료
  while (willVisit.length !== 0) {
    // 노드 선택 : 스택 구조 => pop()
    let node = willVisit.pop();

    // 방문 여부 확인
    if (!visited.includes(node)) {
      // 방문하지 않았으면 헤당 노드 방문 후 방문 처리
      visited.push(node);

      // 인접한 노드 (방문할 노드)
      let nodes = graph[node];
      willVisit = [...willVisit, ...nodes.sort((a, b) => b - a)]; // 스택 구조 => 내림차순
    }
  }

  return visited;
};

// DFS로 탐색하기 (2)재귀 함수
graph.forEach((e) => e.sort((a, b) => a - b)); // 오름차순

let dfs = [];
let visited = new Array(N + 1).fill(false); // 방문 여부

const DFS2 = (V) => {
  // 노드 방문 처리
  visited[V] = true;
  dfs.push(V);

  for (let i = 0; i < graph[V].length; i++) {
    let next = graph[V][i];

    if (visited[next] === false) {
      DFS2(next);
    }
  }
};

DFS2(V);
console.log(dfs.join(" "));

// BFS로 탐색하기
const BFS = (graph, V) => {
  let visited = []; // 방문한 노드
  let willVisit = []; // 방문할 노드

  // 시작 노드 큐에 삽입
  willVisit.push(V);

  // 더 이상 방문할 노드가 없으면 종료
  while (willVisit.length !== 0) {
    // 노드 선택 : 큐 구조 => shift()
    let node = willVisit.shift();

    // 방문 여부 확인
    if (!visited.includes(node)) {
      // 방문하지 않았으면 헤당 노드 방문 후 방문 처리
      visited.push(node);

      // 인접한 노드 (방문할 노드)
      let nodes = graph[node];
      willVisit = [...willVisit, ...nodes.sort((a, b) => a - b)]; // 큐 구조 => 오름차순
    }
  }
  return visited;
};

// 정답
console.log(DFS1(graph, V).join(" "));
console.log(BFS(graph, V).join(" "));
