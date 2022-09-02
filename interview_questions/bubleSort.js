function bubbleSort(arr) {
    var len = arr.length

    for (let outer = len; outer >= 2; outer--) {
        for (let inner = 0; inner <= outer - 1; inner++) {
            if (arr[inner] > arr[inner + 1]) {
                let temp = arr[inner]
                arr[inner] = arr[inner + 1]
                arr[inner + 1] = temp
            }
        }
    }


    return arr;
}



// 简便方法
function easyBubbleSort(arr) {
    let len = arr.length
    for (let outer = len; outer >= 2; outer--) {
        for (let inner = 0; inner <= outer - 1; inner++) {
            if (arr[inner] > arr[inner + 1]) {
                [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
            }
        }
    }

    return arr
}