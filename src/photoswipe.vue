<script>
// import PhotoSwipe from "./photoswipe/photoswipe.min.js";
import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.min.js';
export default {
	name: "vue-photoswipe",
	data() {
		return {
			options: {
				loop: false,
				preload: [0, 0],
				showHideAnimationType: "none",
				pinchToClose: false,//捏触摸手势关闭图库
				closeOnVerticalDrag:false,//垂直滑动关闭 默认true
			},
			lightbox:'',
			dataSource:[]
		}
	},
	mounted() {
		const options = {
			dataSource: this.dataSource,
			pswpModule: () => import("./photoswipe/photoswipe.min.js"),
			preload: [0, 0],
		};
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

<style>
</style>
