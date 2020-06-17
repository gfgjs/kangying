<template>
	<view>
		<!-- 	<view class="header">
			<view>1.填写信息</view>
			<view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
			<view>2.手机验证</view>
			<view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
			<view>3.设置密码</view>
		</view> -->
		<!-- <view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view> -->
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="content">
			<view class="row">
				<view class="title">
					<view class="price" :style="userName&&'opacity:0;'">*</view>姓名
				</view>
				<input type="text" placeholder="请填写您的姓名" v-model="userName">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="userName&&'opacity:0;'">*</view>性别
				</view>
				<radio-group name="" class="radio-group">
					<label>
						<view>
							<radio color="#5EB6AA" /><text>男</text></view>
						<view>
							<radio color="#5EB6AA" /><text>女</text></view>
					</label>
				</radio-group>
			</view>

			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>身份证号
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>出生日期
				</view>
				<input type="idcard" placeholder="根据身份证自动识别" disabled v-model="idcard">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>家庭地址
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>所在医院
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>所在科室
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>
			
			<!-- 体检管理员 -->
			<view class="row">
				<view class="title">
					<view class="price" :style="userName&&'opacity:0;'">*</view>执业资质
				</view>
				<radio-group name="" class="radio-group">
					<label>
						<view>
							<radio color="#5EB6AA" /><text>有</text></view>
						<view>
							<radio color="#5EB6AA" /><text>无</text></view>
					</label>
				</radio-group>
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="userName&&'opacity:0;'">*</view>职称
				</view>
				<radio-group name="" class="radio-group">
					<label>
						<view>
							<radio color="#5EB6AA" /><text>有</text></view>
						<view>
							<radio color="#5EB6AA" /><text>无</text></view>
					</label>
				</radio-group>
			</view>
			<!-- | -->			
			
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>执业药师证编码
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>

			<view class="row">
				<view class="title">
					<view class="price">*</view>职称
				</view>
				<picker mode="selector" :range="level">
					<view class="picker">
						<view class="little-title" :style="sex&&'font-size:16px;color:inherit;'">{{'请选择您的职称'}}</view>
						<uni-icons type="arrowdown"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>从业年限
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>上传证件照片
				</view>

				<view class="imgs-row">
					<view class="add-button">
						<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
					</view>
					<view class="add-button">
						<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>本人银行卡号
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>银行开户户名
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>开户行
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>


			<view class="row mobile-row">
				<view class="title">
					<view class="price" :style="mobile&&'opacity:0;'">*</view>联系电话
				</view>
				<view class="mobile-row">
					<input type="text" placeholder="请填写您的联系电话" v-model="mobile">
					<view class="get-code" @click="getVerifyCode">{{countDown?(countDown+' 秒后再次获取'):'获取验证码'}}</view>
				</view>
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="verifyCode&&'opacity:0;'">*</view>手机验证码
				</view>
				<input type="password" placeholder="请填写您收到的验证码" v-model="verifyCode">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>备用联系电话
				</view>
				<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="password&&'opacity:0;'">*</view>登录密码
				</view>
				<input type="password" placeholder="请填写您的登录密码" v-model="password">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="verifyPassword&&'opacity:0;'">*</view>确认密码
				</view>
				<input type="password" placeholder="请确认登录密码" v-model="verifyPassword">
			</view>

			<view class="button register" @click="submitLogin">
				确认注册
			</view>
		</view>

	</view>
</template>

<script>
	// import {
	// 	request_sendLoginSms,
	// 	request_sendReSms,
	// 	request_register
	// } from '../../common/https.js'
	// import {
	// 	saveLoginMessage
	// } from '../../common/util.js'
	let timer
	export default {
		data() {
			return {
				level: ['医师', '主治医师', '副主任医师', '主任医师'],
				userName: '',
				sex: '男',
				mobile: '',
				idcard: '',
				verifyPassword: '',
				password: '',
				countDown: 0,
				verifyCode: ''
			};
		},
		beforeDestroy() {
			clearInterval(timer)
		},
		methods: {
			submitLogin() {
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
				if (!this.verifyCode) {
					uni.showToast({
						title: '请填写正确的联系电话',
						icon: 'none'
					})
					return
				}
				if (!this.password) {
					uni.showToast({
						title: '请填写登录密码',
						icon: 'none'
					})
					return
				}
				if (!this.verifyPassword) {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					})
					return
				}
				if (this.verifyPassword != this.password) {
					uni.showToast({
						title: '两次输入密码不一致',
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

				this.submit()

				// let {
				// 	mobile,
				// 	userName,
				// 	idcard,
				// 	sex
				// } = this

				// getApp().globalData.registerMessage.mobile = mobile
				// getApp().globalData.registerMessage.userName = userName
				// getApp().globalData.registerMessage.idcard = idcard
				// getApp().globalData.registerMessage.sex = sex

				// uni.navigateTo({
				// 	url: './verify-code'
				// })
			},
			submit() {

				// request_register({
				// 	uni,
				// 	data: {
				// 		user_name: this.userName,
				// 		gender: this.sex,
				// 		mobile: this.mobile,
				// 		id_card: this.idcard,
				// 		sms_code: this.verifyCode,
				// 		pass: this.password,
				// 	}
				// }).then(res => {
				// 	if (res.code === 0) {
				// 		this.$api.msg('注册成功！将转入注册前页面')
				// 		saveLoginMessage(uni, {
				// 			mobile: this.mobile,
				// 			password: this.password,
				// 			token: res.data
				// 		})

				// 		let lastPage = this.$lastPage
				// 		let type = lastPage.navigateType

				// 		setTimeout(() => {
				// 			if (type === '$switchTab') {
				// 				this['$switchTab'](lastPage)
				// 			} else if (type === '$pageTo') {
				// 				this['$pageTo'](lastPage)
				// 			}
				// 		}, 1500)
				// 	} else if (res.err === '手机号已注册') {
				// 		uni.showModal({
				// 			content: '手机号已经注册，是否前往登录？',
				// 			success(res) {
				// 				if (res.confirm) {
				// 					uni.navigateTo({
				// 						url: './login'
				// 					})
				// 				} else {
				// 					uni.navigateTo({
				// 						url: './register'
				// 					})
				// 				}
				// 			}
				// 		})
				// 	} else {
				// 		this.$api.msg(res.err)
				// 	}
				// })
			},
			getVerifyCode() {
				if (this.countDown > 0) {
					this.$api.msg(this.countDown + ' 秒后可再次获取')
				} else {
					// request_sendReSms({
					// 	uni,
					// 	data: {
					// 		mobile: this.mobile
					// 	}
					// }).then(res => {
					// 	if (res.code === 0) {
					// 		// 发送成功后 开始倒计时
					// 		this.countDown = 60
					// 		this.doCountDown()
					// 	} else if (res.err === '手机号已经注册') {
					// 		// this.$api.msg(res.err)
					// 		uni.showModal({
					// 			content: '手机号已经注册，是否前往登录？',
					// 			success(res) {
					// 				if (res.confirm) {
					// 					uni.navigateTo({
					// 						url: './login'
					// 					})
					// 				} else {
					// 					uni.navigateTo({
					// 						url: './register'
					// 					})
					// 				}
					// 			}
					// 		})
					// 	} else {
					// 		this.$api.msg(res.err)
					// 	}
					// })
				}
			},
			doCountDown() {
				clearInterval(timer)
				timer = setInterval(() => {
					if (this.countDown > 0) {
						this.countDown--
						// getApp().globalData.verifyCodeCountDown = this.countDown
					} else {
						clearInterval(timer)
						// getApp().globalData.verifyCodeCountDown = 0
					}
				}, 1000)
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
		background-color: $base-background-color;
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
			.picker,
			.mobile-row,
			.radio-group,
			.imgs-row {
				height: 50px;
				padding-left: 10px;
				padding-top: 25px;
			}

			.picker,
			.mobile-row,
			.imgs-row {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.imgs-row {
				justify-content: flex-start;
			}

			.radio-group {
				label {
					display: flex;

					view {
						margin-right: 20px;
					}
				}
			}

			.mobile-row {
				input {
					height: auto;
					padding: 0;
				}

				font-size: 16px;

				.get-code {
					color: $base-color;
					min-width: 50%;

					display: flex;
					align-items: center;
					justify-content: flex-end;
				}

				.get-code:active {
					opacity: .6;

				}
			}
		}

		.register {
			border-radius: 20px;
			margin: 30px auto;
		}
	}

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
</style>
