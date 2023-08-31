
let ways = 0;

function makeChange(num: number): number | undefined{

  if(num<0) return;

  const coins = [1, 5, 10, 25];

  for(const coin of coins){
    if(num-coin===0){
      ways++;
      // console.log(ways)
    }else {
      makeChange(num-coin);
    }
  }


  return ways;
}

console.log(makeChange(11))


function makeChange2(amount: number, denoms: Array<number>, index: number): number{
  if(index>=denoms.length-1) return 1;

  const denomAmount = denoms[index];
  let n = 0;
  for(let i=0; i*denomAmount<=amount;i++){
    const amountRemaining = amount - i*denomAmount;
    n = n + makeChange2(amountRemaining, denoms, index+1);
  }
  return n;
}


console.log(makeChange2(10 , [1, 5, 10, 25], 0));