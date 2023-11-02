const input = `3
40 40 40`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  const N = input[0];
  const T = input[1].split(' ');
  let Y = 0;
  let M = 0;
  for(let i=0; i<N; i++) {
    Y += Math.floor(T[i] / 30 + 1) * 10;
    M += Math.floor(T[i] / 60 + 1) * 15;
  }
  return Y === M ? `Y M ${Y}` : Y > M ? `M ${M}` : `Y ${Y}`;
};
console.log(solve())
