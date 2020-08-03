<template>
	<view>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="row">
			<div class="left">
				<div>个人头像</div>
				<image @click="changeAvatar" :src="userInfo.avatar" mode=""></image>
			</div>
			<uni-icons type="arrowright"></uni-icons>
		</div>
		<div class="row">
			<div class="left">
				<div>用户名称</div>
				<input type="text" v-model="user_name" @blur="updateName">
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
		<div class="row" @click="toPage('/pages/mine/address')">
			<div class="left">
				<div>地址管理</div>
			</div>
			<uni-icons type="arrowright"></uni-icons>
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
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="button-box">
			<div class="button" @click='exitLogin'>退出登录</div>
		</view>
	</view>
</template>

<script>
	import {
		saveLoginMessage
	} from '../../common/util.js'
	import {
		request_userInfo,
		request_upUserInfo,
		request_uploadImg
	} from '../../common/https.js'
	import {
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				userInfo: {},
				user_name: ''
			};
		},
		onShow() {
			this.refresh()
		},
		methods: {
			refresh(){
				request_userInfo({
					uni,
					data: {}
				}).then(res => {
					if (res.code === 0) {
						this.userInfo = res.data
						this.user_name = res.data.user_name
					}
				})
			},
			changeAvatar() {
				request_uploadImg({
					uni
				}).then(res => {
					if(res.code==0){
						this.update({avatar: res.data})
					}
				})
			},
			updateName() {
				if (this.user_name !== this.userInfo.user_name) {
					uni.showModal({
						content: '确定要将用户名修改为：' + this.user_name + ' 吗?',
						success: e => {
							if (e.confirm) {
								this.update({user_name: this.user_name})
							}else{
								this.user_name = this.userInfo.user_name
							}
						}
					})
				}
			},
			update(data){
				request_upUserInfo({
					uni,
					data
				}).then(res => {
					this.$api.msg(res.data || res.err)
					this.refresh()
				})
			},
			toPage(url) {
				this.$pageTo({
					url
				})
			},
			exitLogin() {
				uni.showModal({
					content: '确认退出登录？',
					success: (res) => {
						if (res.confirm) {
							getApp().logout()
						}
					}
				})
			},
			...mapActions(['LOGOUT'])
		}
	}
</script>

<style lang="scss">
	.common-place {
		// background-color: #f6f6f6;
	}

	.row {
		font-size: 15px;
		height: 80px;

		image {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			box-shadow: 0 0 2px #ccc;
		}

		.left {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 88%;

			input {
				text-align: right;
			}
		}

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		border-bottom: solid 1px rgba(251, 251, 251, 1);
	}

	.row:active {
		opacity: .8;
	}

	.button-box{
		width: 100%;
		padding: 20px 0;
		background-color: white;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		.button {
			border-radius: 20px;
			
		}
	}
	
</style>
