// Yeesh, I really should have just used a reduce.
// https://www.codewars.com/kata/550f22f4d758534c1100025a
// Returns array of movements
// movements contain the source index, where it started, and where it ends
function getMovementTrace(arr) {
  const coordTrans = {
    'NORTH': [0,1],
    'SOUTH': [0,-1],
    'EAST': [1, 0],
    'WEST': [-1, 0]
  };
  let baseCoord = [0, 0];
  const movements= [];
  arr.forEach((move, i) => {
    const start = baseCoord;
    const trans = coordTrans[move];
    const end = [start[0] + trans[0],
                 start[1] + trans[1]]
    
    movements.push({i, start, end});
    baseCoord = end;
  });
  return movements;
}

// Returns array of redundent directions (specifically their indexes)
function getBadDirections(arr, movements) {
  const badDirections = new Set();
  for (const m1 of movements) {
    const m1Start = m1.start.toString();
    const m1End = m1.end.toString();
    const m1I = m1.i;
    if (badDirections.has(m1I)) continue;
    for (const m2 of movements) {
      const m2Start = m2.start.toString();
      const m2End = m2.end.toString();
      const m2I = m2.i;
      if (badDirections.has(m2I)) continue;
      if (m1Start == m2End && m1End == m2Start) {
        badDirections.add(m1I).add(m2I);
        break;
      }
    }
  }
  return badDirections;
}
// Main function
function dirReduc(arr) {
  const movementTrack = getMovementTrace(arr);
  const badDirs = getBadDirections(arr, movementTrack);
  return arr.filter((_, i) => !badDirs.has(i));
}
