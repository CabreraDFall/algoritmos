function findSafestPath(dream) {
  // Matriz Size
  let n = dream.length;
  let m = dream[0].length;

  // Creating a mental map
  /* map  */
  // [0,0,0] //
  // [0,0,0] //
  // [0,0,0] //

  const map = Array.from({ length: n }, () => Array(m).fill(0));

  // Start point
  /* map  */
  // [X,0,0] //
  // [0,0,0] //
  // [0,0,0] //

  map[0][0] = dream[0][0];

  // sum - 1st row
  /* map  */
  // [X,X,X] //
  // [0,0,0] //
  // [0,0,0] //

  for (let j = 1; j < m; j++) {
    map[0][j] = map[0][j - 1] + dream[0][j];
  }

  // sum - 1st COL
  for (let i = 1; i < n; i++) {
    map[i][0] = map[i - 1][0] + dream[i][0];
  }
  /* map  */
  // [X,X,X] //
  // [X,0,0] //
  // [X,0,0] //

  // sum - Other
  /* map  */
  // [X,X,X] //
  // [X,X,X] //
  // [X,X,X] //

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      map[i][j] = dream[i][j] + Math.min(map[i - 1][j], map[i][j - 1]);
    }
  }

  return map[n - 1][m - 1];
}
const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(findSafestPath(dream));
