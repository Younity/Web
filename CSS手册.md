- [CSS 选择器](#css-选择器)
- [CSS 属性](#css-属性)
- [CSS3](#css3)

## CSS 命名规范

1. BEM 命名规范

BEM ：Block Element Modifiers
区块 元素 修饰符

使用符号：短横，双连字符，双短横

B__E--M

例子：
.stick-man 表示火柴人这个块（B）
.stick-man--blue 表示蓝色火柴人（BM）
.stick-man__head 表示火柴人的头部元素（BE）
.stick-man__head--small 表示小个火柴人 （BEM）

## CSS 属性顺序规范

先写结构型属性：
display
position, left, top, right etc.
overflow, float, clear etc.
margin, padding

后写表现型属性：
background, border etc.
font, text

## CSS 选择器
- 基本选择器
  - .class
  - #id
  - \*
- 元素选择器
    - element (单一元素)
    - element, element (多种元素)
    - element element (后代元素)
    - element>element (特定父级)
    - element+element (紧接元素)
    - element~element (后面兄弟元素)

- 属性选择器
    - [attribute]
    - [attribute=value]
    - [attribute=language]
    - [attribute^=value] (属性以指定值开头的元素)
    - [attribute$=value] (属性以指定值结尾的元素)
    - [attribute*=value] (属性包含指定值的元素)

- 伪类
  - :root (根元素，表示 html 元素，常用于声明 CSS 变量)

  - :hover
  - :link
  - :visited
  - :active

  - :focus

  - :lang(language)

  - :first-of-type (一组同类型兄弟元素中指定元素的第一个)
  - :last-of-type (一组同类型兄弟元素中指定元素的最后一个)
  - :nth-of-type(n) (一组同类型兄弟元素中的第 n 个元素)
  - :only-of-type (没有相同类型的兄弟元素的所有元素)

  - :first-child (第一个子元素)
  - :last-child (最后一个子元素)
  - :only-child (没有任何兄弟元素的子元素)
  - :nth-child(n) (第n个子元素)
  - :nth-last-chile(n) (倒数第n个子元素)

  - :empty (没有子元素的元素，子元素可以是元素节点或文本)

  - :target (选择当前活动的 #id 元素)

  - :enable (选择每个被启用 enable 的元素)
  - :disabled (选择每个被禁用 disabled 的元素)
  - :checked (选择每个被选中 checked 的元素)
  - :not(selector) (反选)

  - :in-range (代表一个 input 元素，其值处于属性 mix 和 max 限定的范围之外时选中)
  - :out-of-range (代表 input 元素，其值处于属性 mix 和 max 限定的范围之外时选中)

  - :read-write (可编辑的元素)
  - :read-only (不可编辑的元素)

  - :optional (没有 required 属性的 imput、select 或 textarea 元素)
  - :required (设置了 required 属性的 imput、select 或 textarea 元素)

  - :valid (内容验证正确的 input 或其他 form 元素)
  - :invalid (内容未通过验证的 input 或其他 form 元素)

- 伪元素：
  - ::after (创建一个伪元素，成为被选中元素的最后一个子元素, 使用 content 添加装饰内容，默认为行内元素)
  - ::before (创建一个伪元素，成为被选中元素的第一个子元素, 使用 content 添加装饰内容，默认为行内元素)
  - ::first-letter (块级元素第一行的第一个字母)
  - ::first-line (块级元素第一行的第一行)
  - ::selection (鼠标或选择设备选中的部分)

## CSS 属性
``` css
    background:
        background-color
        background-image
        background-size
        background-position: left center
        background-repeat: repeat-x|repeat-y|no-repeat;
        background-attachment: scroll|fixed|local;
        background-origin: padding-box|border-box|content-box;
        background-clip: border-box|padding-box|content-box;

    border

    font:
        font-family
        font-size
        font-weight

    text-overflow
    overflow: visiable|hidden|scroll;
    overflow-x
    overflow-y

    visibility:
        hidden
        visiable
    display:
            none
            block
            inline

            flex
            grid

    opacity: 0~1

    @media 媒体查询

    float:
        right
        center
        left

    position:
        static
        sticky
        relative
        absolute
        fixed
```

## CSS3
1. 布局方式
    - 弹性盒子 特点：轴线布局，近似为一维布局
        display: flex

    - 网格布局 特点：划分行列，可以看做二维布局，比 flex 强大
        父元素称为 container，子元素称为 item，布局只对 item 有效，对item内部的子元素无效
        display: grid

2. 网格

3. 过渡 transition
    ``` css
        transition-property 规定需要过渡的css属性名称
        transition-duration 规定过渡效果需要花费的时间
        transition-timing-function 规定过渡效果的时间曲线
            linear 线性
            ease 由慢到快，再由快到慢
            ease-in 慢速开始
            ease-out 慢速结束
            ease-in-out 慢速开始和结束
            cubic-bezer(x1,x2,y1,y2) 贝塞尔曲线
        transiity-delay 过渡延迟时间
    ```

4. 变换 transform

``` css
    transform-origin: 修改原点，默认(0,0)为元素的左上角；2D/3D都可用
        left
        center
        right
        length
        %
```
``` css
    2D 变换
        transform:
                translate(x,y) 元素向水平移动 x 像素，垂直移动 y 像素
                rotate(45deg) 元素顺时针旋转 45 度
                scale(x,y) 水平缩放 x 倍，垂直缩放 y 倍
                skew(x,y) 斜切
                    skewX(30deg) 水平方向斜切 30deg
                    skewY(45deg) 垂直方向斜切 45deg
                matrix()

    3D 变换
        transform:
                translate3D()
                translateX()
                translateY()
                translateZ()

                rotate3D()
                rotateX()
                rotateY()
                rotateZ()

                scale3D()
                scaleX()
                scaleY()
                scaleZ()
        transform-style: 指定嵌套元素是怎样在三维空间中呈现
                flat 所有子元素都在2D平面呈现
                preserve-3d 表示所有子元素都在3D平面呈现
        backgace-visibility: 元素旋转后背向屏幕时是否可见
                hidden
                visible
```

5. 动画

    使用 @keyframes CSS 规则定义动画关键帧

``` css
    animation-name: @keyframes的名称值
    animation-duration: 动画指定的完成时间
    animation-timing-function : 规定动画的时间曲线
    animation-delay ： 动画延迟时间
    animation-iteration-count : 动画播放次数
    animation-direction ：是否反向播放动画
        normal 正向播放
        reverse 反向播放
        alternate 奇数正向播放，偶数反向播放
        alternate-reverse 与 alternate 相反
        initial 默认值
        inherit 继承父元素
    animation-fill-mode : 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
    animation-play-state : 动画状态，是否在运行
```