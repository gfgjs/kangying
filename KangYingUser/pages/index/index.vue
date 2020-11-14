<template>
	<view>
		<!-- <view class="nav-place"></view> -->
		<!-- <view class="search-wrap">
			<view class="search">
				<uni-icons type="mic-filled" color="#C9C9C9" size="24"></uni-icons>
				<input type="text" placeholder="找医生、找医院、查疾病">
				<uni-icons type="search" color="#C9C9C9" size="24"></uni-icons>
			</view>
		</view> -->
		<view class="place linear-background"></view>

		<swiper class="swiper banner" indicator-color='rgba(0,0,0,.1)' indicator-active-color='rgba(0,0,0,.6)'
		 :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<image src="../../static/home/13.png" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/home/13.png" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/home/13.png" mode="aspectFill"></image>
			</swiper-item>
		</swiper>


		<view class="wrap func-1">
			<view class="top">
				<!-- <view @click="navTo('/pages/doctor/see-the-doctor')">
					<image src="../../static/home/5.png" mode=""></image>
					<view>网上看病</view>
				</view> -->
				<view @click="switchTab('/pages/index/online')">
					<image src="../../static/home/5.png" mode=""></image>
					<view>网上看病</view>
				</view>
				<!-- <view @click="$api.msg('请点击左上角咨询客服')">
					<image src="../../static/home/6.png" mode=""></image>
					<view>线下就诊</view>
				</view> -->
				<view @click="navTo('/pages/test/test')">
					<image src="../../static/home/6.png" mode=""></image>
					<view>线下就诊</view>
				</view>
				<view @click="navTo('/pages/mall/mall')">
					<image src="../../static/home/7.png" mode=""></image>
					<view>快速购药</view>
				</view>
			</view>
			<view class="bottom">
				<view class="item item-1" @click="navTo('/pages/doctor/list')">
					<view>免费问医生</view>
					<view class="little">有问题快速问医生</view>
				</view>
				<view class="item item-2" @click="navTo('/pages/doctor/case?tab=0')">
					<view>云病例</view>
					<view class="little">随时查看云病例</view>
				</view>
			</view>
		</view>
		<view class="wrap func-2">
			<view class="title">
				<view class="blue"></view>
				<view class="text">健康服务</view>
			</view>
			<view class="list">
				<view class="top">
					<view class="item" @click="navTo('/pages/login/register')">
						<view class="left">
							<view class="big">注册建档</view>
							<view class="little">在线完成注册建档</view>
						</view>
						<image src="../../static/home/22.png" mode="aspectFit"></image>
					</view>
					<view class="item" @click="navTo('检查预约')">
						<view class="left">
							<view class="big">检查预约</view>
							<view class="little">在线预约身体检查</view>
						</view>
						<image src="../../static/home/20.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="top">
					<view class="item" @click="$pageTo({url:'/pages/doctor/case?tab=0',needLogin:true})">
						<view class="left">
							<view class="big">电子病历</view>
							<view class="little">查看个人电子病历</view>
						</view>
						<image src="../../static/home/21.png" mode="aspectFit"></image>
					</view>
					<view class="item" @click="navTo('/pages/mine/check-appoint')">
						<view class="left">
							<view class="big">体检预约</view>
							<view class="little">快速预约体检套餐</view>
						</view>
						<image src="../../static/home/17.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="wrap func-3">
			<view class="title linear-background">
				<view class="content">特色服务</view>
			</view>
			<view class="list">
				<view class="item" @click="navTo('慢病管理')">
					<image src="../../static/home/14.png" mode="aspectFit"></image>
					<view>慢病管理</view>
				</view>
				<view class="item" @click="navTo('特色120')">
					<image src="../../static/home/11.png" mode="aspectFit"></image>
					<view>特色120</view>
				</view>
				<view class="item" @click="navTo('远程会诊')">
					<image src="../../static/home/8.png" mode="aspectFit"></image>
					<view>远程会诊</view>
				</view>
			</view>
		</view>
		<view class="wrap func-4" @click="navTo('/pages/article/list')">
			<view class="title">
				<view class="left">
					<view class="blue"></view>
					<view class="text">健康咨询</view>
				</view>
				<view class="right">
					更多<image src="../../static/home/4.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<view class="wrap bottom-banner" v-for="item in articleList" v-bind:key="item.id" :style="`background: url(${item.article_thumb});`">
			<view class="mask" @click="navToArticle('/pages/article/article',item.id)">
				<image src="../../static/home/3.png" mode=""></image>
				<view>
					{{item.article_title}}
				</view>
				<view class="doctor">
					<image :src="item.header"></image>
					<view class="">
						{{item.doctorText}}
					</view>
				</view>
			</view>
		</view>
		<!-- <view v-for="i in pages" :key='i.path' style="padding: 10px;" @click="navTo('/'+i.path)">{{i.path}}</view> -->
	</view>
</template>

<script>
	import {
		request_articleList,
		request_articleDetail
	} from '../../common/https.js'
	export default {
		data() {
			return {
				// 顶部轮播图
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 400,

				articleList: [],
				pages: []
				};
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if(e.index === 0){
				this.$pageTo({
					needLogin:true,
					url: '/pages/doctor/chat-list'
				})
			}else if(e.index===1){
				this.$pageTo({
					url: '/pages/doctor/webview'
				})
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			let main = plus.android.runtimeMainActivity();
			//为了防止快速点按返回键导致程序退出重写quit方法改为隐藏至后台  
			plus.runtime.quit = function() {
				main.moveTaskToBack(false);
			};
			// #endif
		},
		onShow() {
			request_articleList({uni,data:{page:1,page_size:2}}).then(res=>{
				if(res.code===0){
					this.articleList = res.data
				}
			})
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		methods: {
			navToArticle(url,id){
				this.$pageTo({
					url:url+'?id='+id
				})
			},
			navTo(url) {
				console.log(url);
				uni.navigateTo({
					url
				})
			},
			switchTab(url) {
				uni.switchTab({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		padding-bottom: 10px;
	}

	.nav-place {
		background-color: $base-color;
	}

	.place {
		// height: 70px;
		height: calc(70px + 44px);
		// #ifdef APP-PLUS
		height: calc(70px + 44px + 44px);
		// #endif
		background-color: $base-color;
		box-shadow: 0px 6px 20px 0px $base-color;
	}

	.search-wrap {
		width: 100vw;
		background-color: $base-color;
		height: 80px;
		position: relative;

		.search {
			width: 92vw;
			height: 42px;
			position: absolute;
			left: 4vw;
			top: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			background: rgba(255, 255, 255, 1);
			border-radius: 43px;

			image {
				height: 24px;
				width: 22px;
			}
		}
	}

	.banner {
		width: 100vw;
		height: 100px;
		// background-color: red;
		margin: -50px 0 0 0;

		image {
			margin-left: 2%;
			width: 96%;
			height: 100px;
			border-radius: 6px;

		}
	}

	.wrap {
		width: 96%;
		background-color: white;
		margin: 10px 0 0 2%;
		padding: 10px;
		border-radius: 6px;
		box-shadow: 0 0 8px #f1f1f1;
	}



	.func-1 {
		.top {
			display: flex;
			justify-content: space-between;
			// padding: 0 20px;

			view {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #272727;
				font-size: .7rem;

				image {
					width: 80px;
					height: 80px;
				}
			}
		}

		.bottom {
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 25px 0 0 0;

			.item-1 {
				background: url(../../static/home/1.png) no-repeat;
			}

			.item-2 {
				background: url(../../static/home/2.png) no-repeat;
			}

			.item {
				width: 48%;
				height: 80px;
				background-size: 100% 100%;
				font-size: 16px;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				padding: 10px 0 10px 10px;
				color: #2C2C2C;

				.little {
					font-size: 12px;
					color: #474747;
				}
			}


			image {
				width: 45%;
				height: 100px;
			}
		}

	}

	.func-2 {
		.title {
			display: flex;
			align-items: center;
			color: #0C0C0C;
			font-weight: bold;

			.blue {
				height: 20px;
				width: 4px;
				background-color: $base-color;
				border-radius: 4px;
			}

			.text {
				margin-left: 6px;
			}
		}

		.list {
			font-size: 12px;

			.top {
				display: flex;
				justify-content: space-between;
				margin: 10px 0;

				.item {
					background-color: #E5F3FF;
					border-radius: 5px;
					display: flex;
					justify-content: space-around;
					width: 49%;

					.big {
						font-size: 16px;
						font-weight: bold;
					}

					.little {
						color: #4E4E4E;
					}

					.left {
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						padding: 10px 0;
					}
				}

				display: flex;

				image {
					width: 40px;
					height: 80px;
				}
			}
		}
	}

	.func-3 {
		padding: 0;
		overflow: hidden;

		.title {
			height: 50px;
			width: 100%;
			// background-color: red;

			background-size: 100%;
			// background: linear-gradient(90deg, rgba(48, 138, 252, 1), rgba(18, 116, 253, 1));
			color: white;

			.content {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
				background: url(../../static/home/18.png) no-repeat;
				background-size: 80% 30%;
				background-position: 50%;
				font-size: 16px;
			}
		}

		.list {
			display: flex;
			justify-content: space-around;
			padding: 10px;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 15px;
				color: #272727;

				image {
					width: 70px;
					height: 70px;
				}
			}
		}
	}

	.func-4 {

		background-color: rgba(0, 0, 0, 0);

		.title {
			display: flex;
			justify-content: space-between;


			.left {
				color: #0C0C0C;
				font-weight: bold;
				display: flex;
				align-items: center;

				.blue {
					height: 20px;
					width: 4px;
					background-color: $base-color;
					border-radius: 4px;
				}

				.text {
					margin-left: 6px;
				}
			}

			.right {
				display: flex;
				align-items: center;
				color: #A5A5A5;
				font-size: 14px;

				image {
					width: 14px;
					height: 14px;
				}
			}

		}

	}

	.bottom-banner {
		padding: 0;
		background-repeat: no-repeat !important;
		background-size: 100% 100% !important;

		height: 42vw;
		overflow: hidden;

		display: flex;
		flex-direction: column;

		.mask {
			background: rgba(0, 0, 0, 0.45);
			width: 100%;
			height: 100%;
			color: #FFFFFF;
			display: flex;
			justify-content: space-around;
			flex-direction: column;
			padding: 10px 20px 0 20px;

			.doctor {
				color: #FFFFFF;
				font-size: 14px;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				image {
					width: 36px;
					height: 36px;
				}
			}
		}

		image {
			width: 12px;
			height: 12px;
		}
	}
</style>
