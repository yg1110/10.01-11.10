const input = `6
55 181
54 181
56 181
55 179
56 182
54 190`.trim().split('\n');
//2 2 1 3 1 1
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift());
const ans = [];
for(let i=0; i<T; i++) {
  let count = 1;
  for(let j=0; j<T; j++) {
    if(i === j) continue;
    const [height1, weight1] = input[i].split(" ").map(Number)
    const [height2, weight2] = input[j].split(" ").map(Number)
    if(height1 < height2 && weight1 < weight2) count++;
  }
  ans.push(count);
}
console.log(ans.join(" "));