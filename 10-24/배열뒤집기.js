const arr = [1, 2, {a:1} ];

function arrReverse(arr) {
  return Array.isArray(arr) ? arr.reverse().map(item => arrReverse(item)) : arr
}

const res = arr.map(item => arrReverse(item)).reverse()
console.log(res)