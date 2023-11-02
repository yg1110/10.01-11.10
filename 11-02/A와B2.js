const input = `A
BABA`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [word1, word2] = input;
let ans = 0;
function build(word2) {
  if(word2.length < word1.length) return;
  if(word1 === word2) {
    ans = 1;
    return;
  }
  if(word2[word2.length - 1] === 'A') {
    build(word2.slice(0, word2.length -1))
  }
  if(word2[0] === 'B') {
    build([...word2.slice(1)].reverse().join(""))
  }
}

function solution() {
  if(word1 === word2) return 1;
  build(word2);
  return ans;
}
console.log(solution());
