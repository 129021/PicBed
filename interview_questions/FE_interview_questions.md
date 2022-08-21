# 前端面试问题笔记

## 1. BFC
BFC 全称：`Block Formatting Context`,名为“块级格式化上下文”

W3C对其解释是：BFC决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用，当涉及到可视化布局时，BFC提供了一个环境，HTML在这个环境中按照一定的规则进行布局。

我的理解是，BFC是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局

触发BFC：
- 浮动元素
- 绝对定位元素
- display:inline-Block
- display:table-cell
- display:table-caption
- overflow:hidden
- display:flex
- 



BFC的规则：
- BFC就是一个块级元素，块级元素会垂直方向一个接一个的排列
- BFC就是一个隔离的独立容器，容器里面的标签不会影响到外部标签
- 垂直方向的距离由margin决定，同一个BFC的两个相邻的标签外距会发生重叠
- 计算BFC的高度时，浮动元素也参与计算

BFC解决了什么问题：
1. 使用float脱离文档流，高度塌陷
2. Margin边距重叠
3. 两栏布局

## 16进制转10进制

### 16进制是字符串

eval是一个全局函数，会把传入的字符串当作JS代码执行。如果传入的参数不是字符串，会把结果原封不动的返回。
```javascript
eval('0xff').toString(16)
```

### 16进制是Number

```javascript
(0xff).valueOf()
```


### 10进制转16进制
```javascript
(255).toString(16)
```

## Ajax跨域
