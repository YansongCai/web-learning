# 父级div定义 伪类:after 和 zoom
<style type="text/css">
    .div1 {
        border: 1px solid #000080;
    }
    .div2 {
        border: 1px solid #800080;
        height: 100px;
        margin-top: 10px
    }
    .left {
        float: left;
        width: 20%;
        height: 200px;
        background: #DDD
    }
    .right {
        float: right;
        width: 30%;
        height: 80px;
        background: #DDD
    }
    /*清除浮动代码*/
    .clearfloat:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0
    }
    .clearfloat {
        zoom: 1
    }
</style>
<div class="div1 clearfloat">
    <div class="left">L
        eft</div>
    <div class="right">Right</div>
</div>
<div class="div2">
    div2
</div>
原理：IE8以上和非IE浏览器才支持 :after，原理和 父级div定义overflow: hidden; 有点类似，zoom(IE特有属性)可解决ie6,ie7浮动问题。
优点：浏览器支持好，不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）。
缺点：代码多，不少初学者不理解原理，要两句代码结合使用，才能让主流浏览器都支持。
建议：推荐使用，建议定义公共类，以减少CSS代码。

# 父级div定义overflow: hidden;
<style type="text/css">
    .div1 {
        border: 1px solid #800080;
        /* 解决浮动高度塌陷代码 */
        width: 98%;
        overflow: hidden
    }
    .div2 {
        border: 1px solid #800080;
        height: 100px;
        margin-top: 10px;
        width: 98%
    }
    .left {
        float: left;
        width: 20%;
        height: 200px;
        background: #DDD
    }
    .right {
        float: right;
        width: 30%;
        height: 80px;
        background: #DDD
    }
</style>
<div class="div1">
    　　<div class="left">Left</div>
    　　<div class="right">Right</div>
</div>
<div class="div2">
    　　div2
</div>
原理：必须定义 width 或 zoom:1，同时不能定义height，使用overflow: hidden;时，浏览器会自动检查浮动区域的高度。
优点：简单，代码少，浏览器支持好。
缺点：不能和 position 配合使用，因为超出的尺寸的会被隐藏。

# 结尾处加空div标签clear:both
<style type="text/css">
    .div1 {
        border: 1px solid #800080
    }
    .div2 {
        border: 1px solid #800080;
        height: 100px;
        margin-top: 10px
    }
    .left {
        float: left;
        width: 20%;
        height: 200px;
        background: #DDD
    }
    .right {
        float: right;
        width: 30%;
        height: 80px;
        background: #DDD
    }
    /*清除浮动代码*/
    .clearfloat {
        clear: both
    }
</style>
<div class="div1">
    　　<div class="left">Left</div>
    　　<div class="right">Right</div>
    　　<div class="clearfloat"></div>
</div>
<div class="div2">
    　　div2
</div>
原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度。
优点：简单，代码少，浏览器支持好，不容易出现怪问题。
缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，让人感觉很不爽。
建议：不推荐使用，但此方法是以前主要使用的一种清除浮动方法。

# 父级div定义height
<style type="text/css">
    .div1 {
        border: 1px solid #000080;
        /*解决代码*/
        height: 200px;
    }
    .div2 {
        border: 1px solid #000080;
        height: 100px;
        margin-top: 10px
    }
    .left {
        float: left;
        width: 20%;
        height: 200px;
        background: #DDD
    }
    .right {
        float: right;
        width: 30%;
        height: 80px;
        background: #DDD
    }
</style>
<div class="div1">
    　　<div class="left">Left</div>
    　　<div class="right">Right</div>
</div>
<div class="div2">
    　　div2
</div>
原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。
优点：简单，代码少，容易掌握。
缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题。
建议：不推荐使用，只建议高度固定的布局时使用。

# 父级div定义overflow: auto
<style type="text/css">
    .div1 {
        border: 1px solid #000080;
        /*解决代码*/
        width: 98%;
        overflow: auto
    }
    .div2 {
        border: 1px solid #000080;
        height: 100px;
        margin-top: 10px;
        width: 98%
    }
    .left {
        float: left;
        width: 20%;
        height: 200px;
        background: #DDD
    }
    .right {
        float: right;
        width: 30%;
        height: 80px;
        background: #DDD
    }
</style>
<div class="div1">
    　　<div class="left">Left</div>
    　　<div class="right">Right</div>
</div>
<div class="div2">
    　　div2
</div>
原理：必须定义width 或 zoom: 1;，同时不能定义height，使用 overflow: auto; 时，浏览器会自动检查浮动区域的高度。
优点：简单，代码少，浏览器支持好。
缺点：内部宽高超过父级div时，会出现滚动条。
建议：不推荐使用，如果你需要出现滚动条或者确保你的代码不会出现滚动条就使用吧。