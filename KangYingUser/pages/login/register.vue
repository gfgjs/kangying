<template>
	<view>
		<view class="header">
			<view>1.填写信息</view>
			<view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
			<view>2.手机验证</view>
			<view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
			<view>3.设置密码</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="content">
			<view class="row">
				<view class="title">
					<view class="price">*</view>姓名
				</view>
				<input type="text" placeholder="请填写您的姓名" v-model="userName">
			</view>
			<view class="row">
				<view class="title">
					<view class="price">*</view>性别
				</view>
				<picker mode="selector" :range="sexArray" @change="sexSelect">
					<view class="picker">
						<view class="little-title" :style="sex&&'font-size:16px;color:inherit;'">{{sex||'请选择您的性别'}}</view>
						<uni-icons type="arrowdown"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="row">
				<view class="title">
					<view class="price">*</view>联系电话
				</view>
				<input type="text" placeholder="请填写您的联系电话" v-model="mobile">
			</view>
			<view class="row">
				<view class="title">
					<view class="price">*</view>身份证号
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>
			<view class="button" @click="getVerifyCode">
				获取验证码
			</view>
		</view>

	</view>
</template>

<script>
	import {
		request_sendLoginSms
	} from '../../common/https.js'
	export default {
		data() {
			return {
				sexArray: ['男', '女'],
				userName: '王大毛',
				sex: '男',
				mobile: '18299299929',
				idcard: '122331223122321212'
			};
		},
		methods: {
			getVerifyCode() {
				if (!this.userName) {
					uni.showToast({
						title: '请填写您的姓名',
						icon: 'none'
					})
					return
				}
				if (!this.sex) {
					uni.showToast({
						title: '请选择您的性别',
						icon: 'none'
					})
					return
				}
				if (this.mobile.length != 11) {
					uni.showToast({
						title: '请填写正确的联系电话',
						icon: 'none'
					})
					return
				}
				if (this.idcard.length != 18) {
					uni.showToast({
						title: '请填写正确的身份证号',
						icon: 'none'
					})
					return
				}

				let {
					mobile,
					userName,
					idcard,
					sex
				} = this

				getApp().globalData.registerMessage.mobile = mobile
				getApp().globalData.registerMessage.userName = userName
				getApp().globalData.registerMessage.idcard = idcard
				getApp().globalData.registerMessage.sex = sex

				uni.navigateTo({
					url: './verify-code'
				})
			},
			sexSelect(e) {
				console.log(e);
				this.sex = this.sexArray[e.detail.value]
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $page-color-base;
	}

	.header {
		background-color: white;
		display: flex;
		justify-content: space-around;
		padding: 10px 4vw;
		font-size: 14px;
		position: fixed;
		width: 100%;
		height: 50px;

		.uni-icons {
			font-size: 10px !important;
		}
	}

	.content {
		background-color: white;
		border-radius: 4px;
		width: 96vw;
		margin: 0 auto;
		padding: 15px;

		.row {
			.title {
				font-size: 16px;
				display: flex;
			}

			border-bottom: rgba(251, 251, 251, 1) 1px solid;
			padding: 20px 20px 30px;

			input,
			.picker {
				height: 50px;
				padding-left: 10px;
				padding-top: 25px;
			}

			.picker {
				display: flex;
				justify-content: space-between;
			}
		}

		.button {
			border-radius: 20px;
			margin: 30px auto;
		}
	}
</style>
