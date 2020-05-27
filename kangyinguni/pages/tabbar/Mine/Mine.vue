<template>
	<view>
		<!-- <view class="null-nav"></view>
		<view class="nav">
			<view>
				天心在线医疗
			</view>
			<view class="right">
				<image class="doctor" src="../../../static/home/15.png" mode=""></image>
				<image class="message" src="../../../static/home/12.png" mode="" @click="navTo('我的消息')"></image>
			</view>
		</view> -->
		<navBar></navBar>
		<view class="header">
			<view class="head-wrap">
				<image src="../../../static/mine/0.png" mode=""></image>
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
					<view class="item" v-for="i in 5" :key="i">
						<image :src="`../../../static/mine/${i}.png`" mode=""></image>
						<view>购物车</view>
					</view>
				</view>
			</view>
			<view class="place"></view>
			<view class="wrap img-menu">
				<image src="../../../static/mine/6.png" mode=""></image>
				<image src="../../../static/mine/7.png" mode=""></image>
			</view>
			
			<view class="wrap menu">
				<view class="row">
					<view class="title">病历夹</view>
					<view class="buttons">
						<view class="item">
							<image src="../../../static/mine/8.png" mode=""></image>
							<view>病历档案</view>
						</view>
						<view class="item">
							<image src="../../../static/mine/9.png" mode=""></image>
							<view>病历档案</view>
						</view>
						<view class="item">
							<image src="../../../static/mine/10.png" mode=""></image>
							<view>病历档案</view>
						</view>
						<view class="item">
							<image src="../../../static/mine/11.png" mode=""></image>
							<view>病历档案</view>
						</view>
					</view>
				</view>
				<view class="row">
					<view class="title">系统服务</view>
					<view class="buttons">
						<view class="item">
							<image src="../../../static/mine/12.png" mode=""></image>
							<view>账户设置</view>
						</view>
						<view class="item">
							<image src="../../../static/mine/13.png" mode=""></image>
							<view>账户设置</view>
						</view>
						<view class="item" style="opacity: 0;">
							<image src="../../../static/mine/8.png" mode=""></image>
							<view>账户设置</view>
						</view>
						<view class="item" style="opacity: 0;">
							<image src="../../../static/mine/8.png" mode=""></image>
							<view>账户设置</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from '../../../components/nav-bar.vue'
	export default {
		components:{navBar},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
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

.header{
	width: 100vw;
	height: 240px;
	background-color: #0B7EFF;
	
	.head-wrap{
		width: 100%;
		display: flex;
		align-items: center;
		padding: 30px;
		// background-color: white;
		view{
			margin-left: 10px;
			color: white;
		}
		image{
			height: 70px;
			width: 70px;
		}
	}
}
.footer{
	width: 100%;
	height: 60vh;
	background:rgba(247,248,250,1);
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	
	position: relative;
	top: -20px;
	.recoder{
		width: 92vw;
		height: 40vw;
		margin-left: 4vw;
		// margin-top: -20vw;
		background-color: white;
		position: absolute;
		top: -20vw;
		padding:0 10px;
		border-radius: 6px;
		box-shadow:0px 2px 20px 0px rgba(21,21,21,0.03);
		font-size: 16px;
		image{
			width: 40px;
			height: 30px;
		}
		.title{
			padding: 15px 0;
			font-size: 18px;
			font-weight: bold;
			border-bottom:1px solid #f9f9f9;
		}
		.buttons{
			padding: 10px 0;
			display: flex;
			justify-content: space-around;
			view{
				padding-top: 5px;
			}
		}
	}
	.place{
		height: 24vw;
	}
	.wrap{
		width: 92vw;
		margin-left: 4vw;
	}
	.img-menu{
		display: flex;
		justify-content: space-between;
		
		image{
			width: 45vw;
			height: 20vw;
		}
	}
	.menu{
		position: relative;
		top: 4vw;
		background-color: white;
		border-radius: 6px;
		// height: 20vw;
		box-shadow:0px 2px 20px 0px rgba(21,21,21,0.03);
		padding-bottom: 15px;
		.row{
			.title{
				padding: 20px;
				display: flex;
				align-items: center;
				font-size: 16px;
				font-weight: bold;
			}
			.title::before{
				content: '';
				width:4px;
				height: 20px;
				background-color: red;
				position: absolute;
				left: 0;
				background:rgba(29,127,253,1);
				box-shadow:0px 8px 21px 0px rgba(36,131,253,0.3);
				border-top-right-radius:3px;
				border-bottom-right-radius:3px;
			}
			.buttons{
				padding: 0 20px;
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color:rgba(114,131,151,1);
				.item{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					view{
						padding-top: 5px;
					}
				}
				image{
					height: 40px;
					width: 40px;
				}
			}
		}
	}
}
</style>
