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




