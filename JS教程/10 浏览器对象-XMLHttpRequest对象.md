浏览器对象模型-XMLHttpRequest对象
==========================

*《JavaScript教程》作者：阮一峰*

1 AJAX

AJAX 是 Asynchronous JavaScript and XML 的缩写。

指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。后来，AJAX 这个词就成为 JavaScript 脚本发起 HTTP 通信的代名词，也就是说，只要用脚本发起通信，就可以叫做 AJAX 通信。

AJAX 包括以下几个步骤。

1. 创建 XMLHttpRequest 实例
2. 发出 HTTP 请求
3. 接收服务器传回的数据
4. 更新网页数据

注意，AJAX 只能向同源网址（协议、域名、端口都相同）发出 HTTP 请求，如果发出跨域请求，就会报错。

现在，服务器返回的都是 JSON 格式的数据，XML 格式已经过时了，但是 AJAX 这个名字已经成了一个通用名词，字面含义已经消失了。

2 XMLHttpRequest 对象

XMLHttpRequest 对象是 AJAX 的主要接口，用于浏览器与服务器之间的通信。

实例属性：

- readyState：客户端的状态。只读。（5个状态）
- response：服务器响应主体。
- responseType：服务器响应主体的类型。（5种类型）
- responseText：服务器响应的字符串。只读
- responseXML：服务器响应的 HTML 或 XML 文档对象。只读
- responseURL：响应请求的服务器地址
- statue：服务器响应的状态码。只读
- timeout：设置超过指定时间后，自动终止请求。0 为无时间限制。

- onloadstart
- onprogress
- onabort
- onerror
- onload
- ontimeout
- onloadend
- onReadyStateChange：客户端的状态改变时的监听函数。

- withCredentials：布尔值，表示跨域请求时，用户信息（比如 Cookie 和认证的 HTTP 头信息）是否会包含在请求之中，默认为false。

- onload：上传文件时，该属性会返回一个对象，给这个对象添加事件监听器可以知道上传的进度。

实例的事件：

- readyStateChange 事件：实例状态发生改变时触发
- progress 事件：上传文件时触发
- loadstart事件
- load 事件：服务器响应数据接收完毕时触发
- error 事件：请求出错时触发
- abort 事件：请求中断时触发
- loadend 事件：请求结束时触发，状态未知
- timeout 事件：服务器超过指定时间还未响应时触发

实例的方法：

- open(method, url, isasync, user, password)：设置请求起始行。
- setRequestHeader(fieldstring, value)：设置请求头部
- overrideMimeType()：覆盖服务器返回的 MIME 类型，这样浏览器就不会去自动解析，从而我们就可以拿到原始文本了。只有在服务器无法返回某种数据类型时，才使用。
- send(data)：发送请求，可选的数据

- getResponseHeader()：获取响应头部的指定字段值
- getAllResponseHeaders()：获取所有响应头部信息













