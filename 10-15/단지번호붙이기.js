const input = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const visit = [];
const queue = [];
const map = [];
const N = Number(input.shift());
const solve = () => {
  const house = [];
  for(let i=0; i<N; i++) {
    map.push(input.shift().split(''))
    visit.push(Array.from({length: N}, () => false))
  }

  for(let i=0; i<N; i++) {
    for(let j=0; j<N; j++) {
      if(map[i][j] === '1' && !visit[i][j]) {
        visit[i][j] = true;
        queue.push({ x: i, y: j });
        house.push(bfs());
      }
    }
  }

  house.sort((a, b) => a - b);
  console.log(house.length);
  console.log(house.join('\n'));
};


const bfs = () => {
  const di = [-1, 1, 0, 0];
  const dj = [0, 0, -1, 1];
  let cnt = 1;
  while(queue.length) {
    const { x, y } = queue.shift();
    for(let i=0; i<4; i++) {
      const ni = Number(x) + di[i];
      const nj = Number(y) + dj[i];
      if (ni >= 0 && ni < N && nj >= 0 && nj < N && map[ni][nj] === '1' && !visit[ni][nj]) {
        cnt++;
        visit[ni][nj] = true;
        queue.push({x: ni, y: nj})
      }
    }
  }
  return cnt;
}

solve();