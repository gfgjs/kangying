<template>
	<view>
		<view class="header-box linear-background">
			<view class="row">
				<image src="../../static/index/top.png" mode=""></image>
				<view class="right">
					<view class="top">
						<view class="title">孙大圣</view>
						<view class="little-title">主任医师·副教授</view>
					</view>
					<view class="bottom">
						上海华山医院浦东分院丨消化内科
						<!-- <uni-icons type="arrowdown"></uni-icons> -->
					</view>
				</view>
			</view>
			<view class="row evaluate">
				<view class="item">
					<view class="number">9.0</view>
					<view class="text">月积分</view>
				</view>
				<view class="item">
					<view class="number">9.0</view>
					<view class="text">周排名</view>
				</view>
				<view class="item">
					<view class="number">9.0</view>
					<view class="text">评价</view>
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
				<view class="menu">
					<image src="../../static/mine/3.png" mode=""></image>
					义诊回帖
				</view>
			</view>
			<view class="row-title">系统服务</view>
			<view class="menus">
				<view class="menu">
					<image src="../../static/mine/4.png" mode=""></image>
					系统设置
				</view>
				<view class="menu">
					<image src="../../static/mine/5.png" mode=""></image>
					投诉建议
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onShow() {
			 uni.getSystemInfo({  
			        success:function(e){  
						console.log(e);
			        
			  
			        }  
			    }) 
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
