const input = `3
0
0
0
10
1
2
4
8
16
32
64
128
256
-512
6
9223372036854775807
9223372036854775806
9223372036854775805
-9223372036854775807
-9223372036854775806
-9223372036854775804
`.trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  for(let i=0; i<input.length; i++) {
    const n = Number(input[i]);
    let sum = BigInt(0);
    for(let j=1; j<=n; j++) {
      sum += BigInt(input[i + j]);
    }
    i += n;
    if(sum.toString() == 0) {
      console.log("0")
    } else {
      if(sum.toString() > 0) {
        console.log("+")
      } else {
        console.log("-")
      }
    }
  }
};
solve()
