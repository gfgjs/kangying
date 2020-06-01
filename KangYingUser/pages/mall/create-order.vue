<template>
	<view>
		<view class="header">
			<view class="message">
				<view class="text">
					<view class="row">
						<view class="title">徐成业</view>
						<view class="title">12203202012</view>
					</view>
					<view class="address">
						北京市东城区后海胡同24号院路口东
					</view>
				</view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
			<image src="../../static/imgs/color-bar.png"></image>
		</view>

		<div class="common-place"></div>

		<radio-group>
			<view>
				<div class="common-place"></div>
				<div class="common-place"></div>
				<view class="case">
					<view class="title row">闪送方案 <radio checked></radio>
					</view>
					<view class="row">
						<view>中药费用</view>
						<view>65.65</view>
					</view>
					<view class="row">
						<view>西药费用</view>
						<view>65.65</view>
					</view>
					<view class="row">
						<view>快递费用</view>
						<view>65.65</view>
					</view>
				</view>
			</view>
			<view>
				<div class="common-place"></div>
				<div class="common-place"></div>
				<view class="case">
					<view class="title row">快递方案 <radio></radio>
					</view>
					<view class="row">
						<view>中药费用</view>
						<view>65.65</view>
					</view>
					<view class="row">
						<view>西药费用</view>
						<view>65.65</view>
					</view>
					<view class="row">
						<view>快递费用</view>
						<view>65.65</view>
					</view>
				</view>
			</view>
		</radio-group>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<radio-group class="pay-type">
			<view class="row">
				<view class="left">
					<image src="../../static/imgs/weixin.png" mode=""></image>
					<view>微信支付</view>
				</view>
				<radio checked=""></radio>
			</view>
			<view class="row">
				<view class="left">
					<image src="../../static/imgs/alipay.png" mode=""></image>
					<view>支付宝支付</view>
				</view>
				<radio></radio>
			</view>
		</radio-group>

		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		
		<view class="bottom">
			<view class="left">
				共两件商品，总金额
				<view class="price">￥899</view>
			</view>
			<view class="button">
				立即下单
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.common-place {
		background-color: rgba(245, 245, 245, 1);
	}

	.header {
		position: relative;

		image {
			height: 4px;
			width: 100%;
			position: absolute;
			bottom: 0;
		}

		background-color: white;
		padding-bottom: 20px;

		.message {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30px 20px 10px;

			.text {
				display: flex;
				flex-direction: column;

				>view {
					display: flex;
				}

				.title {
					margin-right: 20px;
				}

				.address {
					font-size: 14px;
					margin-top: 20px;
				}
			}
		}
	}

	.case {
		padding: 20px 20px 0;

		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 0;
			border-bottom: #F8F5F5 solid 1px;
			font-size: 14px;
			
		}
		.title{
			font-size: 16px;
		}
	}
	.pay-type{
		.row{
			padding: 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left{
				display: flex;
				align-items: center;
				font-size: 16px;
				image{
					width: 31px;
					height: 31px;
					margin-right: 10px;
				}
			}
		}
	}
	.bottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: white;
		display: flex;
		height: 50px;
		justify-content: space-between;
		box-shadow: 0 0 2px #eeeeee;
		.left{
			display: flex;
			align-items: center;
			font-size: 15px;
			padding-left: 20px;
			.price{
				padding-left: 10px;
				font-size: 18px;
				font-weight: bold;
			}
		}
		.button{
			border-radius: 0;
			height: 100%;
		}
	}
</style>
