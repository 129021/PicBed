// 爬楼梯

// 假如有n阶楼梯，你可以一步一节或者一步两节，有几种方法爬到第n阶


function fib() {
    if (n == 1 || n == 2) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}