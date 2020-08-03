<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import {
		readLoginMessage,
		saveLoginMessage
	} from '@/common/util.js'
	import {
		request_userInfo,
		request_imInit,request_clearToken
	} from '@/common/https.js'

	import JMessage from './common/jmessage-wxapplet-sdk-1.4.3.min.js'
	import Vue from 'vue'


	export default {
		globalData: {
			regMessage: {}
		},
		data() {
			return {
				jimAuth: {},
				hasHide: false
			}
		},
		onLaunch: function() {
			console.log('App Launch');
			this.login()
			
			//#ifdef APP-PLUS
			plus.push.addEventListener( 'click', e=>{
				setTimeout(()=>{
					uni.navigateTo({
						url:'/pages/doctor/consulting-desk'
					})
				})
			})
			//#endif
		},
		onShow: function() {
			this.hasHide = false
			console.log('App Show');
			//#ifdef APP-PLUS
			// uni.login({
			//   provider: 'weixin',
			//   success: function (loginRes) {
			//     console.log(loginRes.authResult);
			//   }
			// });
			//#endif
		},
		onHide: function() {
			this.hasHide = true
			console.log('App Hide');
		},
		watch: {
			hasLogin(status) {
				if (status) {
					this.jimInit()
				} else {
					this.jimLogout()
				}
			}
		},
		computed: {
			...mapGetters(['hasLogin', 'userInfo', 'jimMsgs'])
		},
		methods: {
			login() {
				const lm = readLoginMessage(uni)
				request_userInfo({
					uni
				}).then(res => {
					if (res.code === 0) {
						this.LOGIN(res.data)
					}
					// console.log(res);
				})
			},
			// 退出登录
			logout() {
				saveLoginMessage(uni, {})
				request_clearToken()
				this.LOGOUT()
				uni.reLaunch({
					url: '/pages/login/login'
				})
			},
			jimInit() {
				this.$jim.loginOut()
				setTimeout(() => {
					request_imInit({
						uni
					}).then(res => {
						this.$jim.init({ ...(res.data),
							flag: 1
						}).onSuccess((data) => {
							console.log('极光im初始化成功，hasLogin')
							this.jimLogin()
						}).onFail(function(data) {
							console.log('极光im初始化失败', data)
						})
					})
				}, 400) // 延时再init，否则init会失败
			},
			jimLogin() {
				const message = readLoginMessage(uni)
				console.log(message);
				this.$jim.login({
					'username': 'd_' + message.mobile,
					'password': message.password
				}).onSuccess(e => {
					this.JIMLOGIN()
					// jim断线监听
					this.$jim.onDisconnect(() => {
						this.JIMLOGOUT()
						console.log('JIMLOGOUT，断网等情况:', this.$jim.isInit());
					});

					console.log('极光im登录成功', e);

					// 获取消息漫游
					this.$jim.onSyncConversation(data => {
						data.forEach(item => {
							this.UPDATE_JIMMSGS({
								from_username: item.from_username,
								msgs: item.msgs.map(i => {
									return i.content
								})
							})
						})
					})

					this.$jim.onMsgReceive((data) => {
						const msg = {
							from_username: data.messages[0].from_username,
							msgs: data.messages[0].content
						}
						this.UPDATE_JIMMSGS(msg)

						//#ifdef APP-PLUS
						// if (this.hasHide) {
							plus.push.createMessage(msg.msgs.from_name + '：' + msg.msgs.msg_body.text)
						// }
						//#endif

						console.log('接受到的：', data);
					})
				}).onFail(e => {
					console.log('极光im登录失败', e);
				})
			},
			jimLogout() {
				this.$jim.loginOut()
				this.JIMLOGOUT()
			},

			...mapActions(['LOGIN', 'LOGOUT', 'UPDATE_JIMMSGS', 'JIMLOGOUT', 'JIMLOGIN'])
		}
	};
</script>

<style lang="scss">
	/* 每个页面公共css */
	*,
	page,
	view,
	input,
	button {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	.no-data {
		display: flex;
		justify-content: center;
		padding: 30px;
		font-size: 14px;
		color: #cccccc;
	}

	// 富文本中的图片最大宽度，防止超出屏幕，需使用document加载此类名
	.rich-text-img-width {
		max-width: 100%;
	}

	.linear-background {
		// background-image: linear-gradient(114deg, rgba(112, 155, 255, 1.0) 0%, $base-color 74%);
		background-image: linear-gradient(114deg, #70d8c9 0%, $base-color 74%);
	}

	.box-shadow {
		box-shadow: 0px 0px 19px 2px rgba(11, 126, 255, 0.1)
	}

	.price {
		color: #F71A1A;
	}

	.bold {
		font-weight: bold;
	}

	.ellipsis {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	/* 顶部标题栏占位高度 */
	.nav-place {
		height: var(--status-bar-height);
		padding-top: 44px;
		box-sizing: content-box;
	}

	.common-place {
		height: 10px;
		background-color: $base-background-color;
	}

	.foot-place {
		height: 50px;
	}

	.row-title {
		padding: 20px;
		display: flex;
		align-items: center;
		font-size: 16px;
		font-weight: bold;
	}

	.row-title::before {
		content: '';
		width: 4px;
		height: 20px;
		background-color: $base-color;
		position: absolute;
		left: 0;
		background: $base-color;
		box-shadow: 0px 8px 21px 0px rgba(36, 131, 253, 0.3);
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
	}

	.title {
		font-weight: bold;
		font-size: 16px;
	}

	.little-title {
		font-size: 13px;
		color: #5D5D5D;
	}

	.border-bottom {
		border-bottom: 1px solid #F8F5F5;
	}

	/* 过渡 */
	.slide-fade-enter-active {
		transition: all .1s ease;
	}

	.slide-fade-leave-active {
		transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter,
	.slide-fade-leave-to {
		transform: translateX(-10px);
		opacity: 0;
	}

	.button {
		background-color: $base-color;
		color: white;
		width: 36vw;
		font-size: 14px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		transition: all .1s linear;
		// box-shadow: 0 0 12px rgba(25, 133, 253, .2);
		box-shadow: 0px 0px 19px 1px rgba(112, 216, 201, 0.1);
		// background-image: linear-gradient(114deg, rgba(112, 155, 255, 1.0) 0%, $base-color 74%);
		background-image: linear-gradient(114deg, #70d8c9 0%, $base-color 74%);
	}

	.button-cancel {
		background: rgba(233, 234, 235, 1);
		color: #7C7C7C;
		box-shadow: 0px 0px 19px 1px rgba(233, 234, 235, .4);
	}

	.button:active {
		opacity: .8;
		// box-shadow: 0 0 2px $base-color;
	}
</style>
