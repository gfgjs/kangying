<template>
	<view class="wrap">
		<view class="nav-place"></view>
		<view class="title">欢迎来到天心医疗平台</view>
		<!-- 注册 -->
		<view class="input-box register-mobile" v-if="pageType==='register'">
			<input type="number" placeholder="请输入手机号" />
			<view class="button" @click="getCode">{{codeTips}}</view>
		</view>
		<view class="input-box" v-if="pageType==='register'">
			<input type="number" maxlength="6" placeholder="请输入验证码" />
		</view>
		<view class="input-box" v-if="pageType==='register'">
			<input type="password" placeholder="请输入密码" />
		</view>
		<view class="input-box" v-if="pageType==='register'">
			<input type="password" placeholder="确认密码" />
		</view>

		<!-- 登录 -->
		<view class="input-box" v-if="pageType!=='register'">
			<input type="number" placeholder="请输入手机号" v-model="mobile" />
		</view>

		<!-- 验证码登录 -->
		<view class="input-box" v-if="pageType==='code'">
			<input type="number" maxlength="6" placeholder="请输入验证码" v-model="code" class="code" />
			<view class="button" @click="getCode">{{codeTips}}</view>
		</view>

		<!-- 密码登录 -->
		<view class="input-box" v-if="pageType==='password'">
			<input type="password" placeholder="请输入登录密码" v-model="password" />
			<!-- <uni-icons v-if="!showPassword" @click="changeShowPassword" type="eye-filled" color="gray"></uni-icons> -->
			<!-- <uni-icons v-if="showPassword" @click="changeShowPassword" type="eye-slash-filled" color="gray"></uni-icons> -->
		</view>
		<!-- 注册按钮 -->
		<view class="button big-button" v-if="pageType==='register'">立即注册</view>
		<!-- 登录按钮 -->
		<view class="button big-button" v-if="pageType==='code'" @click="loginByCode">登录</view>
		<view class="button big-button" v-if="pageType==='password'" @click="loginByPass">登录</view>

		<view class="jump">
			<!-- 注册页面 -->
			<view v-if="pageType==='register'" class="place"></view>
			<view v-if="pageType==='register'" @click="changeType('code')">已有账号？立即登录</view>
			<!-- 左 -->
			<view v-if="pageType!=='register'" @click="navToRegister('register')">立即注册</view>
			<!-- 右 -->
			<view v-if="pageType==='code'" @click="changeType('password')">密码登录</view>
			<view v-if="pageType==='password'" @click="changeType('code')">验证码登录</view>
		</view>
	</view>
</template>

<script>
	let timer = null;
	import {
		request_sendLoginSms,
		request_codeLogin,
		request_login
	} from '../../common/https.js'
	import {
		saveLoginMessage,
		readLoginMessage
	} from '../../common/util.js'
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				codeTips: '获取验证码', // 验证码按钮提示

				mobile: '',
				code: '',
				password: '',

				cutdown: 0, // 获取验证码倒计时
				pageType: 'password', // password密码登录 code验证码登录 register注册 页面功能

				// showPassword: false,

			};
		},
		computed:{
			...mapGetters(['hasLogin'])
		},
		onShow() {
			if(this.hasLogin){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
			const message = readLoginMessage(uni)
			this.mobile = message.mobile
			this.password = message.password
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		methods: {
			loginByCode() {
				if (!this.mobile) {
					this.$api.msg('请输入正确的手机号')
					return
				}
				if (!this.code) {
					this.$api.msg('请输入验证码')
					return
				}
				request_codeLogin({
					uni,
					data: {
						sms_code: this.code,
						mobile: this.mobile
					}
				}).then(res => {
					if (res.code === 0) {
						this.loginSuccess(res.data)
					}else{
						this.$api.msg(res.err)
					}
				})
			},
			loginByPass() {
				if (!this.mobile) {
					this.$api.msg('请输入正确的手机号')
					return
				}
				if (!this.password) {
					this.$api.msg('请输入密码')
					return
				}
				request_login({
					uni,
					data: {
						pass: this.password,
						mobile: this.mobile
					}
				}).then(res => {
					if (res.code === 0) {
						this.loginSuccess(res.data)
					}else{
						this.$api.msg(res.err)
					}
				})
			},
			loginSuccess(token) {
				this.$api.msg('登录成功')

				saveLoginMessage(uni, {
					mobile: this.mobile,
					password: this.password,
					token
				})
				// 手机号登录后获取用户信息
				getApp().login().then(()=>{
					this.$pageTo({delta:1})
				})
			},
			changeShowPassword() {
				this.showPassword = !this.showPassword
			},
			changeType(type) {
				this.pageType = type
			},
			navToRegister(type) {
				// this.pageType = type
				uni.navigateTo({
					url: './register'
				})
			},
			getCode() {
				if (this.cutdown > 0) {
					uni.showToast({
						title: this.cutdown + ' 秒后可再次获取',
						icon: 'none'
					})
					return
				}
				this.cutdown = 60;
				uni.showToast({
					title: '发送成功',
					icon: 'none'
				})
				this.codeTips = '60 秒后可再次获取';
				clearInterval(timer)
				timer = setInterval(() => {
					if (this.cutdown >= 1) {
						this.cutdown--;
						this.codeTips = this.cutdown + ' 秒后可再次获取';
					} else {
						this.codeTips = '获取验证码'
					}
				}, 1000)
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		width: 100%;
	}

	.big-button {
		margin: 40px auto 0;
		width: 100%;
		height: 50px;
		font-size: 18px;
	}

	.wrap {
		height: 100%;
		width: 100%;
		padding: 20px;

		.title {
			font-weight: bold;
			color: $base-color;
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

		.register-mobile {
			input {
				width: 50%;
			}
		}

		button {
			margin-top: 40px;
		}

		.jump {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-top: 40px;
			color: #565656;
			font-size: 14px;
		}

		.jump>view:active {
			opacity: .8;
		}
	}
</style>
