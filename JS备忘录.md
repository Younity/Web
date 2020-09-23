
# JavaScript 备忘录
- [JavaScript 备忘录](#javascript-备忘录)
  - [数据类型](#数据类型)
    - [概览](#概览)
    - [常用方法](#常用方法)
    - [Number](#number)
    - [String](#string)
    - [其他类型](#其他类型)
  - [变量](#变量)
  - [控制结构](#控制结构)
  - [对象](#对象)
  - [数组](#数组)
  - [函数对象](#函数对象)
  - [赋值，浅拷贝与深拷贝](#赋值浅拷贝与深拷贝)

## 数据类型
### 概览
- Number
- String
- Boolean
- Symbol (new in ES2015)
- Object
  - Function
  - Array
  - Date
  - RegExp
- null
- undefined

### 常用方法
### Number
- Special value
  - NaN
  - -Infinity
  - Infinity

- Test
  - isNaN()
  - isFinity()

- Convert string to numbers
  - +'1.234'
  - parseInt()
  - parseFloat()

### String
字符串有哪些常用方法？遍历每个字符？
- Methods
  - 'hola'.length
  - 'hola'.charAt(0); // "h
  - 'hola'.replace('la','la, mixc');
  - 'hola'.toUpperCase(); // "HALO"

### 其他类型
- Boolean
  - 使用 *Boolean( )* 函数可以将以下类型的值转换化为 false。
    - false
    - 0
    - ''
    - NaN
    - null
    - undefined: 只声明而未赋值的变量的默认值

  - Symbol
    - 作为对象属性的唯一标识符。

    - 语法 `Symbol([description])`，可选参数为字符串，调试的时候可以用来作为标记。

    - 获取 `Symbol` 属性的值 *( ！！！ 没搞懂 )*： `Object.getOwnPropertySymbols(obj)`

    - 又大又香的栗子：


      ``` JS
        var smy = Symbol('descript');
        var info = {
          smy: 'hola',
          [smy]: 'world'  // symbol 作为键需加方括号
        };

        console.log(info.smy);       // 输出'hola'
        console.log(info['smy']);    // 输出'hola'
        console.log(info[smy]);      // 输出'world'。用方括号获取 symbol 键对应的值
      ```

## 变量

- 关键字
  - let
  - const
  - var


- 操作符
  - Numeric operators: +, -, *, /, %, ++, --, +=, -=
  - *'+ operator'* also does string concatenation
    - '3' + 4 + 5; // "345"
    - 3 + 4 + '5'; // "75"
  - Comparisons: >, <, >=, <=, ==, ===, !=, !==

- 相等测试
  - 抽象比较 `==`
  - 严格相等比较 `===`
    - 用于 `Array.prototype.indexOf, Array.prototype.lastIndexOf` 和 `case` 的测试
    - 类型和值都相等
    - 特例：`NaN === NaN` 将返回 `false`；` +0 === -0` 返回 `true`。
  - `Object.is(obj1, obj2)` (ES6新特性)
    - `NaN === NaN` 将返回 `true`；` +0 === -0` 返回 `false`。

## 控制结构
- if else
- switch: case clause compare the values using === operator
- while
- do while
- for ... in: iterare object's keys
- for ... of: iterate array-like objects' items
- || and && operators use short-circuit logic, which means whether they will execute their second operand is dependent on the first.

## 对象

- 创建对象的两种方式

  ``` js
  var obj = new Object();
  var obj = {}; // object literal syntax
  ```
- 创建一个对象原型和它的一个实例。

    ``` js
    function Person(name, age){
        this.name = name;
        this.age = age;
    }
    var you = new Person('You', 24);
    ```

## 数组

  *数组是一种类列表对象*

- 创建

  ``` js
    var a = new Array(3).fill(0);
    var b = ['dog', 'cat', 'hen'];
    a.length; // 3
    b.length; // 3
  ```

- 迭代

  - for ... of : iterate array elements
  - for ... in : iterate array indices (not recommended)
  - forEach() (add with ES 5)

- 数组方法

  - Array.from()
  - Array.isArray() 测试一个变量是否是数组对象。
  - Array.of()

- 数组原型

  *数组原型，所有数组实例都会继承其方法。*

  - 修改器方法。**!! 重要：会改变数组**

    | Methods                                               | Return                   |
    | ----------------------------------------------------- | ------------------------ |
    | Array.prototype.sort([cmpfn])                         |
    | Array.prototype.reverse()                             | 颠倒数组中元素的顺序     |
    | Array.prototype.pop()                                 |
    | Array.prototype.push()                                |
    | Array.prototype.shift()                               | 数组为空时返回 undefined |
    | Array.prototype.unshift(item1[, item2, ...])          |
    | Array.prototype.splice(start, delcount[, item1, ...]) | 在指定位置删除或添加元素 |

  - 访问方法。**!! 重要：不会改变数组**

    | Methods                                   | Return                                                      |
    | ----------------------------------------- | ----------------------------------------------------------- |
    | Array.prototype.concat()                  | 连接多个数组或值，返回连接后的新数组。                      |
    | Array.prototype.join(sep)                 | 连接所有数组项，返回由其组成的字符串。参数 sep 默认为逗号。 |
    | Array.prototype.slice(start[, end])       | 切片，返回一个浅拷贝，包括start, 不包括end。                |
    | Array.prototype.toString()                | 返回由数组元素组成的字符串。以逗号分割数组项。              |
    | Array.prototype.toLocaleString()          |
    | Array.prototype.concat(item1, item2, ...) |
    | Array.prototype.indexOf(item)             | 获取第一次出现的 item 的下标，若不存在返回 -1。             |

  <br>

    ``` js
      // 测试 a.toString()
      const array1 = [1, 2, 'a', '1a', null, undefined, [1,2], {a:'a',b:'b'}];
      array1.toString() // "1,2,a,1a,,,1,2,[object Object]"
    ```
  <br>

  - 迭代方法。**在回调函数中不要改变数组的元素。**

    | Methods                       | Return |
    | ----------------------------- | ------ |
    | Array.prototype.forEach()     |
    | Array.prototype.every()       |
    | Array.prototype.some()        |
    | Array.prototype.filter()      |
    | Array.prototype.map()         |
    | Array.prototype.reduce()      |
    | Array.prototype.reduceRight() |

## 函数对象

## 赋值，浅拷贝与深拷贝

*浅拷贝和深拷贝是相对于引用类型的，基本类型不会有这种操作。*

1. 数据类型分类：

- 基本类型：`null, undefined, Boolean, String, Number, Symbol`
- 引用类型：`Object, Array, Date, Function, RegExp`

2. 不同数据类型的存储方式：
- 基本类型：**标识符**和**值**都保存在 `栈内存（stack）` 中，只占据固定大小的内存地址。
- 引用类型：在 `堆内存（heap）` 中保存**值**，在 `栈内存（stack）` 中保存**标识符**和值在 `堆内存（heap）` 的首地址。

  *注意: `闭包`中的变量保存在 `堆内存（heap）` 中。*

3. 赋值操作

- 基本类型的赋值（以后补充）

``` JS
  var basicType = [null, undefined, true, 'zzz', 999, Symbol('Joe')];
  // 暂且不表

```

4. 浅拷贝

浅拷贝引用类型，复制其中的基本类型，共享其中的引用类型。**! ! ! 重要：原对象和新对象中的引用类型是同一个。**

- 对象方法

  | Methods | Description |
  |---------| -------------|
  | Object.assign(target, obj)| 复制 obj  到 target。浅拷贝
  | Array.prototype.slice() | 数组切片也是浅拷贝
  | Array.prototype.concat() | 数组连接也是浅拷贝
  
5. 深拷贝

深拷贝引用类型，会复制其中的基本类型和引用类型。**! ! ! 重要：原对象与新对象之间没有任何联系。**

*相比于浅拷贝速度慢，开销大。*
- 对象方法

  | Methods | Description |
  |---------| -------------|
  | JSON.parse(JSON.stringify(object)) |