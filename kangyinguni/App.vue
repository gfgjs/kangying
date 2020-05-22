<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch');
			
			let main = plus.android.runtimeMainActivity();  
				//为了防止快速点按返回键导致程序退出重写quit方法改为隐藏至后台  
				plus.runtime.quit = function(){  
				main.moveTaskToBack(false);  
			};  
			//重写toast方法如果内容为 ‘再按一次退出应用’ 就隐藏应用，其他正常toast  
			plus.nativeUI.toast = (function(str){  
				if(str == '再按一次退出应用'){  
					main.moveTaskToBack(false);  
					return false;  
				}else{  
					uni.showToast({  
						title:str,  
						icon:'none',  
					})  
				}  
			});  

			
			// uni.getSystemInfo({
			// 	success: function(e) {
			// 		Vue.prototype.statusBar = e.statusBarHeight
			// 		// #ifndef MP
			// 		if (e.platform == 'android') {
			// 			Vue.prototype.customBar = e.statusBarHeight + 50
			// 		} else {
			// 			Vue.prototype.customBar = e.statusBarHeight + 45
			// 		}
			// 		// #endif

			// 		// #ifdef MP-WEIXIN
			// 		let custom = wx.getMenuButtonBoundingClientRect()
			// 		Vue.prototype.customBar = custom.bottom + custom.top - e.statusBarHeight
			// 		// #endif

			// 		// #ifdef MP-ALIPAY
			// 		Vue.prototype.customBar = e.statusBarHeight + e.titleBarHeight
			// 		// #endif
			// 	}
			// })
		},
		onShow: function() {
			console.log('App Show');
			setTimeout(() => {
				// uni.setTabBarBadge({
				// 	index: 1,
				// 	text: '31'
				// });
				// uni.showTabBarRedDot({
				// 	index: 3
				// });
				
				plus.navigator.closeSplashscreen()
			}, 6000);
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	page {
		/* height: calc(100vh - var(--status-bar-height)); */
		/* background-color: yellow; */
	}

	.null-nav {
		height: var(--status-bar-height);
		width: 100vw;
		background-color: white;
	}

	/*每个页面公共css */
</style>
