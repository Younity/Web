Vue 入门
=======

1 导言
-----

**Vue 核心：数据驱动视图。**

渐进式开发。Vue做了复杂的事情，把简单的事情交给我们来做。

Vue 是 MVVM 设计模式，即数据驱动视图，你更改的不是 DOM ，而是数据，数据一旦改变，视图就会自动更新。

**框架与库的区别**

1. 库是一个 js 文件，只解决一个功能：

jQuery库 => DOM 操作 + ajax 请求。他就是一个 js 模块。

2. 框架

    - 框架功能齐全。
    - 简易 DOM 体验 + 发送请求（axios）+ 模板引擎 + 路由功能（vue-router）+ 数据管理（vuex）+ 脚手架 + 基于模块化开发 （组件化开发）

2 Vue 起步
---------

**使用**
- CDN
- 下载 vue.js

插值表达式 `{{}}`


3 Vue 指令系统
-------------

1. v-text 和 v-html

    作为标签的属性使用

2. 显示和隐藏

    - v-if
    - v-else-if
    - v-else
    - v-show 基于 `display：none|block`

3. 事件

    v-on：事件名    简写@click

4. v-bind 简写 `:`

5. v-for

遍历

4 数组和对象的更新检测
--------------------

由于 JavaScript 的限制，Vue 不能检测数组和对象的变化，对此可以使用 `vm.$set` 实例方法，参见 [Vue 官方文档](https://cn.vuejs.org/v2/guide/reactivity.html#%E6%A3%80%E6%B5%8B%E5%8F%98%E5%8C%96%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

5 Vue 的双向数据绑定
------------------

v-model

6 watch 监听属性
------------

Vue 的 watch 对象用来监听 data 数据的变化

7 computed 计算属性
---------

对于任何复杂逻辑，都应使用计算属性

8 filters 过滤器属性

局部过滤器和全局过滤器

