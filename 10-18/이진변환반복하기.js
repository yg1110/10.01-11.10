function solution(s) {
  const conversion = (s, r, c) => {
    const a = s.split('').filter(el => {
      if(el === '0') {
        c++;
      }
      return el === '1'
    }).join('');
    const b = a.length.toString(2)
    if(b !== '1') {
      return conversion(b, r + 1, c)
    }
    return [r, c];
  }
  return conversion(s, 1, 0);
}
const s = "110010101001";
console.log(solution(s))