const input = `20
7
23
19
10
15
25
8
13`.trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solve = () => {
  const use = {};
  const powerSet = (deps) => {
    if(deps === 7) {
      let sum = 0;
      const ans = [];
      for(let i=0; i<9; i++) {
        if(use[i]) {
          sum += Number(input[i]);
          ans.push(input[i])
          // if(sum > 100) {
          //   ans.length = 0;
          //   break;
          // }
          
          if(ans.length === 7) {
            console.log(`sum`, sum);
            console.log(`ans`, ans);
          }
        }
      }
      // if(ans.length) {
      //   console.log(`ans`, ans);
      // }
      return;
    }
    use[deps] = true;
    powerSet(deps + 1);
    use[deps] = false;
    powerSet(deps + 1)
  }

  powerSet(0);

  // console.log(`dwarf`, dwarf);
};
solve()
