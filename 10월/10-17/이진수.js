const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const T = input.shift();
for(let i=0; i<T; i++) {
  const number = input.shift().toString(2);
  const index = number.split('').reverse().reduce((acc, cur, index) => {
    if(cur === '1') {
      acc.push(index)
    }
    return acc;
  }, []);
  console.log(index.join(' '));
}