# vue-photoswipe5

## 安装

```sh
npm install --save vue-photoswipe5
```



## 使用

入口文件中全局引入

```javascript
import Vue from 'vue'
import vuePicturePreview from 'vue-picture-preview';

Vue.component('Previewer', vuePicturePreview);
```

按需局部引入

```javascript
import vuePicturePreview from 'vue-picture-preview';

export default {
  components: {
    Previewer: vuePicturePreview
  }
}
```