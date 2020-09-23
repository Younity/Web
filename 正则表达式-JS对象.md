


常见问题
========
1. 如何匹配 括号？

使用反斜杠 \ 转义。

2. 如何命名捕获组？

在括号的开始使用 `?<name>`，例如查找 "year-month-day" 格式的日期：

`/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/` 

RegExp 对象
===========

 静态属性：
- RegExp.lastIndex
  - 可读写属性，用于指定下一次匹配的起始索引，只有使用了 g 标志时，该属性才起作用。
  - 若 lastIndex > string.length, 则 regexp.test() 和 regexp.exec() 将匹配失败，lastIndex 会被重置为 0；
  - 若 lastIndex = string.length, 并且该正则表达式匹配空字符串，则将匹配到空字符串；
  - 若 lastIndex = string.length, 但正则表达式不匹配空字符串，则 lastIndex 被重置为 0；
  - 否则， lastIndex 被设置为最近一次匹配成功的下一个位置。

实例属性：
- RegExp.prototype.source
  - 返回模式文本字符串
- RegExp.prototype.flags
  - 只读，返回值为 "gimuy" 中的一个或多个
- RegExp.prototype.ignoreCase
  - 只读
- RegExp.prototype.global
  - 只读
- RegExp.prototype.dotAll
  - 只读，此属性为 true 时，表示使用了 s 标志，通配符将匹配任意单个 BMP 字符 (U+0000 - U+FFFF，即 0 号平面)，否则，将不会匹配换行符、回车符、行分隔符和段分隔符
- RegExp.prototype.multiline
  - 只读，值为 true 时表示使用了 m 标志，^ 和 $ 会匹配字符串中任意一行的开头和结尾，否则，^ 和 $ 只匹配整个字符串的开头和结尾。
- RegExp.prototype.sticky
  - 只读，gy标志同时使用时忽略 g 标志
- RegExp.prototype.unicode
  - 只读，值为 true 表示使用了 u 标志，则任何 Unicode 代码点(包括大于 U+FFFF的代码点)的转义都会被解释。

实例方法：
- RegExp.prototype.exec()
  - 执行一次搜索匹配，返回一个数组或 null
- RegExp.prototype.test()
- RegExp.prototype.toString()

String 对象相关方法
===================

1. String.prototype.match(regexp)

**语法：**

	`str.match(regexp)`

**传入参数：**
  
一个正则表达式对象，如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为正则表达式对象。
  
**返回值：**

1. 如果不匹配返回 null。

```JS
'Lorem ipsum dolor sit amet.'.match(/win/);
// null
```

2. 若正则表达式使用 g 标志，返回一个数组，包含所有匹配结果。

```JS
'Lorem ipsum dolor sit amet Etiam.'.match(/i./g);
//  ["ip", "it", "ia"]
```

3. 若正则表达式未使用 g 标志，返回一个数组，包含以下内容：
	- 0：匹配到的字符串。
	- 1~n: 第 1 到第 n 个捕获组，没有捕获组时无此索引。
	- index: 匹配字符串的第一个字符在原字符串中的索引。
	- input: 被搜索的原始字符串 str。
	- groups: 包含命名捕获组的对象，没有则为 undefined。

例如：

```JS
'Lorem ipsum dolor sit amet, consectetur'.match(/i(t )a(me)/);
/* 
["it ame", 
 "t ",
 "me",
 index: 19, 
 input: "Lorem ipsum dolor sit amet, consectetur", 
 groups: undefined]
*/
```

再看一个有命名捕获组的例子：

```JS
'When the COVID-19 comes, it\'s 2019-09'.match(/(?<year>[0-9]{4})-(?<month>[0-9]{2})/);
/*
["2019-09",
 "2019", 
 "09", 
 index: 30, 
 input: "When the COVID-19 comes, it's 2019-09",
 groups: {year: "2019", month: "09"}]
*/
```

当命名捕获组没有匹配到字符时，捕获组为 undefined，groups 中的值也为undefined。

```JS
'201-09'.match(/(?<year>[0-9]{4})?/)；
/*
["", 
undefined, 
index: 0, 
input: "201-09", 
groups: {year: undefined}]
*/
```

- str.search(regexp)
  - 匹配成功返回字符串首次匹配项的索引，否则返回 -1

- str.matchAll(regexp)
  - regexp 必须设置 g 标志，否则将抛出异常；
  - 返回一个迭代器, 可使用 for of 或 Array.from() 对其进行迭代
- str.replace(regexp, newSubStr)
  - 返回替换后的新字符串
  - 不会改变原始字符串
- str.split(regex)
  - 返回一个数组，包含由 regex 模式匹配的字符分割的子字符串
  
  
  
  
  
  
  
  
  