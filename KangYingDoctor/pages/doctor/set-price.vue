<template>
	<view>
		<view class="row border-bottom">
			<view class="title">初诊价格:</view>
			<view class="little-title">12元</view>
		</view>
		<view class="row border-bottom">
			<view class="title">复诊价格:</view>
			<view class="little-title">12元</view>
		</view>
		<view class="row border-bottom">
			<view class="title">接单上限:</view>
			<view class="little-title">12元</view>
		</view>
		<view class="textarea-box">
			<view class="title">在线问诊服务说明</view>
			<textarea value="" placeholder="请输入说明" />
			</view>
		<view class="button">保存设置</view>
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

<style lang="scss" scoped>
	page{
		padding: 0 20px;
	}
	.border-bottom{
		border-bottom: 1px solid #F8F5F5;
	}
	.row{
		display: flex;
		height: 54px;
		align-items: center;
		.title{
			color: #000000;
			font-weight: 400;
			font-size: 16px;
		}
		.little-title{
			margin-left: 20px;
			color: #363636;
		}
	}
	.textarea-box{
		padding: 20px 0;
		textarea{
			background-color: #F6F6F6;
			width: 100%;
			margin: 20px 0;
			border-radius: 4px;
			padding: 10px;
		}
	}
	.button{
		margin: 0 auto;	
	}

</style>
