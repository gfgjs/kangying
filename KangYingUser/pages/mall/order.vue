<template>
	<view>
		<view class="header box-shadow">
			<view class="tab" v-for="(item,index) in tabs" :key='item' @click="switchTab(index)">
				<view class="">{{item}}</view>
				<view class="bar linear-background" :style="currTab===index&&'opacity:1'"></view>
			</view>
		</view>
		<view class="content">
			<view class="content-item" v-for="i in 10" :key='i'>
				<view class="top">
					<image src="../../static/med.png"></image>
					<view class="right">
						<view class="row title">汤臣倍健 牛初乳加钙咀嚼片 60片装</view>
						<view class="row little-title">北京同仁堂大药房（太古店）</view>
						<view class="row price">￥533</view>

					</view>
				</view>
				<view class="buttons">
					<view class="button button-cancel">申请售后</view>
					<view class="button">确认收货</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: ['待收货', '待付款', '待评价', '售后/退款'],
				currTab: 0
			};
		},
		mounted() {

		},
		methods: {
			switchTab(index) {
				this.currTab = index
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
		position: relative;
	}

	.header {
		padding: 20px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		z-index: 1;
		background-color: white;

		.tab {
			display: flex;
			justify-content: center;
			font-size: 15px;

			.bar {
				height: 3px;
				width: 28px;
				border-radius: 2px;
				background-color: $base-color;
				position: absolute;
				bottom: 0;
				opacity: 0;
				transition: .1s linear all;
			}
		}

		.tab:active {
			opacity: .5;
		}

	}

	.content {
		padding: 50px 15px 40px;

		.content-item {

			background-color: white;
			display: flex;
			flex-direction: column;
			border-radius: 4px;
			box-shadow: 0 0 2px #eeeeee;
			margin: 15px 0;
			overflow: hidden;
			padding: 20px 10px;

			.top {
				display: flex;
				align-items: center;

				image {
					width: 80px;
					height: 80px;
				}

				.right {
					width: calc(100% - 80px);
					padding: 10px;
				}

				.row {
					padding: 4px 0;
				}
			}

			.buttons {
				display: flex;
				justify-content: flex-end;
				padding-top: 20px;

				.button {
					border-radius: 20px;
					width: 100px;
					margin-left: 10px;
					height: 32px;
				}
			}

		}
	}
</style>
