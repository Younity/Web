Day2-ES6进阶和Axios使用
======================

*路飞学城-小马哥*

1 Promise 对象

Promise 是异步编程的一种解决方案。异步编程常用场景是与后端交互，Ajax。

本意承诺，承诺过段时间给出一个结果。

Promise 对象有三种状态：等待，成功，失败。

静态方法：
- all方法，并行执行异步操作
- race方法，获得先返回结果的数据

实例方法：
- then方法
- catch方法，相当于then(null, callback)

2 async 函数
-----------

- async/await 是新的异步编程解决方案
- async/await 基于 promise 对象

使用 async 关键字的函数会返回一个 promise 对象

await 关键字只能在 async 函数内使用，await 后只能跟 promise 对象

**async 的优点**

1. 代码书写简洁
2. 提高阅读性：异步代码用同步化的写法，代码更容易阅读


3 Class 语法
-----------

静态属性和方法由对象调用，使用 static 关键字声明；

实例属性和方法由对象实例调用。

4 模块化
-------

一个 js 文件就是一个模块。导入导出是相对于模块来说的。

1. export 导出命令

export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

    **注意**：需要在`<script>`标签中设置 `tyep="module"` 才能在 html 文件中导入。

    ```JS
    export const a = 9;
    export default cosnt author = 'dante';
    ```

2. import 导入命令



5 axios 的 HTTP 请求库
---------------------

基于 promise 的 js 库，可以用在浏览器和 node.js 中。


