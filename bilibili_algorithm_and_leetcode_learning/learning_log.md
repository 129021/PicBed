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



#### instanceof 原理

利用原型链的原理

```javascript
let myInstanceof=(target,obj)=>{
while(target){
    if(target==obj.prototype){
        return true
    }

    target=target.__proto__
}

return false
}
```

#### LeetCode141:环形链表


```javascript
var hasCycle(head){
    let f=head, s=head
    while(f!==null && f.next!==null){
        s=s.next;
        f=f.next.next;
        if( s=f) return true
    }
    return false
}
```


#### LeetCode237:删除链表中的节点

```javascript

var deleteNode=function (node){
    node.val=node.next.val
    node.next=node.next.next
}

```


#### LeetCode83：删除排序链中的重复元素

如果当前的节点有next，将当前节点的val值与next节点的val值进行对比，如果两个节点的val相同的话，就删除第一个节点，如果不同，就继续往下对比


```javascript
var deleteDuplicates=function(head) {
    if(!head){
        return head
    }


let cur=head
while(cur.next){
    if(cur.val==cur.next.val){
        cur.next=cur.next.next
    }else{
        cur=cur.next
    }
}

  return head

}
```


#### LeetCode206：翻转列表


1-> 2 -> 3 -> 4 -> 5 
5 -> 4 -> 3 -> 2 -> 1

```javascript
var reverseList=function(head){
    let prev= null
    let curr=head
 while (curr){
    let next= curr.next
    curr.next=prev
    prev=curr;
    curr=next
 }


 return prev
}
```


#### 数组和链表的区别

1. 元素之间的联系
   - 数组通过下标联系在一起
   - 链表通过next指针联系在一起
2. 数据插入
   - 数组如果在中间插入新的元素，其他元素会重新计算
   - 链表不会重新计算
3. 查找
   - 数组：通过下标进行查找
   - 链表： 每次查找都需要从头开始找

## 字典 & 哈希表

字典是键值对存储，有点类似于js的对象

js存在一定的问题：js的键（key）都是字符串类型，或者会转换为字符串类型

字典是以map来表示的，map的键不会转换类型


区别：
1. 寻找value
   - 字典如果要找key对应的value需要遍历key，
   - 那么想要省去遍历的过程，需要用哈希表来表示
2. 排列顺序
   - 字典是根据添加的顺序进行排列的
   - 哈希表不是添加的顺序进行排列的




#### LeetCode1:两数之和

```javascript
var twoSum=function(nums,target){
    for (let i = 0 ;i<nums.length;i++){
        let map=new Map()
        let num=target-nums[i]

        if(map.has(num)){
            return [map.get(num),i]
        }else{
            map.set(nums[i],i)
        }
    }
}
```




#### LeetCode217:重复元素

数组中有重复元素返回true,没有返回false

```javascript
var containsDuplicate=function(nums){
    let set=new Set()
    for (let num of nums){
        if (set.has(num)){
            return true
        }else{
            set.add(num)
        }
    }

    return false
}
```




#### LeetCode349:两个数组的交集

```javascript
var intersection = function (num1,nums2){
    let set=new Set(nums2)

    return [...new Set(num1)].filter(item=>set.has(item))
}
```