const input = `3
29
38
12
57
74
40
85
61`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  const max = [...input].sort((a,b) => b - a)[0];
  const index = input.findIndex((num) => num === max) + 1;
  return `${max}\n${index}`
};
console.log(solve())
