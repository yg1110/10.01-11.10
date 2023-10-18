function solution(n, m) {
  function gcd(a, b) {
    let r
    while (b != 0) {
      r = a % b
      a = b
      b = r
    }
    return a
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b)
  }

  return [gcd(n, m), lcm(n, m)];
}
const n = 5;
const m = 2;
console.log(solution(n, m))