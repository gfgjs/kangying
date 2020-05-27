<template>
	<view>
		<view class="null-nav"></view>
		<view class="nav">
			<view class="left">
				<uni-icons class="icon" v-if="backButton" @click="back" type="arrowleft" color="white" size="24"></uni-icons>
				<view class="text">{{title}}</view>
			</view>
			<view class="right">
				<!-- <image class="doctor" src="../static/home/15.png" mode=""></image>
				<image class="message" src="../static/home/12.png" mode="" @click="navTo('我的消息')"></image> -->
				<uni-icons type="contact" color="white" size="30"></uni-icons>
				<uni-icons type="chat" color="white" size="30"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['backButton','title'],
		data() {
			return {

			};
		},
		methods: {
			back() {
				uni.navigateBack({})
			}
		},
		mounted() {
			console.log(this.backButton)
		}
	}
</script>

<style lang="less">
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	.null-nav {
		background-color: #1D7FFD;
	}

	.nav {
		width: 100vw;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		background-color: #1D7FFD;
		color: white;

		.left {
			display: flex;
			align-items: center;
			height: 100%;

			.icon {
				position: relative;
				top: 2px;
				margin-right: 10px;
			}

			.text {
				padding-left: 10px;
			}
		}

		.right {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100px;
			height: 100%;

			.doctor {
				height: 36px;
				width: 36px;
			}

			.message {
				height: 32px;
				width: 32px;
			}
		}
	}
</style>
