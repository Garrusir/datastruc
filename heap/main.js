class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  getHeap() {
    return this.heap;
  }

  setValue(num) {
    console.log('num',num);
    this.heap.push(+num);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (this.heap[idx] > this.heap[Math.floor(idx/2)]) {
        console.log('idx', idx);
        if (idx >= 1) {
          [this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
          if (Math.floor(idx/2) > 1) {
            idx = Math.floor(idx/2);
          } else {
            break;
          };
        };
      };
    };
  }
  
  removeValue() {
    console.log('heap', this.heap);
    let smallest = this.heap[1];
    console.log('smallest', smallest);
    if (this.heap.length > 2) {
      // [this.heap[1], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[1]];
      this.heap[1] = this.heap[this.heap.length - 1];
      console.log('heap 1', this.heap);
      this.heap.splice(this.heap.length - 1);
      console.log('heap 2', this.heap);

      if (this.heap.length == 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        };
        return smallest;
      };
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
        console.log('i:', i);
        console.log('this.heap[i]', this.heap[i]);
        console.log('this.heap[left]', this.heap[left]);
        console.log('this.heap[right]', this.heap[right]);

        if (this.heap[left] > this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        };
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] == undefined || this.heap[right] == undefined) {
          break;
        };
      };
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    };
    return smallest;
  };

  heapify(arr, length, i) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if (left < length && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < length && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest != i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.heapify(arr, length, largest)
    }

    return arr;
  }

  heapSort() {
    let arr = this.heap;
    let length = this.heap.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;

    while (i >= 0) {
      arr = this.heapify(arr, length, i);
      i--;
    }

    while (k >= 0) {
      [arr[0], arr[k]] = [arr[k], arr[0]];
      arr = this.heapify(arr, k, 0)
      k--;
    }
    return arr;
  }
}


let heap = new MaxHeap();

function set() {
  let addInput = document.querySelector('#addValue');
  heap.setValue(addInput.value);
  addInput.value = '';
  document.querySelector('#result').innerHTML = heap.getHeap().slice(1);
  // console.log(heap.getHeap());
}

function remove() {
  heap.removeValue();
  document.querySelector('#result').innerHTML = heap.getHeap().slice(1);
}

function heapSort() {
  console.log('sorting');
  const sortedArr = heap.heapSort();
  document.querySelector('#sorted').innerHTML = sortedArr.slice(1);
}

window.onload = function() {
  let addButton = document.querySelector('#addButton');
  let removeButton = document.querySelector('#removeButton');
  let sortButton = document.querySelector('#sortButton');

  addButton.addEventListener('click', set);
  removeButton.addEventListener('click', remove);
  sortButton.addEventListener('click', heapSort);

}