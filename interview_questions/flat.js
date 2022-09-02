Array.prototype.flat = function () {
    var arr = []

    this.forEach((item) => {
        if (Array.isArray(item)) {
            arr = arr.concat(item.flat())
        } else {
            arr.push(item)
        }
    })

    return arr
}



// 简便方法
Array.prototype.easyFlat = function () {
    this.toString().split(',').map(item => +item)
}