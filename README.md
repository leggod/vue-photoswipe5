# vue-photoswipe5

## 优点
- 基于 photoswipe5.2.8，其优点一个都不落下。
  - 基于 ES6 重写
  - 更简单的初始化和动态导入
  - 更新动画和手势引擎
  - 仅一个css文件，没有外部资源
  - 内置响应式图像
  - and so on
- 使用非常简单，api众多且清晰明了
- 不需要安装任何依赖，体积小
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

## 使用
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
Vue.$Image.preview(index,imagesList);
```
### 可选配置

- bgOpacity: 0.8 //背景透明度
- spacing: 0.1 //幻灯片之间的间距。定义为相对于视口宽度的比率（0.1 = 视口的 10%）
- preload:[1,1] 