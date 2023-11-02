function solution(k, score) {
  const answer = [];
  for(let i=1; i<=score.length; i++) {
    const s = [...score].slice(0, i).sort((a, b) => a - b);
    const index = s.length - k < 0 ? 0 : s.length - k;
    const honor = s.slice(index);
    answer.push(honor[0])
  }
  return answer;
}
const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];
console.log(solution(k, score))