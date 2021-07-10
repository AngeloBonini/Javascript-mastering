let part = (arr, start, end) =>{
const pivotValue = arr[end];
let pivotIndex= start;
console.log(pivotValue);
for(let i = start; i < end; i++){
    if(arr[i]<pivotValue){

        
        console.log(arr[i]);
        console.log(arr[pivotIndex]);
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        console.log(arr[pivotIndex]);
        console.log(arr[i]);
        pivotIndex++;
    }
}
console.log(arr[end]);
console.log(arr[pivotIndex]);
[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] ;
console.log(arr[pivotIndex]);
console.log(arr[end]);
return pivotIndex;
}

function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = part(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
quickSortRecursive(array, 0, array.length - 1)

console.log(array);