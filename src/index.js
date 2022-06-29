import photoswipeComponent from './photoswipe.vue'
const photoswipe = {}
photoswipe.install = function (Vue, options) {
  const Constructor = Vue.extend(photoswipeComponent)
  const instance = new Constructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  Vue.prototype.$Image = instance
}
export default photoswipe
