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

function generatePath(maze: boolean[][], row: number, col: number, path: Array<Point>): boolean{

  /* If out of bounds or not available, return. */

  if(col<0 || row<0 || maze[row][col]){
    return false;
  }

  const isAtOrigin = (row===0) && (col===0);


  if(isAtOrigin || generatePath(maze, row, col-1, path) || generatePath(maze, row-1, col, path)){
    const newPoint: Point = {
      r: row,
      c: col
    }
    path.push(newPoint)
    return true;

  }

  return false;

}

function getPath(maze: boolean[][]): Array<Point> | null{
  if(maze===null || maze.length === null) return null;

  const path: Array<Point> = new Array();

  if(generatePath(maze, maze.length-1, maze[0].length-1, path)){
    return path;
  }

  return null;
}

console.log(getPath(MAZE))