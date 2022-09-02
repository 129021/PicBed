function shellSort(arr, gap) {
    for (let i = 0; i < gap.length; i++) {
        let n = gap[i] //步长

        for (let j = i + n; j < arr.length; j++) {
            for (let k = j; k > 0; k -= n) {
                if (arr[k] < arr[k - n]) {
                    [arr[k], arr[k - n]] = [arr[k - n], arr[k]]
                } else {
                    continue;
                }
            }
        }
    }

    return arr

}



function shell(arr,gap){
    for (let i = 0 ;i<gap.length;i++){
        n= gap[i]
        for (let j=i+n;j<arr.length;j++){
            for (let k=j;k>0;k-=n){
                if(arr[k]<arr[k-n]){
                    [arr[k],arr[k-n]]=[arr[k-n],arr[k]]
                }else{
                    contiune
                }
            }
        }
    }
    return arr
}