<template>
	<view>
		<view class="list">
			<view class="row border-bottom" v-for="i in 10" :key='i'>
				<image src="../../static/index/top.png" mode=""></image>
				<view class="text">X片检查</view>
				<uni-icons type="arrowright"></uni-icons>
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
	.list {
		.row {
			image {
				width: 40px;
				height: 40px;
			}

			display: flex;
			padding: 10px 20px;
			align-items: center;

			.text {
				width: 80%;
				margin-left: 10px;
				color: #333333;
				font-size: 16px;
			}

			.uni-icons {
				color: #333333 !important;
			}
		}
	}
</style>
