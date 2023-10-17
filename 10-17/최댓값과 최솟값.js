const s = "1 2 3 4";
function solution(s) {
  const numbers = s.split(' ').map(Number);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return min + ' ' + max;

}
console.log(solution(s))