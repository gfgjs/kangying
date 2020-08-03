<template>
	<view>
		<view class="row-title">注册成功！请设置密码</view>
		<view class="input-box">
			<input type="password" placeholder="请输入密码" v-model="password" />
		</view>
		<view class="input-box">
			<input type="password" placeholder="确认密码" v-model="confirmPassword" />
		</view>
		<view class="button" @click="submit">提交</view>
	</view>
</template>

<script>
	import {
		request_register
	} from '../../common/https.js'
	import {saveLoginMessage} from '../../common/util.js'
	export default {
		data() {
			return {
				password: '',
				confirmPassword: ''
			};
		},
		onShow() {
			/* 如果已经有token了，则说明是后退到这个页面的，就直接reLaunch到主页 */
			if (0) {
				uni.reLaunch({
					url: '../index/index'
				})
			}
			// let main = plus.android.runtimeMainActivity(); 
			// plus.runtime.quit = function() {
			// 	uni.reLaunch({
			// 		url:'../index/index'
			// 	})
			// };
			let reMessage = getApp().globalData.registerMessage
			this.password = reMessage.password
			this.confirmPassword = reMessage.confirmPassword
		},
		methods: {
			submit() {
				if (!this.password) {
					this.$api.msg('请输入密码')
					return
				}
				if (!this.confirmPassword) {
					this.$api.msg('请确认密码')
					return
				}
				if (this.password != this.confirmPassword) {
					this.$api.msg('两次输入的密码不一致')
					return
				}

				const message = getApp().globalData.registerMessage
				request_register({
					uni,
					data: {
						user_name: message.userName,
						gender: message.sex,
						mobile: message.mobile,
						id_card: message.idcard,
						sms_code: message.verifyCode,
						pass: this.password,
					}
				}).then(res => {
					if (res.code === 0) {
						this.$api.msg('注册成功！将转入注册前页面')
						saveLoginMessage(uni, {
							mobile: message.mobile,
							password: this.password,
							token: res.data
						})
						
						let lastPage = this.$lastPage
						let type = lastPage.navigateType
						
						if (type === '$switchTab') {
							this['$switchTab'](lastPage)
						} else if (type === '$pageTo') {
							this['$pageTo'](lastPage)
						}
					} else if (res.err === '手机号已注册') {
						this.$api.msg('手机号已注册，请直接登录')
						setTimeout(() => {
							uni.navigateTo({
								url: './login'
							})
						}, 1500)
					} else {
						this.$api.msg(res.err)
					}
					console.log(res);
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		width: 100%;
		padding: 20px;
	}

	.title {
		font-weight: bold;
		color: $base-color;
	}

	.row-title {
		padding: 0;
	}

	.button {
		height: 45px;
		width: 200px;
		margin: 0 auto;
		margin-top: 40px;
		font-size: 16px;
	}

	.input-box {
		width: 100%;
		height: 20vw;
		border-bottom: 1px solid #eeeeee;
		display: flex;
		align-items: center;
		justify-content: space-between;

		input {
			width: 100%;
			height: 100%;
			padding: 0 10px;
			border: none;
		}

		.code {
			width: 40vw;
		}
	}
</style>
