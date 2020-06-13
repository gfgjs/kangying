<template>
	<view>
		<view class="row-title">患者信息</view>
		<view class="place"></view>
		<view v-for="(item,index) in 23" :key="index" class="item">
			<view class="image"></view>
			<view class="center">
				<view class="name">
					王多多
				</view>
				<view class="bottom">
					女 丨 27岁 丨胃酸胃痛胃胀
				</view>
			</view>
			<view class="right">
				患者复检
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
	page{
		padding: 0 20px;
		
	}
	.place{
		height: 61px;
	}
	.row-title{
		// padding-left: 0;
		padding-right: 0;
		position: fixed;
		width: 100%;
		background-color: white;
		box-shadow: 0 0 2px #eeeeee;
		left: 0;
	}
	
	.item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #F8F8F8;
		padding: 15px 0;
		.image{
			white-space: nowrap;
			width: 50px;
			height: 50px;
			background-color: $base-color;
			border-radius: 50%;
			margin-right: 10px;
		}
		.center{
			width: calc(100% - 130px);
			.name{
				font-size: 16px;
				color: #494949;
			}
			.bottom{
				font-size: 14px;
				color: #9E9E9E;
				margin-top: 10px;
			}
		}
		.right{
			width: 60px;
			color: $base-color;
			font-size: 14px;
			margin-left: 10px;
			white-space: nowrap;
		}
	}
	.image{
		
	}
</style>
