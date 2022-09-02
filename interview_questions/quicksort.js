let arr = [3, 2, 4, 1, 6, 3, 7, 3]

let arr1 = [1]



export function quicksort(arr) {

    // 如果数组为空数组或者只有一个值，则直接返回
    if (arr.length <= 1) {
        return arr
    }

    var left = []

    var right = []


    var mid = Math.floor(arr.length / 2)

    var midValue = arr.splice(mid, 1) //找到中间数的值


    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quicksort(left).concat(midValue, quicksort(right))

}
