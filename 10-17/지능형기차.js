const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  let people = 0;
  let max = 0;
  input.forEach((el) => {
    const [out, enter] = el.split(' ').map(Number);
    people -= out;
    people += enter;
    if(max < people) {
      max = people;
    }
  })
  return max;
};
console.log(solve())
