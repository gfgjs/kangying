<template>
	<view>
		<view class="wrap text">
			我们已经给您绑定的手机号<span class="blue">{{mobile}}</span>发送了短信验证码，请正确填写验证码
		</view>
		<view class="wrap input-row">
			<view class="row">
				<view class="little" v-for="i in 6" :key='i'>{{inputs[i-1]}}</view>
			</view>
			<input id="inputCode" type="number" maxlength="6" value="" v-model="inputs" />
		</view>
		<view class="wrap tips blue text" style="display: flex;">
			60秒后可重新获取<view v-if="countDown>0">（{{countDown}}秒）</view>
		</view>
		<view class="button" @click="submit">提交</view>
		<view>

		</view>
	</view>
</template>

<script>
	import {
		request_sendReSms,
		request_sendLoginSms,
		request_register
	} from '../../common/https.js'
	import {saveLoginMessage} from '../../common/util.js'
	let timer
	export default {
		data() {
			return {
				inputs: '',
				time: '',
				countDown: 0,
				mobile: ''
			};
		},
		onShow() {
			this.countDown = getApp().globalData.verifyCodeCountDown
			this.inputs = getApp().globalData.registerMessage.verifyCode || ""
			this.mobile = getApp().globalData.registerMessage.mobile || ""

			if (this.countDown > 0) {
				this.doCountDown()
			} else {
				// 获取验证码

				request_sendReSms({
					uni,
					data: {
						mobile: getApp().globalData.registerMessage.mobile
					}
				}).then(res => {
					if (res.code === 0) {
						// 发送成功后 开始倒计时
						this.countDown = 60
						this.doCountDown()
					} else if (res.err === '手机号已经注册') {
						// this.$api.msg(res.err)
						uni.showModal({
							content: '手机号已经注册，是否前往登录？',
							success(res) {
								if (res.confirm) {
									uni.navigateTo({
										url: './login'
									})
								} else {
									uni.navigateTo({
										url: './register'
									})
								}
							}
						})
					} else {
						this.$api.msg(res.err)
					}
				})
			}
		},
		beforeDestroy() {
			clearInterval(timer)
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		methods: {
			doCountDown() {
				clearInterval(timer)
				timer = setInterval(() => {
					if (this.countDown > 0) {
						this.countDown--
						getApp().globalData.verifyCodeCountDown = this.countDown
					} else {
						clearInterval(timer)
						getApp().globalData.verifyCodeCountDown = 0
					}
				}, 1000)
			},
			submit() {
				if (!this.inputs.length) {
					uni.showToast({
						icon: 'none',
						title: '验证码有误'
					})
				} else {
					request_register({
						uni,
						data: {
							user_name: this.userName,
							gender: this.sex,
							mobile: this.mobile,
							id_card: this.idcard,
							sms_code: this.inputs,
							pass: this.password,
						}
					}).then(res => {
						if (res.code === 0) {
							this.$api.msg('注册成功！将转入注册前页面')
							saveLoginMessage(uni, {
								mobile: this.mobile,
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
					// uni.navigateTo({
					// 	url: './setPassword'
					// })
				}
			}
		},
		watch: {
			time: function(e) {
				// console.log(e);
			},
			inputs: function(e) {
				getApp().globalData.registerMessage.verifyCode = e
			}
		}
	}
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	.button {
		height: 45px;
		width: 200px;
		margin: 0 auto;
		margin-top: 40px;
		font-size: 16px;
	}

	page {
		padding: 20px 0;
	}

	.blue {
		color: $tips-color;
	}

	.text {
		font-size: 16px;
	}

	.wrap {
		width: 84vw;
		margin-left: 8vw;
	}

	.input-row {
		padding: 40px 0;
		position: relative;

		.row {
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: space-between;

			.little {
				width: 40px;
				height: 40px;
				border: 1px solid rgba(233, 236, 239, 1);
				caret-color: $tips-color;
				display: flex;
				justify-content: center;
				align-items: center;
				// color: $tips-color;
			}
		}

		#inputCode {
			// background-color: red;
			border: 1px solid rgba(233, 236, 239, 1);
			width: 100%;
			height: 120px;
			z-index: 1;
			position: absolute;
			// left: 0;
			top: 0;
			opacity: 0;
		}
	}

	button {
		width: 80%;
		margin-top: 20px;
	}
</style>
