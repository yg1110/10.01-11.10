const dx = [-1, 1, 0, 0]; // 좌, 우
const dy = [0, 0, -1, 1]; // 상, 하
let [n, m] = [4, 6];
let maze = [
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
];
let visited = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

function BFS(x, y) {
  const queue = [x, y];

  while (queue.length) {
    visited[x][y] = 1;

    x = queue.shift();
    y = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      if (maze[nx][ny] === 1 && visited[nx][ny] === 0) {
        maze[nx][ny] = maze[x][y] + 1;
        queue.push(nx, ny);
      }
    }
  }
}

function solution() {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 1) {
        BFS(row, col);
        break;
      }
    }
  }
  return maze[n - 1][m - 1];
}

console.log(solution());