const input = `6 3`.trim().split(' ').map(Number);
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const solve = () => {
  const [N, K] = input;
  const divisor = [1];
  for(let i=2; i<=N/2; i++) {
    if(N % i === 0) {
      divisor.push(i)
    }
  }

  return divisor.length + 1 < K ? 0 : [...divisor, N][K - 1];
};
console.log(solve())
