const input = `a
tv
ptoui
bontres
zoggax
wiinq
eep
houctuh
end`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
function check(words) {
  const replaceWords1 = words.replace(/[aeiou]/g, '-');
  let replaceWords1Count = 0;
  const replaceWords2 = words.replace(/[^aeiou]/g, '-');
  let replaceWords2Count = 0;
  const isVowel = replaceWords1.includes('-');
  if(!isVowel) return false;
  [...replaceWords1].forEach(item => {
    if(item === '-') replaceWords1Count ++;
    if(replaceWords1Count > 2) return false;
  });
  [...replaceWords2].forEach(item => {
    if(item === '-') replaceWords2Count ++;
    if(replaceWords2Count > 2) return false;
  });
  let currentAlpha = '';
  [...words].forEach(item => {
    if(currentAlpha === item && item !== 'e' && item !== 'o') return false
    currentAlpha = item;
  })
  return true;
}

input.map(words => {
  const ans = check(words);
  console.log(`<${words}> ${ans ? 'is acceptable.' : 'is not acceptable.'}`);
})