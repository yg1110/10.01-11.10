const A = [1, 2];
const B = [3, 4];
function solution(A,B){
  let min = 0;
  const a = A.sort((a, b) => a - b);
  const b = B.sort((a, b) => b - a);
  for(let i=0; i<a.length; i++) {
    min += a[i] * b[i];
  }
  return min;
}
console.log(solution(A, B))