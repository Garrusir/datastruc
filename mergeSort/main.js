function merge(arrFirst, arrSecond){
  let sortedArr = [];
  let i = j = 0;
  while (i < arrFirst.length && j < arrSecond.length){
    sortedArr.push( (arrFirst[i] < arrSecond[j] ? arrFirst[i++] : arrSecond[j++] ) )
  }
  return [
    ...sortedArr,
    ...arrFirst.slice(i),
    ...arrSecond.slice(j)
  ];
}
function mergeSort(arr){
  if (!arr || !arr.length){
    return null
  }
  if (arr.length <=1 ){
    return arr
  }
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);

  return merge( mergeSort(arrLeft), mergeSort(arrRight) )
}

console.log(mergeSort([2, 5, 142, 5, 1, 65, -2, 323, 0, 2, 12, -13, 12, 1]))