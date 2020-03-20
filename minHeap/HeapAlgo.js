class MinHeap {
    constructor() {
      this.values = [null];
    }
  
    size() {
      // return the number of values in the heap
    }
  
    contains(val) {
      // returns a boolean; whether val is in the heap
    }
  
    isEmpty() {
      // returns a boolean
    }
  
    top() {
      // return, but don't remove the top value
    }
    

    insert(val) {
      let heap = this.values; 
      heap.push(val);

      let cIndex = heap.length - 1;
   
      while( Math.floor(cIndex/2) > 0 && heap[cIndex] < heap[ Math.floor(cIndex/2)] ){
            let temp = heap[cIndex];
            heap[cIndex] = heap[ Math.floor(cIndex/2)];
            heap[ Math.floor(cIndex/2)] = temp; 

            cIndex =  Math.floor(cIndex/2);
      }
      
     return heap;
    }
  
    extract() {
      // remove and return the top value
      let heap = this.values;
      if(heap.length <=1){
        return null;
      }
      
      //
      let extractedValue = heap[1];
      
      heap[1] = heap[heap.length - 1];
      heap.length--;

      let parentIndex = 1;
      let leftChildIndex = 2 * parentIndex;
      let rightChildIndex = (2 *  parentIndex) + 1;   
      while(heap[leftChildIndex] < heap[parentIndex] || heap[rightChildIndex] < heap[parentIndex]){
          if(heap[leftChildIndex] < heap[parentIndex] && heap[leftChildIndex]<heap[rightChildIndex]){
              let temp = heap[parentIndex];
              heap[parentIndex] = heap[leftChildIndex];
              heap[leftChildIndex] = temp;

              parentIndex =  2 * parentIndex;
          }
          else if(heap[rightChildIndex] < heap[parentIndex] && heap[rightChildIndex]<heap[leftChildIndex]){
            let temp = heap[parentIndex];
            heap[parentIndex] = heap[rightChildIndex];
            heap[rightChildIndex] = temp; 

            parentIndex = (2 *  parentIndex) + 1;
          }
      }
      console.log(heap);
      return extractedValue;
  }

  static heapify(arr) {
    // return a new heap comprised of the array's elements
    let heap = new MinHeap();
    for (let i=0; i<arr.length; i++){
      heap.insert(arr[i]);
    }
    // console.log(heap);
    return heap;
  }
}

const heapSort = arr => {
  // return a new sorted array by creating a heap and using its methods
  const heap = MinHeap.heapify(arr);
  let sortedArr = [];

  for (let i=0; i<arr.length; i++){
    sortedArr.push(heap.extract());
  }

  return sortedArr;
}

// MinHeap.heapify([3, 5, 6, 2, 1]);
// console.log(heapSort([4, 3, 5, 2, 9, 10]));

  let heap = new MinHeap();
  heap.insert(6);
  heap.insert(7);
  heap.insert(9);
  heap.insert(10);
  heap.insert(12);
  heap.insert(3);
  heap.insert(4);
  heap.insert(5);
  heap.insert(1);
  console.log(heap.insert(2));
  
  console.log(heap.extract());
//   console.log(heap.insert(8));

 
