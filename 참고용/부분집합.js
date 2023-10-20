function powerSet(arr) {
  const subsets = [];
  function build(currentSubset, startIndex) {
    subsets.push(currentSubset);
    for (let i = startIndex; i < arr.length; i++) {
      build(currentSubset.concat(arr[i]), i + 1);
    }
  }
  build([], 0);
  return subsets;
}

const elements = [1, 2, 3];
const powerSets = powerSet(elements);
console.log(powerSets);