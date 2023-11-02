const input = `20
7
23
19
10
15
25
8
13`.trim().split('\n').map(Number);
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let dwarf = null;
const sum = input.reduce((acc, curr) => {
  return acc + curr;
}, 0);
for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - input[i] - input[j] === 100) {
      dwarf = input.filter(
        (height) => height !== input[i] && height !== input[j]
      ).sort((a, b) => a-b);
      break;
    }
  }

  if (dwarf) {
    break;
  }
}

console.log(dwarf.join('\n'))