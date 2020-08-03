<!-- 影像检查 -->
<template>
	<view>
		<view class="row-title">
			常用选项
		</view>
		<view class="tags">
			<view class="tag" v-for="i in 20" :key='i'>胸部CT{{(i%2==0)?'胸部CT':''}}</view>
		</view>
		<view class="row-title">
			基础选项
		</view>
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
	
	.tags{
		width: 100%;
		padding:0 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		.tag{
			padding: 2px 10px;
			border-radius: 40px;
			border: 1px solid #F3F3F3;
			margin-right: 10px;
			margin-bottom: 10px;
			font-size: 14px;
			color: #121212;
		}
	}
	.list{
		.row{
			image{
				width: 40px;
				height: 40px;
			}
			display: flex;
			padding: 10px 20px;
			align-items: center;
			.text{
				width: 80%;
				margin-left: 10px;
				color: #333333;
				font-size: 16px;
			}
			.uni-icons{
				color: #333333!important;
			}
		}
	}
</style>
