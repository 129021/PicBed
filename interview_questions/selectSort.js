// function selectSort(arr) {
//     let len = arr.length;

//     for (let outer = 0; outer < len - 1; outer++) {
//         for (let inner = outer; inner < len; inner++) {
//             if (arr[inner] < arr[outer]) {
//                 [arr[inner], arr[outer]] = [arr[outer], arr[inner]]
//             }
//         }
//     }

//     return arr
// }



function selectSort(arr){
    let len=arr.length;

    for (let i=0;i<length-1;i++){
        for (let j=i;j<length;j++){
            if(arr[j]<arr[i]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }

    return arr
}