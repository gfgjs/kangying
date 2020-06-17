<!-- 咨询服务台 -->
<template>
	<view>
		<view class="header">
			<view class="buttons-box">
				<view class="item" v-for="(item,index) in tabs" :key="item" @click="clickTab(item,index)" :class="index==currIndex&&'item-checked'">{{item}}</view>
			</view>
		</view>
		<view class="header-place"></view>
		<view class="item-content" v-for="i in 10" :key='i'>
			<image src="../../static/doctor/patient-header.png" mode=""></image>
			<view class="right">
				<view class="name">刘佳佳</view>
				<view class="text">那么医生我应该怎样去服用这些药品呢那么医生我应该怎样去服用这些药品呢?</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currIndex: 0,
				tabs: ['当前对话', '历史对话']
			};
		},
		methods: {
			clickTab(item, index) {
				this.currIndex = index
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $base-background-color;
	}

	.header-place {
		height: 64px;
	}

	.header {
		position: fixed;
		width: 100%;
		padding: 10px 0;
		height: 64px;
		background-color: $base-color;

		.buttons-box {
			display: flex;
			height: 44px;
			// width: 50%;
			border: 1px solid white;
			border-radius: 4px;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			.item {
				width: 30vw;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 16px;
				color: white;
				transition: all linear .1s;
				// border: 1px solid white;
			}

			.item-checked {
				color: $base-color;
				background-color: white;
			}
		}
	}

	.item-content {
		padding: 0 30px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 74px;

		image {
			width: 50px;
			height: 50px;
			border-radius: 50%;
		}

		.right {
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 70%;

			.name {
				font-size: 16px;
				color: #494949;
			}

			.text {
				margin-top: 5px;
				font-size: 14px;
				color: #9E9E9E;
				width: 100%;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
		}
	}
</style>
