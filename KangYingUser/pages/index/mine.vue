<template>
	<view>
		<!-- <view class="nav-place linear-background"></view> -->
		<view class="header linear-background">
			<view class="head-wrap">
				<image src="../../static/mine/0.png" mode=""></image>
				<view>
					<view class="name">用户名</view>
					<view class="level">等级</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="recoder">
				<view class="title">药品订单</view>
				<view class="buttons">
					<view class="item" v-for="i in menus" :key="i">
						<image :src="`../../static/mine/${i.id}.png`" mode=""></image>
						<view>{{i.name}}</view>
					</view>
				</view>
			</view>
			<view class="place"></view>
			<view class="wrap img-menu">
				<view class="item">
					<view class="title">
						就诊人管理
						<uni-icons type="arrowright"></uni-icons>
					</view>
					<view class="little-title">在线管理个人就诊信息</view>
				</view>
				<view class="item">
					<view class="title">
						就诊人管理
						<uni-icons type="arrowright"></uni-icons>
					</view>
					<view class="little-title">在线管理个人就诊信息</view>
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
						<view class="item">
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
				]
			};
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
			// height: 20vw;
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
