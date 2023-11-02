const input = `5
1 6
3 7
6 2
7 100
9 635`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const solve = () => {
  const T = input.shift();
  for(let i=0; i<T; i++){
    const [a, b] = input[i].split(' ');
    let pow = 1;
    for (let j = 0; j < b; j++) {
      pow = (pow * a) % 10;
    }
    console.log(pow === 0 ? 10 : pow);
  }
};
solve()
