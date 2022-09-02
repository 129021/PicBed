function binaryFind(arr, target, low = 0, high = arr.length - 1) {
    const n = Math.floor((low + high) / 2)

    const cur = arr[n]

    if (arr[n] == target) {
        return n + 1
    } else if (cur > target) {
        return binaryFind(arr, target, low, n - 1)
    } else if (cur < tartet) {
        return binaryFind(arr, target, n + 1, high)
    }
    return -1

}