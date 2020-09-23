Day1--ES6基础精讲
================

*路飞学城：小马哥*

1 let和const声明变量
-------------------

1. 都属于块级作用域
2. 都不能重复声明，否则会报错。
   ```JS
    let a;
    let a;
    // Uncaught SyntaxError: Identifier 'a' has already been declared

    const b = 3;
    const b = 3;
    // Uncaught SyntaxError: Identifier 'b' has already been declared

   ```
3. 都不存在变量提升

4. const 声明时必须赋值，否则报错。

    ```JS
        const b;
        //Uncaught SyntaxError: Missing initializer in const declaration
    ```

**为什么需要块级作用域?**

1. 内层变量可能会覆盖外层变量，全局污染。

    ```JS
        var a = 10;
        function foo() {
            console.log(a);
            if(1===2){
                var a = '小马哥';
            }
        }
        foo();
        // undefined
    ```

    由于 var 存在变量提升，函数内的局部变量 a 的声明覆盖了全局变量 a，因此返回 undefined。

    使用 let 或 const 就能很好地解决这个问题：

    ```JS
        let a = 10;
        function foo() {
            console.log(a);
            if(1===2){
                const a = '小马哥';
            }
        }
        foo();
        // 10
    ```
    上述代码会在控制台返回全局变量 a 的值 10。

2. 用来计数的循环遍历，容易把变量暴露成全局

for 循环中，使用 var 声明的变量 i 为全局变量。

```JS
    var arr = [];
    for (var i = 0; i < 10; i++) {
       arr[i] =  function () {
           return i;
         }
    }
    console.log(arr[4]()); // 10
```

`arr[4]()` 返回 10，而不是预期的 4。因为执行 for 语句后，全局变量 i 的值为 10，执行 `arr[4]()` 总会返回全局变量 i 的值。

**使用 let 可以解决循环计数问题**

不理解的地方：怎么解决的？

```JS
    var arr = [];
    for (let i = 0; i < 10; i++) {
      // i
      arr[i] = function() {
        return i;
      }
    }
    arr[9](); // 9
```

**使用闭包也可以解决循环计数问题**

不理解的地方：怎么解决的？

```JS
    var arr = [];
    for (var i = 0; i < 10; i++) {
       arr[i] = (function (n) {
         return function () {
           return n;
         }
       })(i);
    }
    arr[5](); // 5
```

**建议:默认情况下使用const声明变量,只有你知道变量需要被修改的时候使用let**

2 模板字符串

```JS
const bookname = 'La Vita nuova';
const dante = `Dante Alighieri's book ${bookname} is my wechat's name`;
```

对于语句

```JS
const htmlTel = "<ul><li><p>id:" + id + "</p> <p>name:" + name + "</p></li></ul>";
```

使用 `模板字符串` 可以简化为

```JS
const htmlTel = `
    <ul>
        <li><p>id: ${id}</p>
            <p>name: ${name}</p>
        </li>
    </ul>`;
```

3 解构
------

1. 数组和对象的解构
2. 解构的用途
   1. 交换变量
   2. 作为函数参数解构传入的数组或对象

4 函数扩展-箭头函数
-----------------

简化回调函数。

**注意事项**

1. 箭头函数的this指向当前代码的上下文
2. 箭头函数没有 Arguments 对象
3. 箭头函数不能用new来实例化对象

5 对象扩展
---------

1. 对象的属性和方法都有简写

```JS
const name = '马哥',age = 18;

const person = {
    name:name,
    age：age,
    fav：function(){
        console.log(this.name);
      }

// 简写为

const person = {
    name,
    age,
    fav(){
        console.log(this.name);
      }
}
```

2. 使用扩展运算符

   合并对象：

   ```JS
    const a = {x: 3, y: 4};
    const b = {z: 3};

    const ab = {...a, ...b};
   ```
