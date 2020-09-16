# DOM

*DOM = Document Object Model*

1. 什么是 DOM？（DOM level 1 1998）
    - DOM 是 HTML 和 XML 文档的应用程序接口（API），它定义了文档的逻辑结构以及文档被访问和被操纵的方式。作为一个 W3C 规范，DOM 的一个重要目标就是提供一个可以在各种环境和应用程序中使用的标准编程接口。DOM 被设计为可以使用任何编程语言。

    - 本规范中，使用结构模型（structure model）这个术语来描述文档的类树表示；DOM 结构模型的一个重要的属性是结构同构（structural isomorphism），意思是，对于任意两个 DOM 实现来说，如果要用它们来创建同一个文档，它们将会创建具有完全相同的对象和关系的结构模型。

    - DOM 是一个对象模型，它标识了：
        - 用于表示和操作文档的对象和接口；
        - 这些接口和对象的语义，包括行为和属性；
        - 这些接口和对象之间的接口和协作。

    - 当前的 DOM 由 DOM Core 和 DOM HTML 两部分组成，DOM Core 描述了 XML 文档的功能，并且作为 DOM HTML 的基础。

2. DOM 与其他系统的区别

    - 尽管 DOM level 1 被 Dynamic HTML 强烈的影响着，但它并没有实现所有的 Dynamic HTML，特别是事件还没有被定义。level 1 旨在为这些功能提供一个坚实的基础。

    - DOM 不是一个二进制规范。用相同语言写的 DOM 程序是跨平台兼容的代码。

    - DOM 没有定义如何用 XML 表示对象，而是指定了如何将 XML 和 HTML 文档表示为对象，以便在面向对象的程序中使用它们。

    - DOM 不是一个数据结构，而是一个指定接口的对象模型。

    - DOM 没有真正定义 XML 或 HTML 的内部语义，这些语义是由 W3C Recommendations 来定义的；DOM 是一种编程模型，旨在尊重这些语义，DOM 对编写 XML 和 HTML 的方式没有任何影响。
