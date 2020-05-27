<template>
	<view>
		<!-- 	<view class="null-nav"></view>
		<view class="nav">
			<view>
				天心在线医疗
			</view>
			<view class="right">
				<image class="doctor" src="../../../static/home/15.png" mode=""></image>
				<image class="message" src="../../../static/home/12.png" mode="" @click="navTo('我的消息')"></image>
			</view>
		</view> -->
		<navBar title="天心在线医疗"></navBar>
		<view class="search-wrap">
			<view class="search">
				<uni-icons type="mic-filled" color="#C9C9C9" size="24"></uni-icons>
				<input type="text" placeholder="找医生、找医院、查疾病">
				<uni-icons type="search" color="#C9C9C9" size="24"></uni-icons>
			</view>
		</view>
		<view class="wrap">
			<view class="left">
				<view class="item" :style="currSel==item?'background:white':''" :class="currSel==item?'sel':''" v-for="item in 20"
				 :key="item" @click="selParent(item)">科室{{item}}</view>
			</view>
			<view class="right">
				<view class="item" v-for="item in 20" :key="item" @click="selChild(item)">病情</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from '../../../components/nav-bar.vue'
	export default {
		components: {
			navBar
		},
		data() {
			return {
				currSel: 1,
			};
		},
		methods: {
			selParent(item) {
				this.currSel = item
			}
		}
	}
</script>

<style lang="less">
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	page,
	.page {
		background-color: #f7f8fa;
		height: 100vh;
		width: 100vw;
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

		input {
			height: 30px;
			border: 1px solid #eeeeee;
			padding: 4px 10px;
			border-radius: 6px;

		}
	}

	.search-wrap {
		width: 100vw;
		background-color: #1D7FFD;
		height: 80px;
		position: relative;
		box-shadow: 0px 6px 20px 0px #1D7FFD;
		z-index: 1;

		.search {
			width: 92vw;
			height: 42px;
			position: absolute;
			left: 4vw;
			top: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			background: rgba(255, 255, 255, 1);
			border-radius: 43px;

			image {
				height: 24px;
				width: 22px;
			}
		}
	}

	.wrap {
		height: calc(100vh - 38px - 50px - 80px);
		background-color: red;
		width: 100vw;
		display: flex;

		.left {
			width: 32%;
			height: 100%;
			background-color: #f6fafd;
			overflow-y: scroll;
		}

		.right {
			width: 68%;
			height: 100%;
			background-color: white;
			overflow-y: scroll;
			padding: 0 20px;

			.item {
				border-bottom: 1px solid rgba(247, 247, 247, 1);
				padding: 0;
			}
		}

		.item {
			height: 12vw;
			display: flex;
			align-items: center;
			padding: 0 0 0 20px;
			position: relative;
			font-size: 16px;
		}

		.sel::before {
			content: '';
			width: 4px;
			height: 20px;
			background-color: red;
			position: absolute;
			left: 0;
			background: rgba(29, 127, 253, 1);
			box-shadow: 0px 8px 21px 0px rgba(36, 131, 253, 0.3);
			border-top-right-radius: 3px;
			border-bottom-right-radius: 3px;
		}
	}
</style>
