

function towersOfHanoi(n: number, origin: string, target: string, aux: string){
  if(n===1){
    console.log(`Moving disc from ${origin} to ${target}`);
  }else{
    towersOfHanoi(n-1, origin, aux, target);
    console.log(`Moving disc from ${origin} to ${target}`);
    towersOfHanoi(n-1, aux, target, origin);
  }
}

console.log(towersOfHanoi(3, 'A', 'B', 'C'))