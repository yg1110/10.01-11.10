function solution(ingredient) {
  const stack = [];
  let count = 0;
  ingredient.forEach((el) => {
    stack.push(el);
    if(stack.length >= 4) {
      const s = stack.slice(-4).join('');
      if(s === '1231') {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  })
  return count;
}
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(ingredient))