

function generateParenthesis(num: number): Set<string>{

  const set = new Set<string>();

  if(num===0){
    set.add("")
  }else{
    const prev = generateParenthesis(num-1);
    
    for(const str of prev){
      for(let i=0; i<str.length;i++){
        if(str[i]==='('){
          const s = insertInside(str, i);
          set.add(s);
        }
      }
      set.add("()"+ str);
    }
  }
  
  return set;
}

function insertInside(str: string, position: number): string{
  return str.slice(0, position+1) + '()' + str.slice(position+1); 
}

console.log(generateParenthesis(3))