<template>
	<view id="splash">
		<swiper v-if="!notFirstUse" class="swiper" @change="swiperChange" @animationfinish="animationfinish" :indicator-dots="indicatorDots"
		 :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<image src="../../static/splash/guide1.png" mode=""></image>
				<!-- <view class="swiper-item uni-bg-red guide1"></view> -->
			</swiper-item>
			<swiper-item>
				<image src="../../static/splash/guide2.jpg" mode=""></image>
				<!-- <view class="swiper-item uni-bg-green guide2"></view> -->
			</swiper-item>
			<swiper-item>
				<image src="../../static/splash/guide3.jpg" mode=""></image>
				<!-- <view class="swiper-item uni-bg-blue guide3"></view> -->
			</swiper-item>
		</swiper>
		<view v-if="!!notFirstUse" class="tips linear-background">
			<image src="../../static/logo.png" mode=""></image>
			欢迎使用天心医疗
		</view>
		<view v-if="!notFirstUse" class="jump linear-background" @click="jump">立即体验</view>
		<view v-if="!!notFirstUse" class="jump linear-background" @click="jump">跳过</view>
		
	</view>
</template>

<script>
	let timer
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				notFirstUse: true
			}
		},
		created() {
			// #ifdef APP-PLUS
			this.notFirstUse = plus.storage.getItem('NOT_FIRST_USE')
			if (!!this.notFirstUse) {
				setTimeout(() => {
					this.jump()
				}, 3000)
			} else {
				plus.storage.setItem('NOT_FIRST_USE', 'true')
			}
			// #endif
			// #ifdef H5
			this.notFirstUse = uni.getStorageSync('NOT_FIRST_USE')

			if (this.notFirstUse) {
				this.jump()
			} else {
				uni.setStorage({
					key: 'NOT_FIRST_USE',
					data: 'true',
					success: function() {
						console.log('success');
					}
				})
			}
			// #endif
		},
		onShow() {

		},
		beforeDestroy() {
			clearTimeout(timer)
		},
		methods: {
			swiperChange(e) {

			},
			animationfinish(e) {
				if (e.detail.current == 2) {
					timer = setTimeout(() => {
						uni.switchTab({
							url: '/pages/index/index'
						})
					}, 1000)
				}
			},
			jump() {
				clearTimeout(timer)
				uni.switchTab({
					url: '/pages/index/index'
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

<style lang="scss" scoped>
	#splash {
		height: 100vh;
		width: 100vw;
		// background: url(../../static/img/guide.png) no-repeat;
		background-size: 100% 100%;
		position: relative;

		.tips {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 100%;
			color: white;
			font-weight: bold;
			image{
				width: 100px;
				height: 100px;
				margin-bottom: 50px;
				border: solid 1px #eeeeee;
				// box-shadow: 0 0 2px #eeeeee;
				border-radius: 16px;
			}
		}

		.swiper {
			height: 100vh;
			width: 100vw;

			.guide1 {
				// background: url(../../static/splash/guide1.png) no-repeat;
			}

			.guide2 {
				// background: url(../../static/splash/guide2.jpg) no-repeat;
			}

			.guide3 {
				// background: url(../../static/splash/guide3.jpg) no-repeat;
			}

			swiper-item {
				width: 100%;
				height: 100%;
				background-size: 100% 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.jump {
			position: fixed;
			right: 30px;
			bottom: 30px;
			color: white;
			border-radius: 4px;
			border: 1px solid white;
			// padding: 0 3px 2px;
			padding: 4px 10px;
			background-color: $base-color;
			font-size: 14px;

		}

		view {}
	}
</style>
