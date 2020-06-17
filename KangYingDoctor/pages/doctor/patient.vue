<template>
	<view>
		<view class="header">
			<view class="nav-place"></view>
			<view class="message">
				<image src="../../static/doctor/patient-header.png" mode=""></image>
				<view class="middle">
					<view class="title">张白银</view>
					<view class="little-title">女丨24岁丨急性肠胃炎</view>
				</view>
				<view class="set-tag">设置标签</view>
			</view>
		</view>
		<view class="message-box">
			<view class="row-title">
				<view>患者资料</view>
				<view class="right">全部资料
					<uni-icons type="arrowdown"></uni-icons>
				</view>
			</view>
			<view class="row">
				<view class="dot"></view>
				<view class="text-row">电话：18789878887</view>
			</view>
			<view class="row">
				<view class="dot"></view>
				<view class="text-row">疾病分类：肠胃不适</view>
			</view>
			<view class="row">
				<view class="dot"></view>
				<view class="text-row">住址：北京市海淀区和祥胡同16号</view>
			</view>
		</view>
		<view class="message-box case-box" >
			<view class="row-title">
				<view>电子病历</view>
				<view class="right">全部档案
					<uni-icons type="arrowdown"></uni-icons>
				</view>
			</view>
			<view class="case" v-for="i in 3" :key='i'>
				<view class="row time">2020.05.23  14:00</view>
				<view class="row">
					<view class="dot"></view>
					<view class="text-row">电话：18789878887</view>
				</view>
				<view class="row">
					<view class="dot"></view>
					<view class="text-row">疾病分类：肠胃不适</view>
				</view>
				<view class="row">
					<view class="dot"></view>
					<view class="text-row">住址：北京市海淀区和祥胡同16号</view>
				</view>
			</view>
		</view>
		<view class="button chat-button">患者交流</view>
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
	page {
		background-color: $base-background-color;
	}

	.header {
		width: 100%;
		height: 200px;
		background: url(../../static/doctor/patient-header.png) no-repeat;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);

		.message {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 44px;

			image {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				border: 1px solid white;
			}

			.middle,
			.set-tag {
				margin-left: 20px;
			}

			.title {
				color: white;
			}

			.little-title {
				color: #EAF4FF;
				margin-top: 10px;
			}

			.set-tag {
				background-color: #66A098;
				padding: 6px 12px;
				border-radius: 40px;
				font-size: 14px;
				color: #ffffff;
			}
		}

	}

	.message-box {
		width: 92%;
		background-color: white;
		margin: 20px auto;
		border-radius: 4px;
		position: relative;
		box-shadow: 0 0 8px #eeeeee;
		padding-bottom: 10px;

		.row-title {
			display: flex;
			justify-content: space-between;

			.right {
				color: #565656;
				font-size: 14px;
			}
		}
	
		.row{
			display: flex;
			align-items: center;
			height: 44px;
			padding: 0 20px;
			.dot{
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: $base-color;
				margin-right: 10px;
				margin-top: 2px;
			}
			.text-row{
				font-size: 14px;
				color: #2E2E2E;
				
			}
		}
	
		.case{
			width: 92%;
			background-color: 	#F8F8F8;
			margin: 0 auto 20px;
			.time{
				font-size: 14px;
				color: #2d2d2d;
			}
		}
	
	}
	.chat-button{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 54px;
	}
	.case-box{
		margin-bottom: 64px;
	}
</style>
