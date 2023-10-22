function solution(park, routes) {
  const map = park.map(el => el.split(''))
  const maxX = map[0].length - 1;
  const maxY = map.length -1;
  let y = park.findIndex((s) => s.includes("S"));
  let x = park[y].indexOf("S");

  routes.forEach(r => {
    const [dir, move] = r.split(' ');
    let currentX = x;
    let currentY = y;
    let flag = true;
    for(let i=0; i<move; i++) {
      if (dir === "E") currentX++;
      else if (dir === "W") currentX--;
      else if (dir === "S") currentY++;
      else if (dir === "N") currentY--;

      if(
        currentX < 0 ||
        currentX > maxX ||
        currentY < 0 ||
        currentY > maxY ||
        map[currentY][currentX] === 'X'
      ) {
        flag = false;
        break;
      }
    }

    if (flag) {
      x = currentX;
      y = currentY;
    }
  })
  return [y, x];
}
const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3", "W 1"];
console.log(solution(park, routes))