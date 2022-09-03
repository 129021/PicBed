// 用来复习2022-9-2的学习内容


// 冒泡排序
function bubbleSort(arr) {
    var len = arr.length
    for (var outer = len; outer >= 2; outer--) {
        for (var inner = 0; inner <= outer - 1; inner++) {
            if (arr[inner] > arr[inner + 1]) {
                [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
            }
        }
    }
}





// 选择排序
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }


    return arr
}


// 插入排序
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }

    return arr

}

// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let num = Math.floor(arr.length / 2)
    let cur = arr.splice(num, 1)
    let left = []
    let right = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < cur) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(cur, quickSort(right))
}


// 希尔排序
function shellSort(arr, gap) {
    for (let i = 0; i < gap.length; i++) {
        let n = gap[i]

        for (let j = i + n; j < length; j++) {
            for (let k = j; k > 0; k -= n) {
                if (arr[k] < arr[k - n]) {
                    [arr[k], arr[k - n]] = [arr[k - n], arr[k]]
                } else {
                    continue
                }
            }
        }
    }

    return arr
}


// 对象深度克隆
function deepClone(origin, target) {
    let target = targrt || {}
    for (let key in origin) {
        if (origin.hasOwnProperty(key)) {
            if (Array.isArray(origin[key])) {
                target[key] = []
                deepClone(origin[key], target[key])
            } else if (typeof origin[key] == 'object' && origin[key] !== null) {
                target[key] = {}
                deepClone(origin[key], target[key])
            }

        } else {
            target[key] = origin[key]
        }
    }


    return target
}



// 数组扁平化
// 简单方法
Array.prototype.easyFlat = function () {
    this.toString().split(',').map(item => +item)
}


Array.prototype.flat = function () {
    var arr = []
    this.forEach(item => {
        if (Array.isArray(item)) {
            arr = arr.concat(item.flat())
        } else {
            arr.push(item)
        }
    })

    return arr
}


// 二分查找
function binaryFind(arr, target, low = 0, high = arr.length - 1) {
    const n = Math.floor(low + high)
    let cur = arr[n]

    if (cur === target) {
        return n + 1
    } else if (cur > target) {
        return binaryFind(arr, target, low, n - 1)
    } else if (cur < target) {
        return binaryFind(arr, target, n + 1, high)
    }

    return -1
}