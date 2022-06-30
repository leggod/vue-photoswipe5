import photoswipeComponent from './photoswipe.vue'
const photoswipe = {}
photoswipe.install = function (Vue, options) {
  const Constructor = Vue.extend(photoswipeComponent)
  const instance = new Constructor({options})
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  Vue.prototype.$previewImage = (index, list)=>{
    instance.preview(index,list);
  }
}
export default photoswipe
