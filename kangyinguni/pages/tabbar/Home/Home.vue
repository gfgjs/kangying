<template>
	<view class="page">
		<view class="null-nav"></view>
		<view class="nav">
			<view>
				天心在线医疗
			</view>
			<view class="right">
				<image class="doctor" src="../../../static/home/15.png" mode=""></image>
				<image class="message" src="../../../static/home/12.png" mode=""  @click="navTo('我的消息')"></image>
			</view>
		</view>

		<scroll-view scroll-y="true" class="home-scroll">
			<view class="search-wrap">
				<view class="search">
					<image mode="aspectFit" src="../../../static/home/16.png"></image>
					<input type="text" placeholder="找医生、找医院、查疾病">
					<image mode="aspectFit" src="../../../static/home/9.png"></image>
				</view>
			</view>
			<view class="place"></view>
			<view class="banner">
				<image src="../../../static/home/13.png" mode="aspectFill"></image>
			</view>

			<view class="wrap func-1">
				<view class="top">
					<view @click="navTo('网上看病')">
						<image src="../../../static/home/5.png" mode=""></image>
						<view>网上看病</view>
					</view>
					<view @click="navTo('线下就诊')">
						<image src="../../../static/home/6.png" mode=""></image>
						<view>线下就诊</view>
					</view>
					<view @click="navTo('快速购药')">
						<image src="../../../static/home/7.png" mode=""></image>
						<view>快速购药</view>
					</view>
				</view>
				<view class="bottom">
					<view class="item item-1">
						<view>免费问医生</view>
						<view class="little">有问题快速问医生</view>
					</view>
					<view class="item item-2">
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
						<view class="item" @click="navTo('注册建档')">
							<view class="left">
								<view class="big">注册建档</view>
								<view class="little">在线完成注册建档</view>
							</view>
							<image src="../../../static/home/22.png" mode="aspectFit"></image>
						</view>
						<view class="item" @click="navTo('检查预约')">
							<view class="left">
								<view class="big">检查预约</view>
								<view class="little">在线预约身体检查</view>
							</view>
							<image src="../../../static/home/21.png" mode="aspectFit"></image>
						</view>
					</view>
					<view class="top">
						<view class="item" @click="navTo('电子病历')">
							<view class="left">
								<view class="big">电子病历</view>
								<view class="little">查看个人电子病历</view>
							</view>
							<image src="../../../static/home/22.png" mode="aspectFit"></image>
						</view>
						<view class="item" @click="navTo('体检预约')">
							<view class="left">
								<view class="big">体检预约</view>
								<view class="little">快速预约体检套餐</view>
							</view>
							<image src="../../../static/home/21.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="wrap func-3">
				<view class="title">
					<view class="content">特色服务</view>
				</view>
				<view class="list">
					<view class="item" @click="navTo('慢病管理')">
						<image src="../../../static/home/14.png" mode="aspectFit"></image>
						<view>慢病管理</view>
					</view>
					<view class="item" @click="navTo('特色120')">
						<image src="../../../static/home/11.png" mode="aspectFit"></image>
						<view>特色120</view>
					</view>
					<view class="item" @click="navTo('远程会诊')">
						<image src="../../../static/home/8.png" mode="aspectFit"></image>
						<view>远程会诊</view>
					</view>
				</view>
			</view>
			<view class="wrap func-4">
				<view class="title">
					<view class="left">
						<view class="blue"></view>
						<view class="text">健康咨询</view>
					</view>
					<view class="right" @click="navTo()">
						更多<image src="../../../static/home/4.png" mode="aspectFit"></image>
					</view>
				</view>

			</view>
			<view class="wrap bottom-banner" v-for="item in bottomBanner" v-bind:key="item.id" :style="`background: url(${item.background});`">
				<view class="mask" @click="navTo('科普')">
					<image src="../../../static/home/3.png" mode=""></image>
					<view>
						{{item.content}}
					</view>
					<view class="doctor">
						<image :src="item.doctorImg"></image>
						<view class="">
							{{item.doctorText}}
						</view>
					</view>
				</view>
			</view>
			<view style="height: 10px;">

			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Vue from 'vue'
	// import img from '../../../static/img/home/doctor.png'
	 
	export default {
		data() {
			return {
				width: 10,
				bottomBanner:[
					{
						id:1,
						background:'../../../static/home/23.png',
						doctorImg:'../../../static/home/15.png',
						content:'【科普】有些隔夜饭菜不致癌？真正致癌的食物到底有哪些',
						doctorText:'戴医生 上海长江医院'
					},
					{
						id:2,
						background:'../../../static/home/10.png',
						doctorImg:'../../../static/home/15.png',
						content:'【科普】夏季来临，有哪些搭配的茶是清热去火气的',
						doctorText:'戴医生 上海长江医院'
					}
				]
				// img
			};
		},
		mounted() {
			console.log(Vue.prototype.customBar)
			var color111 = 'green'
		},
		methods: {
			goTest() {
				uni.navigateTo({
					url: '../../Login/Login'
				})
			},
			navTo(title){
				uni.navigateTo({
					url: './HealthAsk?title='+(title||'')
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	page,
	.page {
		background-color: #f7f8fa;
		height: 100vh;
		width: 100vw;
	}

	.index {
		width: 100px;
		height: 100px;
	}

	.null-nav {
		background-color: #1D7FFD;
	}

	.nav {
		width: 100vw;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		background-color: #1D7FFD;
		color: white;

		.right {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100px;
			height: 100%;

			.doctor {
				height: 36px;
				width: 36px;
			}

			.message {
				height: 32px;
				width: 32px;
			}
		}

		input {
			height: 30px;
			border: 1px solid #eeeeee;
			padding: 4px 10px;
			border-radius: 6px;

		}
	}


	.home-scroll {
		height: calc(100vh - 38px - 50px);
		// padding-bottom: 10px;

		.place {
			height: 50px;
			background-color: #1D7FFD;
			box-shadow: 0px 6px 20px 0px #1D7FFD;
		}

		.search-wrap {
			width: 100vw;
			background-color: #1D7FFD;
			height: 80px;
			position: relative;

			.search {
				width: 94%;
				height: 42px;
				position: absolute;
				left: 2%;
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
			margin: -50px 0 0 2%;

			image {
				width: 96%;
				height: 100px;
				border-radius: 10px;

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
				.item-1{
					background:url(../../../static/home/1.png) no-repeat;
				}
				.item-2{
					background:url(../../../static/home/2.png) no-repeat;
				}
				.item{
					width: 48%;
					height: 80px;
					background-size: 100% 100%;
					font-size: 16px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					padding: 10px 0 10px 10px;
					color: #2C2C2C;
					.little{
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
					background-color: #2483FD;
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
				background-color: red;

				background-size: 100%;
				background: linear-gradient(90deg, rgba(48, 138, 252, 1), rgba(18, 116, 253, 1));
				color: white;

				.content {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 100%;
					background: url(../../../static/home/18.png) no-repeat;
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
						background-color: #2483FD;
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
	
		.bottom-banner{
			padding: 0;
			background-repeat: no-repeat!important;
			background-size: 100% 100%!important;
			
			height: 42vw;
			overflow: hidden;
			
			display: flex;
			flex-direction: column;
			.mask{
				background:rgba(0,0,0,0.45);
				width: 100%;
				height: 100%;
				color: #FFFFFF;
				letter-spacing: 2px;
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				padding: 10px 20px 0 20px;
				.doctor{
					color: #FFFFFF;
					font-size: 14px;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					image{
						width: 36px;
						height: 36px;
					}
				}
			}
			image{
				width: 12px;
				height: 12px;
			}
			}
	}



	button {
		width: 80vw;
		position: absolute;
		bottom: 100px;
		left: 10vw;
	}
</style>
