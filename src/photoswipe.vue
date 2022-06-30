<script>
// import PhotoSwipe from "./photoswipe/photoswipe.min.js";
import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.min.js';
export default {
	name: "vue-photoswipe",
	data() {
		return {
			lightbox:'',
			dataSource:[]
		}
	},
	mounted() {
		const params = {
			dataSource: this.dataSource,
			pswpModule: () => import("./photoswipe/photoswipe.min.js"),
			preload: [0, 0],
			showHideAnimationType: "none",
			loop: true,
		};
		const options = Object.assign(params,this.$options.options);
		const lightbox = new PhotoSwipeLightbox(options);
		lightbox.init();
		this.lightbox = lightbox;
	},
	methods: {
		preview(index,list) {
			this.dataSource = list;
			if(this.lightbox){
				this.lightbox.options.dataSource = list;
				for(let i; i<list.length; i++){
					this.lightbox.refreshSlideContent(i);
				}
				this.lightbox.loadAndOpen(index);
			}
		},
	},
};
</script>

<style scoped>
@import './photoswipe/photoswipe.css'
</style>
