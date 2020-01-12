function swap(items, firstIndex, secondsIndex){
  let temp = items[firstIndex];
  items[firstIndex] = items[secondsIndex];
  items[secondsIndex] = temp;
}
function partition(items, left, right){
  let checkPoint = items[Math.floor( (right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j){
    while (items[i] < checkPoint){
      i++
    }
    while (items[j] > checkPoint){
      j--
    }
    if (i <= j){
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i
}
function quickSort(items, left, right){
  var index;
  if (items.length > 1){
    index = partition(items, left, right);
    if (left < index -1){
      quickSort(items, left, index - 1)
    }
    if (index < right){
      quickSort(items, index, right)
    }
  }
  return items
}
window.onload = () =>{
  let start = performance.now();
  console.log(quickSort([4, 2, 6, 5, 3, 9], 0, 5))
  let end = performance.now();
  console.log(`Time of the function is ${end - start} ms`)
}