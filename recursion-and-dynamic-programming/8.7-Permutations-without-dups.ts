// Write a method to compute all permutations of a string of unique characters


function getPermutations(str: string): Array<string>{

  if(str===null) return [];

  const permutations = new Array<string>();

  if(str.length===0){
    permutations.push('');
    return permutations;
  }

  const char = str[0];
  const remainder = str.slice(1);
  const words = getPermutations(remainder);

  for(const word of words){
    for(let j=0; j<=word.length; j++){
      const s = word.slice(0, j) + char + word.slice(j);
      permutations.push(s);
    }
  }

  return permutations;
}

console.log(getPermutations('ABC'))

