const input = `4
1 900 901 902 903 904 905 906 907 908 909 910 911 912 913 914 915 916 917 918 919
2 919 918 917 916 915 914 913 912 911 910 909 908 907 906 905 904 903 902 901 900
3 901 902 903 904 905 906 907 908 909 910 911 912 913 914 915 916 917 918 919 900
4 918 917 916 915 914 913 912 911 910 909 908 907 906 905 904 903 902 901 900 919`.trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift());
for(let i=0; i<T; i++) {
  const height = input[i].split(" ").map(Number);
  const t = height.shift();
  let ans = 0;
  for(let i=0; i<height.length -1; i++) {
    for(let j=i+1; j<height.length; j++) {
      if(height[i] > height[j]) {
        [height[i], height[j]] = [height[j], height[i]]
        ans++;
      }
    }
  }
  console.log(t, ans);
}
