<template>
	<view>
		<view class="header">
			<view class="buttons-box">
				<view class="item" v-for="(item,index) in tabs" :key="item" @click="clickTab(item,index)" :class="index==currIndex&&'item-checked'">{{item}}</view>
			</view>
		</view>
		<view class="header-place"></view>
		<view class="order-item" v-for="(item,index) in list" :key="index">
			<view class="row time title"><text>{{item.PExamInfo.main_title}}</text> <text class="right-text">待使用</text></view>
			<view class="row">
				<image src="../../static/index/top.png" mode=""></image>
				<view class="right">
					<view class="text-row" style="color: #000000;">1张丨总价：¥{{item.pay_money}}</view>
					<view class="text-row">预约日期：{{formatDate(item.appoint_time)}}</view>
				</view>
			</view>
			<view class="row buttons">
				<view class="button" @click="phoneTo(item)">联系用户</view>
				<!-- <view class="button">预约时间</view> -->
			</view>
		</view>
		<view class="no-data" v-if="!list.length">暂无数据</view>

	</view>
</template>

<script>
	import {
		request_pexamOrders
	} from '../../common/https.js'
	import {
		formatDate,
		formatMinute
	} from '../../common/util.js'
	export default {
		data() {
			return {
				currIndex: 0,
				tabs: ['全部订单', '待使用'],
				formatDate,
				formatMinute,
				list: []
			};
		},
		onShow() {
			this.clickTab({},0)
		},
		methods: {
			clickTab(item, index) {
				this.currIndex = index
				request_pexamOrders({
					uni,
					data:{
						status: index
					}
				}).then(res => {
					this.list = res.data || []
				})
			},
			phoneTo(item) {
				uni.makePhoneCall({
					// 手机号
					phoneNumber: item.user_mobile,
					// 成功回调
					success: (res) => {
						console.log('调用成功!')
					},
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		z-index: 1;
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
				border-left: 1px solid white;
			}

			.item:first-of-type {
				border: none;
			}

			.item-checked {
				color: $base-color;
				background-color: white;
			}
		}
	}

	.order-item {
		background-color: white;
		padding: 0 20px;
		font-size: 14px;
		color: #646464;
		margin-top: 10px;
		width: 90%;
		background-color: white;
		border-radius: 4px;
		margin: 10px auto;
		box-shadow: 0px 8px 21px 0px rgba(94, 182, 170, 0.04);

		.row {
			display: flex;

			align-items: center;

			image {
				height: 70px;
				width: 70px;
				border-radius: 6px;
			}

			.right {
				margin-left: 10px;

				.text-row {
					margin: 10px 0;
				}
			}
		}

		.buttons {
			padding: 10px 0;
			display: flex;
			justify-content: flex-end;

			.button {
				width: 100px;
				margin-left: 15px;
			}
		}

		.title {
			font-size: 14px;
			color: #000000;
			min-width: 4rem;
		}

		.time {
			height: 54px;
			justify-content: space-between;

			.right-text {
				color: $base-color;

			}
		}

		.border-bottom {
			border-bottom: solid 1px #FBFBFB;
		}
	}
</style>
