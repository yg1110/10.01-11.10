const s = "a   b";
function solution(s) {
  const words = s.split(' ')
  return words.map(word => {
    if(word === "") return word;
    const a = word[0];
    const b = word.slice(1);
    return a.toUpperCase() + b.toLowerCase();
  }).join(' ')
}
console.log(solution(s))