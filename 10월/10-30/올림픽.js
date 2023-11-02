const input = `5 4
1 3 0 0
2 3 0 0
3 2 0 0
4 1 0 0
5 2 0 0`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(" ").map(Number);

let rank = 0;
let currentRank = 0;
let tempScore = 0;
const score = input.sort((a, b) => {
  const s1 = a.split(" ").map(Number);
  const s2 = b.split(" ").map(Number);
  if(s1[1] > s2[1]) return -1;
  else if(s1[1] < s2[1]) return 1;
  else {
    if(s1[2] > s2[2]) return -1;
    else if(s1[2] < s2[2]) return 1;
    else {
      if(s1[3] > s2[3]) return -1;
      else if(s1[3] < s2[3]) return 1;
      return 0;
    }
  }
}).map(item=>{
  const s = item.split(" ").map(Number);
  currentRank++;
  if(tempScore !== s[1] * 100 + s[2] * 10 + s[3]) {
    tempScore = s[1] * 100 + s[2] * 10 + s[3];
    rank = currentRank;
  }
  return {
    k: s[0],
    rank: rank
  }
})

const findRank = score.find(item => item.k === K).rank;
console.log(findRank)