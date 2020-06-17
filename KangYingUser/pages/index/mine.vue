<template>
	<view>
		<!-- <view class="nav-place linear-background"></view> -->
		<view class="header linear-background">
			<view class="head-wrap">
				<image src="../../static/mine/0.png" @click="changeAvatar" mode=""></image>
				<view v-if="isLogin">
					<view class="name">{{userInfo.user_name}}</view>
					<!-- <view class="level">等级</view> -->
				</view>
				<view v-else @click="toLogin">点此登录</view>
			</view>
		</view>
		<view class="footer">
			<view class="recoder">
				<view class="title">药品订单</view>
				<view class="buttons">
					<view class="item" @click="pageTo('/pages/mall/cart')">
						<image :src="`../../static/mine/1.png`" mode=""></image>
						<view>购物车</view>
					</view>
					<view class="item" @click="pageTo('/pages/mall/order',0)">
						<image :src="`../../static/mine/2.png`" mode=""></image>
						<view>待收货</view>
					</view>
					<view class="item" @click="pageTo('/pages/mall/order',1)">
						<image :src="`../../static/mine/3.png`" mode=""></image>
						<view>待付款</view>
					</view>
					<view class="item" @click="pageTo('/pages/mall/order',2)">
						<image :src="`../../static/mine/4.png`" mode=""></image>
						<view>待评价</view>
					</view>
					<view class="item" @click="pageTo('/pages/mall/order',3)">
						<image :src="`../../static/mine/5.png`" mode=""></image>
						<view>退款/售后</view>
					</view>
				</view>
			</view>
			<view class="place"></view>
			<view class="wrap img-menu">
				<view class="item" @click="pageTo('/pages/card/list')">
					<view class="title">
						就诊人管理
						<uni-icons type="arrowright"></uni-icons>
					</view>
					<view class="little-title">在线管理个人就诊信息</view>
				</view>
				<view class="item">
					<view class="title">
						健康档案
						<uni-icons type="arrowright"></uni-icons>
					</view>
					<view class="little-title">个人健康档案管理</view>
				</view>
			</view>

			<view class="wrap menu">
				<view class="row">
					<view class="title">病历夹</view>
					<view class="buttons">
						<view class="item">
							<image src="../../static/mine/8.png" mode=""></image>
							<view>病历档案</view>
						</view>
						<view class="item">
							<image src="../../static/mine/9.png" mode=""></image>
							<view>我的挂号</view>
						</view>
						<view class="item">
							<image src="../../static/mine/10.png" mode=""></image>
							<view>电子处方</view>
						</view>
						<view class="item">
							<image src="../../static/mine/11.png" mode=""></image>
							<view>检查报告</view>
						</view>
					</view>
				</view>
				<view class="row">
					<view class="title">系统服务</view>
					<view class="buttons">
						<view class="item" @click="pageTo('/pages/mine/info')">
							<image src="../../static/mine/12.png" mode=""></image>
							<view>账户设置</view>
						</view>
						<view class="item">
							<image src="../../static/mine/13.png" mode=""></image>
							<view>建议反馈</view>
						</view>
						<view class="item" style="opacity: 0;">
							<image src="../../static/mine/8.png" mode=""></image>
							<view>账户设置</view>
						</view>
						<view class="item" style="opacity: 0;">
							<image src="../../static/mine/8.png" mode=""></image>
							<view>账户设置</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="foot-place"></view>
	</view>
</template>

<script>
	import {
		readLoginMessage
		
	} from '../../common/util.js'
	import {request_userInfo,request_uploadImg} from '../../common/https.js'
	export default {
		data() {
			return {
				menus: [{
						id: 1,
						name: '购物车'
					},
					{
						id: 2,
						name: '待付款'
					},
					{
						id: 3,
						name: '待收货'
					},
					{
						id: 4,
						name: '待评价'
					},
					{
						id: 5,
						name: '退款/售后'
					}
				],
				isLogin: false,
				userInfo:{}
			};
		},
		onShow() {
			const message = readLoginMessage(uni)

			if (message.token) {
				this.isLogin = true
				request_userInfo({
					uni,
					data:{}
				}).then(res=>{
					if(res.code===0){
						this.userInfo = res.data
					}
					console.log(res);
				})
			}else{
				this.isLogin = false
			}
		},
		methods: {
			changeAvatar(){
				request_uploadImg({uni}).then(res=>{
					console.log(res);
				})
			},
			pageTo(url, tab) {
				if (!this.isLogin) {
					uni.showModal({
						content: "是否前往登录？",
						success: (res) => {
							if (res.confirm) {
								this.toLogin()
							} else if (res.cancel) {
								// uni.showActionSheet({
								//     itemList: ['A', 'B', 'C'],
								//     success: function (res) {
								//         console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
								//     },
								//     fail: function (res) {
								//         console.log(res.errMsg);
								//     }
								// });
								// console.log('用户点击取消');
							}
						}
					})
				} else {
					this.$pageTo({
						url: url + '?tab=' + tab,
					})
				}

			},
			toLogin() {
				this.$updateLastPage({
					url: '/pages/index/mine',
					navigateType: '$switchTab'
				})
				this.$pageTo({
					url: '/pages/login/login',
					disrecord: true
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f7f8fa;
	}

	.nav-place {
		background-color: $base-color;
	}

	.header {
		width: 100vw;
		height: calc(240px + 44px);
		background-color: $base-color;

		.head-wrap {
			width: 100%;
			display: flex;
			align-items: center;
			padding: calc(30px + 44px) 30px 30px 30px;

			// background-color: white;
			view {
				margin-left: 10px;
				color: white;
			}

			image {
				height: 70px;
				width: 70px;
			}
		}
	}

	.footer {
		width: 100%;
		height: 60vh;
		background: rgba(247, 248, 250, 1);
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;

		position: relative;
		top: -20px;

		.recoder {
			width: 92vw;
			height: 40vw;
			margin-left: 4vw;
			// margin-top: -20vw;
			background-color: white;
			position: absolute;
			top: -20vw;
			padding: 0 10px;
			border-radius: 6px;
			box-shadow: 0px 2px 20px 0px rgba(21, 21, 21, 0.03);
			font-size: 16px;



			.title {
				padding: 15px 0;
				font-size: 18px;
				font-weight: bold;
				border-bottom: 1px solid #f9f9f9;
			}

			.buttons {
				padding: 10px 0;
				display: flex;
				justify-content: space-around;

				view {
					padding-top: 5px;
				}

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 20%;

					image {
						width: 32px;
						height: 30px;
						margin-bottom: 4px;
					}

					view {
						font-size: 14px;
						font-weight: 400;
						color: #333333;
					}
				}
			}
		}

		.place {
			height: 24vw;
		}

		.wrap {
			width: 92vw;
			margin-left: 4vw;
		}

		.img-menu {
			display: flex;
			justify-content: space-between;

			.item:nth-of-type(1) {
				background: url(../../static/mine/6.png);
			}

			.item:nth-of-type(2) {
				background: url(../../static/mine/7.png);
			}

			.item {
				padding: 10px 10px;
				background-size: 100% 100% !important;
				width: 45vw;
				height: 24vw;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.title,
				.little-title {
					color: white;
				}

				.uni-icons {
					color: white !important;
				}
			}

			image {
				width: 45vw;
				height: 20vw;
			}
		}

		.menu {
			position: relative;
			top: 4vw;
			background-color: white;
			border-radius: 6px;
			box-shadow: 0px 2px 20px 0px rgba(21, 21, 21, 0.03);
			padding-bottom: 15px;

			.row {
				.title {
					padding: 20px;
					display: flex;
					align-items: center;
					font-size: 16px;
					font-weight: bold;
				}

				.title::before {
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

				.buttons {
					padding: 0 20px;
					display: flex;
					justify-content: space-between;
					font-size: 14px;
					color: rgba(114, 131, 151, 1);

					.item {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						view {
							padding-top: 5px;
						}
					}

					image {
						height: 32px;
						width: 32px;
						margin-bottom: 4px;
					}
				}
			}
		}
	}
</style>
