const input = `9 23
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBW`.trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  const [N, M] = input.shift().split(' ');
  const chess = [];
  for(let i=0; i<N; i++) {
    chess.push(input.shift().split(''))
  }

  let paint1 = 0;
  let paint2 = 0;
  for(let i=0; i<N; i++) {
    for(let j=0; j<M; j++) {
      if(i % 2 === 0 && j % 2 === 0 && chess[i][j] !== 'W') {
        paint1++;
      }
      if(i % 2 === 1 && j % 2 === 1 && chess[i][j] !== 'W') {
        paint1++;
      }
      if(i % 2 === 0 && j % 2 === 1 && chess[i][j] !== 'B') {
        paint1++;
      }
      if(i % 2 === 1 && j % 2 === 0 && chess[i][j] !== 'B') {
        paint1++;
      }
      
      if(i % 2 === 0 && j % 2 === 0 && chess[i][j] !== 'B') {
        paint2++;
      }
      if(i % 2 === 1 && j % 2 === 1 && chess[i][j] !== 'B') {
        paint2++;
      }
      if(i % 2 === 0 && j % 2 === 1 && chess[i][j] !== 'W') {
        paint2++;
      }
      if(i % 2 === 1 && j % 2 === 0 && chess[i][j] !== 'W') {
        paint2++;
      }
    }
  }
  console.log(`paint1`, paint1);
  console.log(`paint2`, paint2);
  return Math.min(paint1, paint2);
};

console.log(solve());