> 本文档为记录bilibili上关于前端算法和LeetCode教程的学习笔记

## 栈
#### LeetCode20：有效的括号
```javascript
 s = '{}()[]()'

        var isValid = function (s) {
            var stack = []
            for (let i = 0; i < s.length; i++) {
                let start = s[i]
                if (start == "(" || start == "{" || start == "[") {
                    stack.push(s[i])
                } else {
                    const end = stack[stack.length - 1]

                    if (start == ")" && end == "(" || start == "]" && end == "[" || start == "}" && end == "{") {
                        stack.pop()
                    } else {
                        return false
                    }
                }
            }

            return stack.length == 0
        };
```

本题利用的是栈的后进先出的原理


#### LeetCode1047：删除字符串中所有的相邻重复项



```javascript
let s='abbcac'
var removeDuplicates=function(s){
    let stack=[]
    for(v of s ){
        let prev=stack.pop()
        if(prev!=v){
            stack.push(prev)
            stack.push(v)
        }
    }

    return stack.join('')
}
```



#### LeetCode71:简化路径

```javascript
var simplifyPath(path){
    let stack=[]
    let res=''
    let arr=path.split('/')

    arr.forEach(val => {
        if(val&& val=='..'){
            stack.pop()
        }else if(val && val!='.'){
            stack.push(val)
        }  
    });

    arr.length? res='/'+stack.join('/') : res='/'
    return res
}
```


## 队列

先进先出

#### js执行流程

1. 主线程读取js代码，此时为同步环境，形成对应的堆和执行栈
2. 主线程如果遇到异步任务会推给异步进程进行处理
3. 异步进程处理完毕，将对应的异步任务推入任务队列，任务队列分为宏任务和微任务
4. 主线程查询任务队列，执行微任务，将其按照顺序执行，全部执行完毕
5. 主线程查询任务队列，执行宏任务，取得第一个宏任务，执行完毕
6. 重复以上4，5步骤


#### LeetCode933： 最近的请求次数

```javascript
var RecentCounter = function() {
this.stack=[]
};


RecentCounter.prototype.ping = function(t) {
    this.stack.push(t)
while( this.stack[0]<t-3000){
    this.stack.shift()
}
return this.stack.length
};
```

## 链表
链表是一个多个元素存储的列表

链表优点类似于数组，不过链表中的元素在内存中不是顺序存储的，而是通过next指针联系在一起的



js中的原型链原理就是链表结构



链表与数组的区别：
- 数组是有序存储的，在中间某个位置删除或者添加某个元素，其他元素要跟着动
- 链表中的元素在内存中不是顺序存储的，而是通过next指针联系在一起的


链表分类：
- 单向
- 双向
- 环形




