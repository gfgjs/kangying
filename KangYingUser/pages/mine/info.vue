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
				<input type="text" :value="userInfo.user_name" disabled>
			</div>
			<uni-icons type="arrowright"></uni-icons>
		</div>
		<div class="row">
			<div class="left">
				<div>绑定手机号</div>
				<input type="text" :value="userInfo.mobile" disabled>
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
		<div class="button" @click='exitLogin'>退出登录</div>
	</view>
</template>

<script>
	import {saveLoginMessage} from '../../common/util.js'
	import {request_userInfo} from '../../common/https.js'
	export default {
		data() {
			return {
userInfo:''
			};
		},
		onShow() {
			request_userInfo({
				uni,
				data:{}
			}).then(res=>{
				if(res.code===0){
					this.userInfo = res.data
				}
				console.log(res);
			})
		},
		methods:{
			exitLogin(){
				uni.showModal({
					content:'确认退出登录？',
					success:(res)=> {
						if(res.confirm){
							saveLoginMessage(uni,{})
							this.$switchTab({
								url:'/pages/index/index'
							})
						}
					}
				})
			}
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
		opacity: .8;
	}
	.button{
		border-radius: 20px;
		position: fixed;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
