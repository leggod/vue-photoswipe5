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
  Vue.directive('preview', {
    bind (el, binding, vnode, oldVnode) {
      el.addEventListener('click', (e) => {
        const index = instance._imageList.findIndex(item=>e.target.dataset.src===item.src)
        instance.preview(index, instance._imageList)
      },false)
    },
    inserted(el, binding, vnode, oldVnode) {
      if(instance._imageList == undefined){
        instance._imageList = []
      }
      instance._imageList.push({
        src: vnode.elm.dataset?.src,
        width: vnode.elm.dataset?.width,
        height: vnode.elm.dataset?.height,
      })
    }
  })
}
export default photoswipe
