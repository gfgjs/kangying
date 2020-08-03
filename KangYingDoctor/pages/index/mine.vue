<template>
	<view>
		<view class="header-box linear-background">
			<view class="row">
				<image src="../../static/index/top.png" mode=""></image>
				<view class="right">
					<view class="top">
						<view class="title">{{userInfo.user_name}}</view>
						<view class="little-title">{{userInfo.level_name}}</view>
					</view>
					<view class="bottom">
						{{userInfo.hospital_name}}丨{{userInfo.dept_name}}
						<!-- <uni-icons type="arrowdown"></uni-icons> -->
					</view>
				</view>
			</view>
			<view class="row evaluate">
				<view class="item">
					<view class="number">{{userInfo.work_year}}</view>
					<view class="text">工作年限</view>
				</view>
				<view class="item">
					<view class="number">{{userInfo.waiting_num}}</view>
					<view class="text">候诊数</view>
				</view>
				<view class="item">
					<view class="number">{{userInfo.reply_num}}</view>
					<view class="text">已回复</view>
				</view>
				<view class="item">
					<view class="number">9.0</view>
					<view class="text">推荐指数</view>
				</view>
			</view>
		</view>
		<view class="menus-box">
			<view class="row-title">诊所服务</view>
			<view class="menus">
				<view class="menu">
					<image src="../../static/mine/1.png" mode=""></image>
					结算收入
				</view>
				<view class="menu">
					<image src="../../static/mine/2.png" mode=""></image>
					出诊记录
				</view>
				<!-- <view class="menu">
					<image src="../../static/mine/3.png" mode=""></image>
					义诊回帖
				</view> -->
			</view>
			<view class="row-title">系统服务</view>
			<view class="menus">
				<view class="menu" @click="pageTo('/pages/mine/info')">
					<image src="../../static/mine/4.png" mode=""></image>
					系统设置
				</view>
				<view class="menu" @click="pageTo('/pages/mine/feedback')">
					<image src="../../static/mine/5.png" mode=""></image>
					投诉建议
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'
	export default {
		data() {
			return {

			};
		},
		computed:{
			...mapGetters(['userInfo'])
		},
		onShow() {
			 uni.getSystemInfo({  
			        success:function(e){  
						console.log(e)
			        }  
			    }) 
		},
		onNavigationBarButtonTap(e) {
			this.$pageTo({
				url: '/pages/doctor/consulting-desk'
			})
		},
		methods:{
			pageTo(url){
				this.$pageTo({url})
			},
			setTitleNViewStyle(index, show, text) {
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				// #ifdef APP-PLUS  
				let currentWebview = page.$getAppWebview();
				if (show) {
					if (index === 0) {
						currentWebview.showTitleNViewButtonRedDot({
							index: index,
							text: text
						})
					} else {
						currentWebview.setTitleNViewButtonBadge({
							index: index,
							text: text
						})
					}
				} else {
					if (index === 0) {
						currentWebview.hideTitleNViewButtonRedDot({
							index: index
						})
					} else {
						currentWebview.removeTitleNViewButtonBadge({
							index: index
						})
					}
				}
				// #endif  
			
				// #ifdef H5  
				if (show) {
					if (index === 0) {
						document.querySelectorAll('.uni-page-head-hd .uni-page-head-btn')[1].classList.add('uni-page-head-btn-red-dot');
					} else {
						document.querySelector('.uni-page-head-ft .uni-page-head-btn').classList.add('uni-page-head-btn-red-dot');
					}
				} else {
					if (index === 0) {
						document.querySelector('.uni-page-head-btn-red-dot').classList.remove('uni-page-head-btn-red-dot');
					} else {
						document.querySelector('.uni-page-head-ft .uni-page-head-btn-red-dot').classList.remove(
							'uni-page-head-btn-red-dot');
					}
				}
				// #endif  
			},
		}
	}
</script>

<style lang="scss">
	.header-box {
		box-sizing: content-box;
		min-height: var(--status-bar-height);
		padding-top: 44px;
		padding-bottom: 10px;
		/* #ifdef APP-PLUS */
			padding-top: calc(var(--status-bar-height) + 43px);
		/* #endif */

		image {
			width: 50px;
			height: 50px;
			border-radius: 50%;
		}

		.row {
			display: flex;
			align-items: center;
			padding: 10px 40px;
			color: white;

			.right {
				display: flex;
				flex-direction: column;
				margin-left: 10px;

				.top {
					display: flex;
					align-items: center;

					.little-title {
						color: #EAF4FF;
						margin-left: 10px;
					}
				}

				.bottom {
					font-size: 14px;
				}
			}
		}

		.evaluate {
			display: flex;
			justify-content: space-between;
			background-color: #5B9B92;
			width: 80%;
			margin: 20px auto 0;
			border-radius: 4px;

			.item {
				display: flex;
				flex-direction: column;
				// justify-content: center;
				align-items: center;

				.text {
					font-size: 14px;
					margin-top: 10px;
				}
			}
		}	
	}
	.menus-box {
		
		.menus{
			display: flex;
			padding: 10px 20px;
			.menu{
				image {
					width: 30px;
					height: 30px;
					margin-bottom: 10px;
				}
				color: #838F8D;
				font-size: 15px;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-right: 20px;
			}
		}
	}
</style>
