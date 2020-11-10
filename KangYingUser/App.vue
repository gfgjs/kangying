<script>
	import {
		request_sendReSms,
		request_userInfo,
		request_version,
		request_imInit,
		request_clearToken
	} from './common/https.js'
	import {
		saveLoginMessage,
		readLoginMessage
	} from 'common/util.js'
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	// let STATUS = false

	let imOfflineTipsTimer // IM离线轮询
	let imOfflineTipsStatus = false // IM离线轮询

	export default {
		globalData: {
			verifyCodeCountDown: 0,
			registerMessage: {
				mobile: '',
				userName: '',
				idcard: '',
				sex: '',
				verifyCode: '',
				password: '',
				confirmPassword: ''
			},
			tempOrderGoods: [], // 在购物车点击结算时，临时保存商品信息
			tempOrderAddress: null, // 选择地址时用到 {}

			$jim: {}, // nvue页面中使用

			imOfflineTipsTimer: null,
			imOfflineTipsFun: null,
			jimInit: null
		},
		data() {
			return {
				hasHide: false,
				onCalling: false,
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		watch: {
			hasLogin(status) {
				if (status) {
					this.jimInit()
				} else {
					this.jimLogout()
				}
				// close jim
			},
			userInfo(e) {

			},
			jimMsgs(e) {
				// console.log(e);
			}
		},
		onLaunch: function() {

			// 启动时尝试登录获取用户信息
			// 如果失败，则在手机号登录后或手机号注册后再次尝试
			this.login()

			//#ifdef APP-PLUS
			plus.push.addEventListener('click', e => {
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/doctor/chat-list'
					})
				})
			})
			//#endif

			// #ifdef APP-PLUS
			// 检查更新
			this.updateApp()

			let main = plus.android.runtimeMainActivity();
			//重写toast方法如果内容为 ‘再按一次退出应用’ 就隐藏应用，其他正常toast  
			plus.nativeUI.toast = (function(str) {
				if (str == '再按一次退出应用') {
					main.moveTaskToBack(false);
					return false;
				} else {
					uni.showToast({
						title: str,
						icon: 'none',
					})
				}
			});
			// #endif
			imOfflineTipsTimer = setInterval(() => {
				const res = this.$jim.isLogin()
				if (!res && !this.hasHide && !imOfflineTipsStatus) {
					imOfflineTipsStatus = true
					uni.showModal({
						title: 'IM掉线提示',
						content: 'IM系统已离线，将无法发送/接收信息、无法音/视频聊天',
						confirmText: '点击重连',
						cancelText: '5分钟后提醒我',
						success: e => {
							imOfflineTipsStatus = false
							if (e.confirm) {
								this.jimInit()
							}
						}
					})
				}
			}, 300000)
		},
		onShow() {
			getApp().globalData.$jim = this.$jim
			getApp().globalData.jimInit = this.jimInit
			getApp().globalData.jimLogin = this.jimLogin
			this.hasHide = false
			window.$jim = this.$jim

			if (this.hasLogin && !this.jimHasLogin) {
				this.jimInit()
			}
			// 网络变化后重新登录极光IM
			uni.onNetworkStatusChange((res) => {
				if (res.isConnected) {
					this.jimInit()
				} else {
					this.JIMLOGOUT()
				}
				// console.log(res.isConnected); //当前是否有网络连接
				// console.log(res.networkType); //网络类型
			})


			// setInterval(()=>{
			// 	// #ifdef APP-PLUS
			// 	var webView = this.$mp.page.$getAppWebview();  

			// 	// 修改buttons  
			// 	// index: 按钮索引, style {WebviewTitleNViewButtonStyles }  
			// 	webView.setTitleNViewButtonStyle(0, {  
			// 	    redDot: STATUS,  
			// 	});  
			// 	STATUS = !STATUS
			// 	// #endif
			// },1000)
		},
		onHide: function() {
			this.hasHide = true
			console.log('App Hide')
		},
		methods: {
			checkImStatus() {

			},
			checkJimStatus() {
				return new Promise((resolve, reject) => {
					if (this.$jim.isLogin()) {
						resolve(true)
					} else if (this.$jim.isInit()) {

					}
				})
			},
			// 根据token获取用户信息
			login() {
				return new Promise((resolve) => {
					const message = readLoginMessage(uni)
					if (message.token) {
						// vuex存储临时登录状态
						request_userInfo({
							uni,
							token: message.token,
							data: {}
						}).then(res => {
							if (res.code === 0) {
								this.LOGIN(res.data)
							} else {
								// token失效等情况
								this.$api.msg(res.err)
							}
							setTimeout(() => {
								resolve(true)
							})
						})
					}
				})
			},
			// 退出登录
			logout() {
				saveLoginMessage(uni, {})
				request_clearToken()
				this.LOGOUT()
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			jimInit() {
				this.$jim.loginOut()
				setTimeout(() => {
					request_imInit({
						uni
					}).then(res => {
						console.log(33333, res.data)
						this.$jim.init({
							...(res.data),
							flag: 1
						}).onSuccess((data) => {
							console.log('极光im初始化成功，hasLogin')
							this.jimLogin()
						}).onFail(function(data) {
							console.log('极光im初始化失败', data)
						})
					})
				}, 1000) // 延时再init，否则init会失败
			},
			jimLogin() {
				const message = readLoginMessage(uni)
				this.$jim.login({
					'username': 'u_' + message.mobile,
					'password': message.password
				}).onSuccess(e => {
					this.JIMLOGIN()
					// jim断线监听
					this.$jim.onDisconnect(() => {
						this.JIMLOGOUT()
						console.log('JIMLOGOUT，断网等情况:', this.$jim.isInit());
					});

					console.log('极光im登录成功', e);

					// 先清除store中的所有消息
					this.CLEAR_JIMMSGS()

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
						console.log(JSON.parse(JSON.stringify(msg)))

						const msgType = msg.msgs.msg_body.extras.messageType
						const answerType = msg.msgs.msg_body.extras.answerType
						const callingId = msg.msgs.msg_body.extras.callingId // 呼入方ID

						if (msgType === 'telephone' && this.callState == 0 && answerType === 'calling' && (msg.from_username ===
								callingId)) {
							console.log('APP跳转接听')
							this.UPDATE_CALLSTATE(1)
							this.$pageTo({
								url: '/pages/doctor/telephone',
								options: { ...(msg.msgs.msg_body.extras),
									role: 'called',
									remoteRole: 'calling'
								}, // 本地角色 被叫，远端角色 主叫
							})
						}

						//#ifdef APP-PLUS
						// if (this.hasHide) {
						if (msgType === 'telephone') {
							plus.push.createMessage(msg.msgs.from_name + '邀请您进行语音/视频通话')
						} else {
							plus.push.createMessage(msg.msgs.from_name + '：' + msg.msgs.msg_body.text)
						}
						// }
						//#endif

						console.log('接受到的：', data);
					});
				}).onFail(e => {
					console.log('极光im登录失败', e);
				})
			},
			jimLogout() {
				this.$jim.loginOut()
				this.JIMLOGOUT()
			},
			getQuery(variable) {
				var query = window.location.search.substring(1);
				var vars = query.split("&");
				for (var i = 0; i < vars.length; i++) {
					var pair = vars[i].split("=");
					if (pair[0] == variable) {
						return pair[1];
					}
				}
				return (false);
			},
			updateApp() {
				uni.getSystemInfo({
					success: (res) => {
						if (res.platform == "android") {
							request_version({
								uni
							}).then(res => {
								if (res.code === 0) {
									plus.runtime.getProperty(plus.runtime.appid, (inf) => {
										if (res.data.version_code > inf.versionCode) {
											uni.showModal({
												title: '检测到有新版本，是否更新？',
												content: res.data.version_desc,
												success(modal) {
													if (modal.confirm) {
														// console.log(inf.versionCode);
														plus.runtime.openURL(res.data.apk_link)
														// plus.runtime.openURL('https://m.3mstv.com/kangying.apk')
													}
												}
											})
										}
									})
								}
							})
						}
					}
				})
			},
			...mapActions(['LOGIN', 'LOGOUT', 'JIMLOGIN', 'JIMLOGOUT', 'UPDATE_IMASSAGELIST', 'UPDATE_JIMMSGS', 'CLEAR_JIMMSGS',
				'UPDATE_CALLSTATE'
			])
		},
		computed: {
			...mapGetters(['hasLogin', 'userInfo', 'jimMsgs', 'jimHasLogin', 'callState'])
		}
	}
</script>

<style lang="scss">
	// @import url("//at.alicdn.com/t/font_1852111_3ce9eljus1w.css");

	/* 每个页面公共css */
	*,
	page,
	view,
	input,
	button {
		box-sizing: border-box;
	}

	.no-data {
		display: flex;
		justify-content: center;
		padding: 30px;
		font-size: 14px;
		color: #cccccc;
		width: 100%;
	}

	// radio选中的颜色
	.uni-radio-input-checked {
		background-color: $base-color !important;
		border-color: $base-color !important;
	}

	.uni-switch-input-checked {
		background-color: $base-color !important;
		border-color: $base-color !important;
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
		// background-color: red;
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
