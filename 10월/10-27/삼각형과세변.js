const input = `7 7 7
6 5 4
3 2 5
2 2 5
0 0 0`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  input.pop();
  const triangle = input.map(item => item.split(' ')
    .map(Number).sort((a, b) => b - a))
  return triangle.map(item => {
    if(item[0] === item[1] && item[1] === item[2]) return 'Equilateral';
    if(item[0] >= item[1] + item[2]) return 'Invalid'
    if(item[0] === item[1] || item[1] === item[2]) return 'Isosceles';
    return 'Scalene'
  }).join('\n')
};
console.log(solve());
