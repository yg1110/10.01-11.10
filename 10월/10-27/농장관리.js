// const input = `8 7
// 4 3 2 2 1 0 1
// 3 3 3 2 1 0 1
// 2 2 2 2 1 0 0
// 2 1 1 1 1 0 0
// 1 1 0 0 0 1 0
// 0 0 0 1 1 1 0
// 0 1 2 2 1 1 0
// 0 1 1 1 2 1 0`.trim().split('\n');

// const input = `3 5
// 1 1 1 1 1
// 1 2 1 2 1
// 1 1 1 1 1`.trim().split('\n');

// const input = `5 6
// 1 1 1 1 1 1
// 1 3 2 1 2 1
// 1 2 1 1 2 1
// 1 3 4 1 1 1
// 1 4 1 1 4 1`.trim().split('\n');

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const [N, M] = input.shift().split(" ").map(Number);
  const map = input.map(item => item.split(" ").map(Number));
  const visited = Array.from(Array(N), () => Array(M).fill(false))
  function bfs(x, y) {
    const queue = [x, y];
    let isHigh = true;
    while(queue.length) {
      visited[x][y] = true;
      x = queue.shift();
      y = queue.shift();
      for(let i=0; i<8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if(map[x][y] < map[nx][ny]) isHigh = false;
        if(visited[nx][ny]) continue;
        if(map[x][y] !== map[nx][ny]) continue;
        visited[nx][ny] = true;
        queue.push(nx);
        queue.push(ny);
      }
    }
    return isHigh;
  }
  let count = 0;
  for(let i=0; i<N; i++) {
    for(let j=0; j<M; j++) {
      if(!visited[i][j]) {
        count += bfs(i, j);
      }
    }
  }
  return count;
};
console.log(solve());
