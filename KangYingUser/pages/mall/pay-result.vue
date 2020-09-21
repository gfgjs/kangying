<template>
	<view>
		<view class="top">
			<uni-icons type="checkbox-filled" size="48"></uni-icons>
			<view class="title">付费成功！</view>
		</view>
		<view class="message">
			您已成功付费，请于上午9:00-10:00到医院药房取药。取药号码：0038
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
	}
</script>

<style lang="scss">
	.top{
		display: flex;
		flex-direction: column;align-items: center;
		padding: 70px 0;
		.uni-icons{
			color: $base-color!important;
			margin-bottom: 20px;
		}
	}
	.message{
		padding: 20px 40px;
		font-size: 15px;
		text-indent: 30px;
		line-height: 2;
	}
</style>
