

function magicIndex(array: Array<number>){
 
  return findMagic(array, 0, array.length-1);

}

// function findMagic(array: Array<number>, start: number, end: number): number{
  
//   if(start>end) return -1;

//   const mid = Math.floor((start+end)/2);

//   if(array[mid]===mid){
//     return mid;
//   }else if(array[mid]>mid){
//     return findMagic(array, start, mid-1)
//   }else{
//     return findMagic(array, mid+1, end);
//   }

// }


/* Considering reapeted values */

function findMagic(array: Array<number>, start: number, end: number): number{
  
  if(start>end) return -1;

  const mid = Math.floor((start+end)/2);

  if(array[mid]===mid){
    return mid;
  }

  const leftIndex = Math.min(mid-1, array[mid])
  const left = findMagic(array, start, leftIndex);

  if(left>=0){
    return left;
  }

  const rightIndex = Math.max(mid+1, array[mid]);
  const right = findMagic(array, rightIndex, end);
  
  return right;

}

// console.log(magicIndex([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]))

console.log(magicIndex([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]))