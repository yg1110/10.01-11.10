function permutation(arr) {
  const result = [];
  function build(current, remain) {
    if (remain.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < remain.length; i++) {
      const newPermutation = current.concat(remain[i]);
      const left = [...remain.slice(0, i), ...remain.slice(i + 1)];
      build(newPermutation, left);
    }
  }
  build([], arr);
  return result;
}

const elements = [1, 2, 3];
const permutations = permutation(elements);
console.log(permutations);