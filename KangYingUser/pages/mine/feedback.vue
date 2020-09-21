<template>
	<view>
		<view class="row title">请选择反馈的问题点（必选）</view>
		<radio-group>
			<view class="row">
				功能异常：在线无法正常沟通 <radio></radio>
			</view>
			<view class="row">
				性能建议：产品使用不方便<radio></radio>
			</view>
			<view class="row">
				安全问题：有不安全因素<radio></radio>
			</view>
			<view class="row">
				其他<radio></radio>
			</view>
		</radio-group>
		<textarea value="" placeholder="提交您所遇到的问题，我们会第一时间联系您~" />
		<view class="imgs-row">
			<view class="add-button">
				<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
			</view>
			<view class="add-button">
				<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
			</view>
		</view>
		<view class="button">提交反馈</view>
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
	.row{
		padding:15px 20px;
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		align-items: center;
	}
	.title{
		font-size: 16px;
		background-color: rgba(245,247,251,1);
		height: 55px;
	}
	textarea{
		padding: 15px 20px;
		background-color: rgba(245,247,251,1);
		width: 100%;
		font-size: 14px;
	}
	.imgs-row{
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		
		.add-button {
			height: 50px;
			width: 50px;
			border-radius: 4px;
			background-color: #F7F7F7;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 20px;
		}
	}
	.button{
		width: 100%;
		height: 55px;
		position: fixed;
		left: 0;
		bottom: 0;
	}
</style>
