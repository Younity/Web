# HTML CheetSheet
- [HTML CheetSheet](#html-cheetsheet)
  - [HTML Overview](#html-overview)
    - [元素](#元素)
    - [语义元素和通用元素](#语义元素和通用元素)
    - [元素属性](#元素属性)
    - [特殊字符引用](#特殊字符引用)
  - [HTML 元素分类](#html-元素分类)
    - [布局和内容](#布局和内容)
    - [多媒体和嵌入内容](#多媒体和嵌入内容)
    - [表格和表单](#表格和表单)
    - [交互和 Web 组件](#交互和-web-组件)

## HTML Overview
### 元素
一个 HTML 文档由许多的元素构成。元素由开始标签、内容、结束标签三部分构成；有些元素没有内容，这种元素称为 **空元素**，空元素只有开始标签，如 | &lt;img /&gt;;。

元素分为两大类：块级元素和内联元素。（最新标准 HTML5 中使用了另外的分类方法。）

 块级元素

| 表格元素 | 表单元素 | 列表元素 | 常用元素 | 布局元素 | 陌生元素 |
|---------|----------|---------|---------|---------|----------|
|   table | form     |  ul     |    hr   | hgroup | blockquote |
|   dd    | fieldset |  ol     |    p    | header | details |
|   dl    |          |  li     |   pre   | nav    | dialog |
|   dt    |          |         |   div   | main   |
|         |          |         | figure  | aside  |
|         |          |        | figcaption | article |
|         |          | h1~h6   | section |
|         |          |         |         | footer |
|         |          |         |         | address |

<br>

 内联元素

| 表单元素 | 多媒体元素 | 其他元素 | 其他元素 | 其他元素 | 其他元素 |  其他元素 |
|---------|-------|--------|--------|--------|---------|-------|
| label | video | iframe | script | abbr | code | q |
| button | audio | progress | noscript | acronym | del | ruby |
| input | embed |canvas | a | b | dfn |s
| select | object |data | i | bdi | ins | kbd
| textarea | svg |datalist | span | bdo | map |samp
| output ||| img | big | mark | slot|
|||| em | br | meter | small
|||| strong | cite | picture| sub |
|wbr|var|tt|u|time| template | sup |

<br>

### 语义元素和通用元素

| 语义元素 | 语义 |
|----------|-------|
| &lt;h1&gt; | 标题 |
| &lt;em&gt; | 强调 |
| &lt;strong&gt; | 非常重要 |
|&lt;i&gt;| 外国文字，分类名称，技术术语，一种思想… |
|&lt;b&gt;| 关键字，产品名称，引导句…
|&lt;u&gt;| 专有名词，拼写错误…
|&lt;a&gt;| 
|&lt;&gt;|
|&lt;&gt;|
|&lt;&gt;|
- 无语义元素：span、div

### 元素属性
每个元素可以设置自己的属性，元素有一种特殊属性叫做布尔属性，这种属性的值和其属性名一样，并且不能设置为其他值，如 required、checked 等。

### 特殊字符引用
字符实体是指特殊字符，如 | &lt; 、&gt;; 、&quot; 、&apos;、&amp; 。它们在作为字符使用时需要通过特殊的编码来实现，格式为: `&[name];` --&gt; [在 Wiki 查找对应的 name](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)。

*tips: HTML上的多个空白符被解析为一个空格符。*
<br>
<br>


## HTML 元素分类
### 布局和内容
1. Main root

    | Element |  Intro  |
    |---------|-------|
    |  &lt;html&gt; | HTML 或 XHTML 文档的根，其他所有元素必须是这个元素的子节点 |
    

2. Document metadata

    | Element |  Intro  |
    |---------|-------|
    | &lt;head&gt; |
    | &lt;title&gt; |
    | &lt;base&gt; | 定义所有链接的默认的 href 和 target. |
    | &lt;link&gt; | 链接外部资源 |
    | &lt;meta&gt; | 定义其他 HTML 元素无法描述的元数据 |
    | &lt;style&gt; |
    
	
	&lt;meta&gt; 元素常用示例：
	``` html
	<！--文档编码-->
	<meta charset="utf-8">
	<!-- 网站作者 -->
	<meta name="author" content="Younity">
	<!-- 网站描述信息 -->
	<meta name="description" content="更多信息请访问：https://www.github.com/younity">
	```
	
	使用 &lt;link&gt; 给网站添加图标
	``` html
	<!-- 网站图标 -->
	<link rel="shortcut icon" href="paper-plane-solid.svg">
	```

3. Sectioning root

    | Element |  Intro  |
    |---------|-------|
    | &lt;body&gt; ||
    

4. Scripting

    | Element |  Intro  |
    |---------|-------|
    | &lt;canvas&gt; (H5) |
    | &lt;script&gt; |
    | &lt;noscript&gt; | 设置脚本未执行时的替代内容 |

5. Content sectioning

    | Element |  Intro  |
    |---------|-------|
    | &lt;section&gt; (H5) ||
    | &lt;nav&gt; (H5)||
    | &lt;article&gt; (H5) ||
    | &lt;aside&gt; (H5) ||
    | &lt;header&gt; (H5) ||
    | &lt;footer&gt; (H5) ||
    | &lt;main&gt; (H5) ||
    | &lt;h1&gt; ~ &lt;h6&gt; ||
    | &lt;address&gt; | 定义文档作者的联系信息 |

6. Text content

    | Element |  Intro  |
    |---------|-------|
    | &lt;figure&gt; (H5) ||
    | &lt;figcaption&gt; (H5) ||
    | &lt;p&gt; ||
    | &lt;hr&gt; ||
    | &lt;pre&gt; ||
    | &lt;blockquote&gt; ||
    | &lt;ol&gt; ||
    | &lt;ul&gt; ||
    | &lt;li&gt; ||
    | &lt;dl&gt; ||
    | &lt;dt&gt; ||
    | &lt;dd&gt; ||
    | &lt;div&gt; ||
    

7. Inline text semantics

    | Element |  Intro  |
    |---------|-------|
    | &lt;data&gt; (H5) ||
    | &lt;time&gt; (H5) ||
    | &lt;mark&gt; (H5) ||
    | &lt;ruby&gt; (H5) ||
    | &lt;rt&gt; (H5) ||
    | &lt;rp&gt; (H5) ||
    | &lt;bdi&gt; (H5) ||
    | &lt;wbr&gt; (H5) ||
    | &lt;a&gt; ||
    | &lt;em&gt; ||
    | &lt;strong&gt; ||
    | &lt;small&gt; ||
    | &lt;s&gt; ||
    | &lt;cite&gt; ||
    | &lt;q&gt; ||
    | &lt;dfn&gt; ||
    | &lt;abbr&gt; | 缩写, 其 title 属性可以设置缩写词的完整版本 |
    | &lt;code&gt; |
    | &lt;var&gt; |
    | &lt;samp&gt; |
    | &lt;kbd&gt; |
    | &lt;sub&gt; |
    | &lt;sup&gt; |
    | &lt;i&gt; |
    | &lt;b&gt; |
    | &lt;u&gt; |
    | &lt;bdo&gt; |
    | &lt;br&gt; |
    

8. Demarcating edits

    | Element |  Intro  |
    |---------|-------|
    | &lt;ins&gt; |
    | &lt;del&gt; |

### 多媒体和嵌入内容
9.  Embedded content

    | Element |  Intro  |
    |---------|-------|
    | &lt;embed&gt; (H5)|
    | &lt;source&gt; (H5)|
    | &lt;math&gt; (H5)|
    | &lt;picture&gt; (H5)|
    | &lt;svg&gt; (H5)|
    | &lt;iframe&gt; |
    | &lt;object&gt; |
    | &lt;param&gt; |
    

10. Image and multimedia

    | Element |  Intro  |
    |---------|-------|
    | &lt;audio&gt; (H5)|
    | &lt;video&gt; (H5)|
    | &lt;track&gt; (H5)|
    | &lt;img&gt; |
    | &lt;area&gt; |
    | &lt;map&gt; |
    

### 表格和表单
11. Table content

    | Element |  Intro  |
    |---------|-------|
    | &lt;table&gt; |
    | &lt;caption&gt; |
    | &lt;colgroup&gt; |
    | &lt;col&gt; |
    | &lt;tbody&gt; |
    | &lt;thead&gt; |
    | &lt;tfoot&gt; |
    | &lt;tr&gt; |
    | &lt;td&gt; |
    | &lt;th&gt; |
    

12. Forms

    | Element |  Intro  |
    |---------|-------|
    | &lt;datalist&gt; (H5)|
    | &lt;output&gt; (H5)|
    | &lt;progress&gt; (H5)| 进度条 |
    | &lt;meter&gt; (H5)| 滑动条 |
    | &lt;from&gt; |
    | &lt;fieldset&gt; |
    | &lt;legend&gt; |
    | &lt;label&gt; |
    | &lt;input&gt; |
    | &lt;button&gt; |
    | &lt;select&gt; |
    | &lt;optgroup&gt; |
    | &lt;option&gt; |
    | &lt;textarea&gt; |
    

### 交互和 Web 组件
13. Interactive elements

    | Element |  Intro  |
    |---------|-------|
    | &lt;details&gt; (H5)|
    | &lt;summary&gt; (H5)|
    | &lt;menuitem&gt; (H5)|
    | &lt;menu&gt; (H5)|
    
	
14. Web Components

    | Element |  Intro  |
    |---------|-------|
    | &lt;slot&gt; (H5)|
    | &lt;template&gt; (H5)|
    
