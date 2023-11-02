const input = `7`.trim();
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let count = 0;
function facto(n) {
  if(n < 2) return 1;
  return n * facto(n-1);
}
function solution() {
  const N = Number(input);
  // for(let i=0; i<N; i+=10) {
  //
  // }
  console.log(`facto(N)`, facto(N));
  count += facto(N).toString().split("")
    .filter(item => item === '0').length;
  return count;
}
console.log(solution());
