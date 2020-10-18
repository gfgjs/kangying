# signature
uni-app Canvas手写板(use canvas in weapp for user signature)

参考了GitHub上的小程序canvas手写板，并进行部分修改
小程序Canvas手写板地址：[](https://github.com/tclyjy/handwriting-weapp)
核心文件为static中signature.js.js

## 插件
将signature.js.js  引入页面中

要使用的页面 index.vue
```html
<script>
import Handwriting from "../../static/js/signature.js.js"
```

使用JS index.js
```js
 onLoad: function (options) {
    this.handwriting = new Handwriting({
      lineColor: this.lineColor,
      slideValue: this.slideValue,
	  canvasName：'handWriting'
    })
  },

  // 初始化需传入三个参数 
  // lineColor  字体颜色 默认#1A1A1A 
  // slideValue 字体粗细 默认50（内置 0，25，50, 75, 100 5档粗细）
  // canvasName canvas的id名 canvas-id
   
   //绑定canvas事件  event为canvas事件回调传值
	this.handwriting.uploadScaleStart(event)  绑定到canvas的touchstart事件
    this.handwriting.uploadScaleMove(event)	  绑定到canvas的touchmove事件
	this.handwriting.uploadScaleEnd(event)    绑定到canvas的uploadScaleEnd事件
   
   // 内置函数
   this.handwriting.selectColorEvent(color);   // 传入颜色参数 改变字体颜色
   this.handwriting.selectSlideValue(slideValue);  // 传入粗细参数 0,25,50,75,100 改变字体粗细
   this.handwriting.retDraw() //清楚canvas内容
   this.handwriting.saveCanvas() //生成图片，基于uni-app接口 uni.canvasToTempFilePath(OBJECT) 异步封装，默认未传参，需要传参可自行在signature.js.js中修改
```

