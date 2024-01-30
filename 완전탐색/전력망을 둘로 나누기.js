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

function solution(n, wires) {
  let anwser = Infinity;

  const graph = Array.from(Array(n + 1), () => []);
  for (const wire of wires) {
    let [from, to] = wire;

    graph[from].push(to);
    graph[to].push(from);
  }

  const bfs = (start, except) => {
    let count = 0;
    let visited = Array.from(Array(n + 1), () => false);
    let queue = [start];

    visited[start] = true;

    while (queue.length) {
      let index = queue.shift();
      graph[index].forEach((element) => {
        if (element !== except && visited[element] === false) {
          visited[element] = true;
          queue.push(element);
        }
      });
      count++;
    }

    return count;
  };

  wires.forEach((element) => {
    let [from, to] = element;
    anwser = Math.min(anwser, Math.abs(bfs(from, to) - bfs(to, from)));
  });

  return anwser;
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
