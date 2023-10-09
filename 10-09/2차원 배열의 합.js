const input = `3 3
2 5 7
4 1 2
4 3 3
6
1 1 3 3
2 2 3 3
1 3 3 3
1 1 2 3
2 1 3 2
1 2 2 3
`.trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  const [N, M] = input.shift();
  const origin = [];
  for(let i=0; i<N; i++) {
    origin.push(input.shift().split(" ").map(Number))
  }
  const T = input.shift();
  for(let w=0; w<T; w++) {
    let sum = 0;
    const [i, j, x, y] = input.shift().split(" ").map(Number);
    for(let u=i-1; u<x; u++) {
      for(let v=j-1; v<y; v++) {
        sum += origin[u][v];
      }
    }
    console.log(sum);
  }
};
solve();
