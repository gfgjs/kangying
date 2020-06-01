<script>
	import {
		request_sendReSms
	} from './common/https.js'
	// let STATUS = false
	
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
			beforePage: '', // 登录或注册前的页面
		},
		onLaunch: function() {

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
			console.log('App Launch')
		},
		onShow: function() {
			
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
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
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
		background-color: red;
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
		box-shadow: 0px 0px 19px 1px #e7e7e7;
	}

	.button:active {
		opacity: .8;
		// box-shadow: 0 0 2px $base-color;
	}
</style>
