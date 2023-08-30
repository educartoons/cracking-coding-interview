

// function generateParenthesis(num: number): Set<string>{

//   const set = new Set<string>();

//   if(num===0){
//     set.add("")
//   }else{
//     const prev = generateParenthesis(num-1);
    
//     for(const str of prev){
//       for(let i=0; i<str.length;i++){
//         if(str[i]==='('){
//           const s = insertInside(str, i);
//           set.add(s);
//         }
//       }
//       set.add("()"+ str);
//     }
//   }
  
//   return set;
// }

// function insertInside(str: string, position: number): string{
//   return str.slice(0, position+1) + '()' + str.slice(position+1); 
// }

// console.log(generateParenthesis(3))

function addParen(list: Array<string>, leftRem: number, rightRem: number, str: Array<string>, index: number){

  if(leftRem<0 || rightRem<leftRem) return;

  if(leftRem === 0 && rightRem === 0){
    list.push(str.join(''));
  }else{
    str[index] = '(';
    console.log(leftRem, index, str)
    
    addParen(list, leftRem-1, rightRem, str, index+1);

    str[index] = ')';
    console.log(leftRem, index, str)
    
    addParen(list, leftRem, rightRem-1, str, index+1);
  }

}

function generateParenthesis(num: number): Array<string>{
  const str = new Array<string>();
  const list = new Array<string>();
  addParen(list, num, num, str, 0);

  return list;
}


console.log(generateParenthesis(2))