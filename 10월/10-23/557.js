/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  const words = s.split(' ');
  return words.map(word => [...word].reverse().join('')).join(' ')
};

const s = "Let's take LeetCode contest"
console.log(reverseWords(s));