const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map(el => [el]);
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
  }

  // const getPermutations = function (arr, selectNumber) {
  //   const results = [];
  //   if (selectNumber === 1) return arr.map(el => [el]);
  //   arr.forEach((fixed, index, origin) => {
  //     const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
  //     const permutations = getPermutations(rest, selectNumber - 1);
  //     const attached = permutations.map((el) => [fixed, ...el]);
  //     results.push(...attached);
  //   });
  //   return results;
  // }

  while(input.length) {
    const lotto = input.shift().split(' ').map(Number);
    const k = lotto.shift();
    if(k === 0) return;
    const numbers = getCombinations(lotto, 6);
    numbers.forEach(el => {
      console.log(el.join(' '))
    })
    if(input.length > 1) {
      console.log('')
    }
  }
};
solve()
