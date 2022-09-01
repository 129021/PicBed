# ajax 学习笔记

ajax:（Asynchronous Javascript and XML),即异步的js和XML，从名字可以看出，ajax最初指的是通过JavaScript的异步通信，从服务器获取的XML，再从XML文档中更新数据，再更新当前网页的对应部分，而不用刷新整个网页。

ajax的流行使之称为利用JavaScript脚本发起HTTP请求通信的代名词，即使当前浏览器与服务器之间大部分通过JSON格式进行数据交换，XML格式已经很少使用，但是ajax名字保留了下来。

ajax包含几个步骤：
1. 创建`XMLHttpRequest`实例
2. 发出HTTP请求
3. 接收服务器传回的数据
4. 更新网页的对应部分


### `XMLHttpRequest`对象

`XMLHttpRequest` 是ajax的主要接口，用于服务器和浏览器之间的通信

`XMLHttpRequest` 是一个构造函数，new 生成实例,没有参数

```javascript
var xhr = new XMLHttpRequest()
```

建立实例后可以使用`open()`方法指定HTTP连接的一些细节，如：

```javascript
xhr.open('GET','http://www.baidu.com/',true)

```

指定回调函数，监听通信状态（`readyState`）的变化

```javascript
xhr.onreadyStateChange=handleStateChange;

function handleStateChange() {
    //做判断，是否通信状态发生变化
}
```

一旦通信状态发生了变化，就会调用定义的监听函数`handleStateChange`

最后使用`send()`方法，发出请求

```javascript
xhr.send(...)
```


ajax只能向同源网址发送http请求，发出跨域的请求，就会报错


XMLHttpRequest对象简单用法的完整例子：

```javascript
var xhr=new XMLHttpRequest()

xhr.onreadyStateChange=function(){
    // 假设通信成功，状态值为4
    if(xhr.readyState===4){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }else{
            console.error(xhr.statusText)
        }
    }
}

xhr.open('GET','/endpoint',true)
xhr.send(null);
```


### XMLHttpRequest的实例对象xhr的属性:
#### `XMLHttpRequest.readyState`

返回一个整数，表示实例对象当前状态：
- 0，表示xhr已经生成，但是没有调用x`hr.open()`
- 1,表示`xhr.open()`方法已经调用，但是`xhr.send()`方法没有调用，仍然可以使用`xhr.setRequestHeader()`方法设置http请求的头信息
- 2，表示`xhr.send()`方法已经调用，并且返回的头信息和状态码已经收到
- 3，表示正在接受传来的数据体
- 4，表示返回的数据已经接收完毕，或者本次接收已经失败



#### `XMLHttpRequest.onreadyStateChange` 属性
指向监听函数`readyStateChange`,当`readyStateChange`时间发生时（实例的readyState发生变化)，就会执行这个属性


#### `XMLHttpRequest.response`
`xhr.response`表示数据体 

本次请求不成功或数据不完整，`xhr.reponse`为`null`但是如果`xhr.responseType`为`text`或者为空字符串时，表示在请求没有结束之前，`response`属性包含服务器已经返回的部分数据


#### `XMLHttpRequest.responseType`
是一个字符串，表示服务器返回的数据的类型，可以在调用`xhr.open`方法之前，设置这个属性值，告诉浏览器如何解读服务器传回的数据

可以等于一下值：
- '':等同于'text',表示服务器传回文本数据
- 'arrarbuffer':表示服务器传回二进制数组
- 'blob':表示传回二进制对象
- 'json':表示传回JSON对象
- 'text':表示传回字符串

#### `XMLHttpRequest.status`和`XMLHttpRequest.statusText`


xhr.status属性返回一个整数，表示http状态码:

- 200:访问正常
- 301：永久移动
- 302：暂时移动
- 304：未修改
- 307：暂时重定向
- 401：未授权
- 403：进制访问
- 404：未发现网址
- 500：服务器发生错误

####  `XMLHttpRequest.timeout`
返回一个整数，表示多少毫秒之后请求没有得到相应，就会自动终止，如果这个值为0，就表示没有时间限制

### `XMLHttpRequest`的实例方法

以下用`xhr`表示`XMLHttpRequest`的实例对象

#### `xhr.open()`
用于指定http请求的参数，5个值可选：

1. method：方法，如 get,post ,put,delete等
2. url:表示请求发送目标URL
3. async:可选参数，布尔值，表示请求是否为异步，默认为TRUE
4. user：可选参数，用户名
5. password:可选参数，密码

####  `xhr.send()`

实际发请求

参数可选，可以带，可以不带

#### `xhr.setRequestHeader`

设置http请求的头信息，

在  `xhr.open`之后，在`xhr.send()`之前

接受两个参数，字段名和字段值

#### `xhr.getResponseHeader()`

用于接受服务器指定字段的值，如果没有收到回应或者指定字段不存在，则返回`null`



