<script>
// import PhotoSwipe from "./photoswipe/photoswipe.min.js";
import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.min.js';
const options = {
	dataSource: [],
	showHideAnimationType: "none",
};
export default {
	name: "vue-photoswipe",
	props: ["current"],
	data() {
		return {
			options: {
				loop: false,
				preload: [1, 0]
			}
		}
	},
	mounted() {
		const options = {
			dataSource: [
				{
					src: "https://source.unsplash.com/Volo9FYUAzU/1620x1080",
					width: 1620,
					height: 1080,
					alt: "test image 1",
				},
				{
					src: "https://source.unsplash.com/RJzHlbKf6eY/1950x1300",
					width: 1950,
					height: 1300,
				},
				{
					src: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
					width: 1875,
					height: 2500,
				},
			],
			pswpModule: () => import("./photoswipe/photoswipe.min.js"),
		};
		const lightbox = new PhotoSwipeLightbox(options);
		console.log(lightbox);
		lightbox.init();
		this.lightbox = lightbox;
    lightbox.loadAndOpen(0);
	},
	methods: {
		preview() {

		},
	},
};
</script>

<style>
</style>
