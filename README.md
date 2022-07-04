# vue-photoswipe5

## 优点
- 基于 photoswipe5.2.8，其优点一个都不落下。
  - 基于 ES6 重写
  - 更简单的初始化和动态导入
  - 更新动画和手势引擎
  - 仅一个css文件，没有外部资源
  - 内置响应式图像
  - and so on
- 使用非常简单，支持两种方式调用
- 不需要安装任何依赖，体积小，仅72kb。（官方4.1.3版本731 kB，使用其他作者的包，包里面还有一层依赖，体积会更大）
- 一次加载全局有效，任何组件中使用都不会增加代码体积（再也不需要管按需不按需，再也不用局部引入）

## 安装

```sh
npm install --save vue-photoswipe5
```

## 引入

```javascript
import Vue from 'vue'
import vuephotoswipe from 'vue-photoswipe5'
//可选配置请看最后
const options = {

}
Vue.use(vuephotoswipe, options)
```

## 使用js调用
``` javascript
// 需要打开的图片索引
const index = 0;
// 最好按照此数据格式
const imagesList = [
    { src: 'https://dummyimage.com/800x600/555/fff/?text=1', width: 800, height: 600 },
    { src: 'https://dummyimage.com/800x600/555/fff/?text=2', width: 800, height: 600 },
    { src: 'https://dummyimage.com/800x600/555/fff/?text=3', width: 800, height: 600 },
    { src: 'https://dummyimage.com/800x600/555/fff/?text=4', width: 800, height: 600 },
    { src: 'https://dummyimage.com/800x600/555/fff/?text=5', width: 800, height: 600 },
]
// 查看当前数组的第一张图
Vue.$previewImage(index,imagesList);
```

## 使用指令调用

指令可以加在任何元素上，不一定非要是img，同时最好传入要预览的宽高。
指令值暂时空缺，后期有其他计划
``` html
<template>
  <img v-for="item in imagesList" :key="item.src" :src="item.src+'?imageView2/2/w/500/q/100'" v-preview :data-src="item.src" :data-width="item.width" :data-height="item.height">
</template>
<script>
  ...
  data(){
    return {
      imagesList: [
        { src: 'https://dummyimage.com/800x600/555/fff/?text=1', width: 800, height: 600 },
        { src: 'https://dummyimage.com/800x600/555/fff/?text=2', width: 800, height: 600 },
        { src: 'https://dummyimage.com/800x600/555/fff/?text=3', width: 800, height: 600 }
      ]
    }
  }
  ...
</script>
```
## 可选配置

- bgOpacity: 0.8 //背景透明度
- spacing: 0.1 //幻灯片之间的间距。定义为相对于视口宽度的比率（0.1 = 视口的 10%）
- preload:[1,1] //预览时加载前一个和后一个，所以第一次点击是加载3张，且1是最小值，0不行
- [更多配置](https://photoswipe.com/options/)

## 有用的提示

如果没传入宽高导致图片预览铺满整个屏幕，图片变形，可以尝试覆盖
``` css
.pswp__img{object-fit: contain;}
```

## 更新日志
- 2022.7.4 新增指令调用；更新README；
- 2022.6.x init