const input = `200000000 1`.trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const solve = () => {
  const [K, N] = input.map(Number);
  if(N === 1) return -1;
  if((K * N) % (N - 1)) return (K * N) / (N - 1) + 1;
  return (K * N) / (N - 1)
};
console.log(solve())
