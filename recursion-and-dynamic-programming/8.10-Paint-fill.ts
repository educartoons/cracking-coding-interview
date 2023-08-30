
enum Color {
  Black,
  White, 
  Red, 
  Yellow, 
  Green,
}

function painFill(screen: Array<Array<Color>>, row: number, column: number, ncolor: Color): boolean{

  if(screen[row][column]=== ncolor) return false;

  return painFillW(screen, row, column, screen[row][column], ncolor); 

}

function painFillW(screen: Array<Array<Color>>, row: number, column: number, ocolor: Color, ncolor: Color): boolean{

  if(row<0 || row>=screen.length || column < 0 || column >= screen[0].length) {
    return false;
  }

  if(screen[row][column] == ocolor) {
    screen[row][column] = ncolor;

    painFillW(screen, row-1, column, ocolor, ncolor); // UP 
    painFillW(screen, row+1, column, ocolor, ncolor); // DOWN
    painFillW(screen, row, column - 1, ocolor, ncolor); // LEFT
    painFillW(screen, row, column + 1, ocolor, ncolor); // RIGHT

  }

  return true;

} 

function main(){
  let screen = [
    [Color.Green, Color.Green, Color.Green, Color.Green, Color.Green, Color.Green],
    [Color.Green, Color.Green, Color.Red, Color.Black, Color.Red, Color.Green],
    [Color.Red, Color.Red, Color.Black, Color.Yellow, Color. Yellow, Color.Red],
    [Color.Green, Color.Red, Color.Yellow, Color.Yellow, Color.Red, Color.Green]
  ]

  console.log(screen)

  painFill(screen, 2, 3, Color.Red);

  console.log(screen)
}

console.log(main());



