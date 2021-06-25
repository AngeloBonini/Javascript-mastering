function merge(leftArr, rightArr){
let arr = [];
while(leftArr.length && rightArr.length){
    if(leftArr[0]<rightArr[0]){
        arr.push(leftArr.shift());
    }else{
        arr.push(rightArr.shift());
    }

}
return [...arr, ...leftArr, ...rightArr];
}

function mergeSort(array){
    const half = array.length/2;
    if(array.length<2){
        return array;
    }
    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array));
}

array = [4, 8, 7, 2, 11, 1, 3, 89, 123, 50, 20, 76, 28, 59, 16];
console.log(mergeSort(array));