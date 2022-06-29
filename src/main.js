import photoswipeComponent from './photoswipe.vue'
const photoswipe = {}
photoswipe.install = function (Vue, options) {

  // Vue.component(photoswipeComponent.name, photoswipeComponent)
 
  const Constructor = Vue.extend(photoswipeComponent)
  const instance = new Constructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  Vue.prototype.$previewImage = (current, urls) =>{
    instance.current = current
    instance.urls = urls
  }
     
}
export default photoswipe
