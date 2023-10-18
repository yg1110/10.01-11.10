function solution(babbling) {
  const words = [
    "aya",
    "ye",
    "woo",
    "ma",
  ];
  for(let i=0; i<4; i++) {
    for(let j=0; j<4; j++) {
      if(i === j) continue;
      words.push(words[i] + words[j])
      for(let k=0; k<4; k++) {
        if(i === k || j === k) continue;
        words.push(words[i] + words[j] + words[k])
        for(let l=0; l<4; l++) {
          if(i === l || j === l || k === l) continue;
          words.push(words[i] + words[j] + words[k] + words[l])
        }
      }
    }
  }
  return babbling.filter(el => words.includes(el)).length;
}

const babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
console.log(solution(babbling))