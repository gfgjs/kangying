<template>
	<view>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="row">
			<div class="left">
				<div>个人头像</div>
				<image src="../../static/home/15.png" mode=""></image>
			</div>
			<uni-icons type="arrowright"></uni-icons>
		</div>
		<div class="row">
			<div class="left">
				<div>用户名称</div>
				<input type="text" value="王大毛" disabled>
			</div>
			<uni-icons type="arrowright"></uni-icons>
		</div>
		<div class="row">
			<div class="left">
				<div>绑定手机号</div>
				<input type="text" value="18728282828" disabled>
			</div>
			<uni-icons type="arrowright"></uni-icons>
		</div>
		<div class="row">
			<div class="left">
				<div>微信账号</div>
			</div>
			<!-- <uni-icons type="arrowright"></uni-icons> -->
		</div>
		<div class="row">
			<div class="left">
				<div>推荐给朋友</div>
			</div>
			<!-- <uni-icons type="arrowright"></uni-icons> -->
		</div>
		<div class="row">
			<div class="left">
				<div>关于我们</div>
			</div>
			<!-- <uni-icons type="arrowright"></uni-icons> -->
		</div>
		<div class="button">退出登录</div>
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
	.common-place {
		background-color: #f6f6f6;
	}

	.row {
		font-size: 15px;
		height: 80px;
		image{
			width: 50px;
			height: 50px;
		}
		.left{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 88%;
			input{
				text-align: right;
			}
		}
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		border-bottom: solid 1px rgba(251,251,251,1);
	}
	.row:active{
		opacity: .2;
	}
	.button{
		border-radius: 20px;
		position: fixed;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
