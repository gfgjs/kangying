<template>
	<view class="list">
		<view class="item" v-for="i in 100" :key="i">
			<image src="../static/med.png" mode=""></image>
			<view class="right">
				<view class="name">【买送共发120片】汤臣倍健 牛初乳加钙咀嚼片 60片 +30片2瓶</view>
				<view class="row brief">
					<view class="data">已售出<view class="price">89</view>份/<view class="price">97%</view>好评率</view>
					<view class="price bold">￥1.28</view>
				</view>
				<view class="row">
					<view class="address">北京同仁堂大药房（太古店）</view>
					<uni-icons type="plus-filled" class="plus" size="24"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'productList',
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list {
		width: 100%;
		// padding: 0 20px;
		// background-color: red;
		.item {
			display: flex;
			justify-content: space-between;
			background: none;
			width: 100%;
			border-bottom: solid 1px rgba(247,249,252,1);
			padding-bottom: 20px;

			.right {
				width: calc(100% - 100px);
				.name {
					font-size: 14px;
					width: 100%;
				}
				.row{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 6px 0;
					font-size: 14px;
					.data{
						display: flex;
					}
					.plus{
						color: $base-color!important;
					}
				}
			}
		}

		image {
			width: 80px;
			height: 80px;
			padding: 10px;
		}
	}
</style>
