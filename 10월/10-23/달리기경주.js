function solution(players, callings) {
  const playersIndex = {}
  players.forEach((player, index) => {
    playersIndex[player] = index;
  })
  callings.forEach(calling => {
    const index = playersIndex[calling];
    [players[index], players[index - 1]] = [players[index - 1], players[index]]
    playersIndex[players[index]]++;
    playersIndex[players[index - 1]]--;
  })
  return players;
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings));