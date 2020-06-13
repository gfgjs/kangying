<template>
	<view>
		<view class="header">
			<image class="" src="../../static/index/top.png" mode=""></image>
		</view>
		<view class="menus-box">
			<view class="row-title">
				医生诊疗室
				<label for="" style="display: flex;align-items: center;">
					<switch class="" color="#5EB6AA"></switch>
					<view style="margin-left: 6px;">出诊</view>
				</label>
			</view>
			<view class="row">
				<view class="row-item">
					<view class="number">0</view>
					<view class="name">患者</view>
				</view>
				<view class="row-item">
					<view class="number">0</view>
					<view class="name">患者</view>
				</view>
				<view class="row-item">
					<view class="number">0</view>
					<view class="name">患者</view>
				</view>
			</view>
			<view class="row">
				<view class="row-item">
					<view class="number">0</view>
					<view class="name">患者</view>
				</view>
				<view class="row-item">
					<view class="number">0</view>
					<view class="name">患者</view>
				</view>
				<view class="row-item">
					<view class="number">0</view>
					<view class="name">患者</view>
				</view>
			</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="menus-box">
			<view class="row-title">服务中心</view>
			<view class="row" style="border: none;">
				<view class="row-item">
					<image src="../../static/index/1.png" mode=""></image>
					<view class="name">患者</view>
				</view>
				<view class="row-item">
					<image src="../../static/index/2.png" mode=""></image>
					<view class="name">患者</view>
				</view>
				<view class="row-item">
					<image src="../../static/index/3.png" mode=""></image>
					<view class="name">患者</view>
				</view>
				<view class="row-item">
					<image src="../../static/index/4.png" mode=""></image>
					<view class="name">患者</view>
				</view>
			</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		/* width: 100%; */
		background-color: $base-background-color;
	}

	.menus {
		background-color: white;
	}

	.header {
		image {
			width: 100%;
			height: 67.3vw;
		}
	}

	.menus-box {
		padding: 0 20px;

		.row-title {
			padding-left: 0;
		}

		// background-color: red;
		.row {
			border-bottom: 1px solid #F1F1F1;
			display: flex;
			justify-content: space-between;
			padding: 0 20px;

			.row-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 20px 0;
				image{
					width: 24px;
					height: 26px;
				}

				.number {
					font-size: 24px;
				}

				.name {
					color: #494949;
					font-size: 16px;
					margin-top: 6px;
				}
				
			}
		}

		.row:nth-of-type(3) {
			border: none;
		}
	}

	.row-title {
		display: flex;

		justify-content: space-between;
	}
</style>
