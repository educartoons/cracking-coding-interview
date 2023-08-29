
// Using Recursion

function getSubsets(set: Array<number>, index: number): Array<Array<number>>{

  let allSubsets: Array<Array<number>> = [];

  if(set.length===index){
    allSubsets = [[]]
  }else{
    
    allSubsets = getSubsets(set, index + 1);
    const item = set[index];
    
    let moreSubsets: Array<Array<number>> = [];

    allSubsets.forEach((subset)=>{
      let newsubset = [...subset, item];
      moreSubsets = [...moreSubsets, newsubset]
    })

    allSubsets = [...allSubsets, ...moreSubsets];

  }

  return allSubsets;
}

console.log(getSubsets([1, 2, 3], 0));