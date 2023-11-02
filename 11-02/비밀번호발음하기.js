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
input.forEach(words => {
  const word = words.split("");
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const check1 = vowel.some(w => words.includes(w))
  let check2 = true;
  let check3 = true;
  let consCount = 0;
  let vowelCount = 0;
  let prevWord = '';
  for(let i=0; i<word.length; i++) {
    if(word[i] === prevWord && word[i] !== 'o' && word[i] !== 'e') {
      check3 = false;
      break;
    }
    if(vowel.includes(word[i])) {
      consCount = 0;
      vowelCount++;
    } else {
      vowelCount = 0;
      consCount++;
    }
    if(consCount >= 3 || vowelCount >= 3) {
      check2 = false;
      break;
    }
    prevWord = word[i];
  }
  console.log(`<${words}> ${check1 && check2 && check3 ? 'is acceptable.' : 'is not acceptable.'}`);
})