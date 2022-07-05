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
  Vue.prototype.$lightbox=instance.lightbox

  Vue.directive('preview', {
    bind (el, binding, vnode, oldVnode) {
      el.addEventListener('click', (e) => {
        const index = instance._imageList[binding.value].findIndex(item=>e.target.dataset.src===item.src)
        instance.preview(index, instance._imageList[binding.value])
      },false)
    },
    inserted(el, binding, vnode, oldVnode) {
      if(instance._imageList == undefined){
        instance._imageList = {}
      }
      if(instance._imageList[binding.value] == undefined){
        instance._imageList[binding.value] = []
      }
      if(instance._imageList[binding.value].findIndex(item=>vnode.elm.dataset.src===item.src)<0){
        instance._imageList[binding.value].push({
          src: vnode.elm.dataset?.src,
          width: vnode.elm.dataset?.width,
          height: vnode.elm.dataset?.height,
        })
      }
    }
  })
}
export default photoswipe
