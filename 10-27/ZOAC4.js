const input = `5 4 1 1`.trim().split(' ').map(Number);
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const solve = () => {
  const N = input.shift();
  const M = input.shift();
  const col = input.shift();
  const row = input.shift();
  let count = 0;
  for(let i=0; i<N; i+= col + 1) {
    for(let j=0; j<M; j+= row + 1) {
      count++;
    }
  }
  return count;
};
console.log(solve());
