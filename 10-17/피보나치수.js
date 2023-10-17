const input = `10`.trim();
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const solve = () => {
  const n = Number(input);
  const fibo = (n) => {
    if(n < 2) return n;
    return fibo(n - 1) + fibo(n - 2)
  }
  return fibo(n);
};
console.log(solve())
