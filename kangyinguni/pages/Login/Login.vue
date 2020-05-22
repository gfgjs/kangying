<template>
	<view>
		<input type="text" value="" placeholder="账户"/>
		<input type="password" value="" placeholder="密码"/>
		<button type="default" @click="goHome">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goHome() {
				uni.switchTab({
					url: '../tabbar/Home/Home'
				})
			}
		}
	}
</script>

<style lang="less">
	view {
		box-sizing: border-box;
		height: 100vh;
		padding-top: var(--status-bar-height);
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		
		input,button{
			box-sizing: border-box;
			width: 70%;
			height: 50px;
			background-color: #efefef;
			padding-left: 10px;
			border-radius: 4px;
			margin: 4px 0;
		}
	}
</style>
