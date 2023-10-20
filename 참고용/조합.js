function combination(arr, k) {
  const result = [];

  function build(temp, start) {
    if (temp.length === k) {
      result.push([...temp]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      build(temp, i + 1);
      temp.pop();
    }
  }

  build([], 0);
  return result;
}

const elements = [1, 2, 3, 4];
const k = 2;
const combinations = combination(elements, k);
console.log(combinations);