// Robot in a Grid 

const MAZE = [
  [false, false, true, false, false],
  [false, true, false, false, false],
  [false, false, true, false, false],
  [true, false, false, false, false]
]

type Point = {
  r: number,
  c: number

}

function generatePath(maze: boolean[][], row: number, col: number, path: Array<Point>, failedPoints: Set<Point>): boolean{

  /* If out of bounds or not available, return. */

  if(col<0 || row<0 || maze[row][col]){
    return false;
  }

  const newPoint: Point = {
    r: row,
    c: col
  }

  if(failedPoints.has(newPoint)) return false;

  const isAtOrigin = (row===0) && (col===0);


  if(isAtOrigin || generatePath(maze, row, col-1, path, failedPoints) || generatePath(maze, row-1, col, path, failedPoints)){
    // const newPoint: Point = {
    //   r: row,
    //   c: col
    // }
    path.push(newPoint)
    return true;

  }

  failedPoints.add(newPoint)
  return false;

}

function getPath(maze: boolean[][]): Array<Point> | null{
  if(maze===null || maze.length === 0) return null;

  const path: Array<Point> = new Array();
  const failedPoints = new Set<Point>()

  if(generatePath(maze, maze.length-1, maze[0].length-1, path, failedPoints)){
    return path;
  }

  return null;
}

// Complexity
// This solution is O(2^(r+c))
// Using a HashSet time complexity O(r*c)

console.log(getPath(MAZE))