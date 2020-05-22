<template>
	<view id="Guide">
		<swiper class="swiper" 
		@change="swiperChange" 
		@animationfinish="animationfinish"
		:indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red guide1"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green guide2"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue guide3"></view>
			</swiper-item>
		</swiper>
		<view class="jump" @click="jump">跳过</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			swiperChange(e){
				console.log(e.detail.current)
				
			},
			animationfinish(e){
				console.log(e.detail.current)
				if(e.detail.current == 2){
					setTimeout(()=>{
						uni.reLaunch({
							url: '../Login/Login'
						})
					},1000)
				}
			},
			jump(){
				uni.reLaunch({
					url: '../Login/Login'
				})
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style lang="less" scoped>
	#Guide {
		height: 100vh;
		width: 100vw;
		// background: url(../../static/img/guide.png) no-repeat;
		background-size: 100% 100%;
		position: relative;

		.swiper {
			height: 100vh;
			width: 100vw;
		
			.guide1{background: url(../../static/img/guide1.png) no-repeat;}
			.guide2{background: url(../../static/img/guide2.jpg) no-repeat;}
			.guide3{background: url(../../static/img/guide3.jpg) no-repeat;}
			
			.swiper-item{
				width: 100%;
				height: 100%;
				background-size: 100% 100%;
			}
		}

		.jump {
			position: absolute;
			right: 30px;
			bottom: 30px;
			color: white;
			border-radius: 4px;
			border: 1px solid white;
			padding: 0 3px 2px;

		}
	}
</style>
