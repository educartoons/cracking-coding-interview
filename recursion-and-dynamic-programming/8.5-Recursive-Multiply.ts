
function multiplyNumbers(a: number, b: number): number{
  const bigger = a > b ? a : b;
  const smaller = a< b ? a : b;
  return productHelperTwo(smaller, bigger);
}


// Recursive Call with memo

function productHelper(smaller: number, bigger: number, set: Map<number, number>): number{

  if(smaller===0){
    return 0;
  }else if(smaller ===  1){
    return bigger;
  }else if(set.has(smaller)){
    return set.get(smaller) || 0;
  }

  // Right shift operator
  const s = smaller >> 1 ;
  const side1 = productHelper(s, bigger, set);
  let side2 = side1;
  if(smaller%2===1){
    side2 = productHelper(smaller-s, bigger, set)
  }

  set.set(smaller, side1+side2)

  return set.get(smaller) || 0;
}

// Recursive Call with 

function productHelperTwo(smaller: number, bigger: number): number{

  if(smaller===0) return 0;
  if(smaller===1) return bigger;

  const s = smaller >> 1;
  const half = productHelperTwo(s, bigger);

  if(smaller % 2 === 0){
    return half + half;
  }else{
    return half + half + bigger;
  }

}

console.log(multiplyNumbers(7, 10))