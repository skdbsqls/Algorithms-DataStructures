const graph = {
  1: [2, 3],
  2: [4, 5],
  3: [],
  4: [],
  5: [6],
  6: [],
};

const visited = {};

// DFS 구현
function dfs(graph, start, visited) {
  if (!visited[start]) {
    console.log(start);
    visited[start] = true;

    for (let neighbor of graph[start]) {
      dfs(graph, neighbor, visited);
    }
  }
}

dfs(graph, 1, visited);

// BFS 구현
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

bfs(graph, 1);
