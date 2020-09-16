# RegExp 对象

如何匹配 括号？

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

# String 对象相关方法

- str.search(regexp)
  - 匹配成功返回字符串首次匹配项的索引，否则返回 -1
- str.match(regexp)
  - 若使用 g 标志，返回匹配的所有结果，但不返回捕获组
  - 若未使用 g 标志，与 RegExp.exec() 返回值相同
- str.matchAll(regexp)
  - regexp 必须设置 g 标志，否则将抛出异常；
  - 返回一个迭代器, 可使用 for of 或 Array.from() 对其进行迭代
- str.replace(regexp, newSubStr)
  - 返回替换后的新字符串
  - 不会改变原始字符串
- str.split(regex)
  - 返回一个数组，包含由 regex 模式匹配的字符分割的子字符串