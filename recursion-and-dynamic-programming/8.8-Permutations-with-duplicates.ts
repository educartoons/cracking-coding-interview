function getPermutations(str: string, set: Set<string>): Array<string>{

  if(str===null) return [];

  const permutations = new Array<string>();

  if(str.length===0){
    permutations.push('');
    return permutations;
  }

  const char = str[0];

  const remainder = str.slice(1);
  const words = getPermutations(remainder, set);

  for(const word of words){
    for(let j=0; j<=word.length; j++){
      const s = word.slice(0, j) + char + word.slice(j);

      if(!set.has(s)){
        set.add(s)
        permutations.push(s);
      }
    }
  }

  return permutations;
}

console.log(getPermutations('ABAB', new Set<string>()))