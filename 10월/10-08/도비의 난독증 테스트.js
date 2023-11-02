// const input = `3
// Cat
// fat
// bAt
// 4
// call
// ball
// All
// Hall
// 0`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  for(let i = 0; i<input.length-1; i++) {
    const T = Number(input[i]);
    const words = input.slice(i + 1, i + T + 1).sort((a, b) => {
      if(b.toLowerCase() > a.toLowerCase()) return -1;
      if(b.toLowerCase() < a.toLowerCase()) return 1;
      return 0;
    })
    console.log(words[0]);
    i += T;
  }
};
solve()
