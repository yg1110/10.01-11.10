const input = `30 30`.trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const solve = () => {
  const [K, N] = input.map(Number);
  let X = K / 2;
  while(true) {
    X += K / 2;
    if(X > K) {
      break;
    }
  }
  return X;
};
console.log(solve())
