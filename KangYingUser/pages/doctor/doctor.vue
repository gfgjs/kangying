<template>
	<view>
		<view class="header linear-background">
			<image src="../../static/home/15.png"></image>
			<view class="message">
				<view class="row name">
					<view class="title">孙纯林</view>
					<view class="little-title">主任医师·副教授</view>
					<view class="tag">在线</view>
				</view>
				<view class="row address">
					上海华山医院浦东分院丨消化内科
					<uni-icons type="checkbox-filled"></uni-icons>
				</view>
				<view class="message-count">
					<view class="count">
						<view class="title">94</view>
						<view class="little-title">总回复</view>
					</view>
					<view class="count">
						<view class="title">94</view>
						<view class="little-title">总回复</view>
					</view>
					<view class="count">
						<view class="title">4.8</view>
						<view class="little-title">用户评分</view>
					</view>
				</view>
			</view>
		</view>

		<view class="content">
			<view class="title major">
				专业擅长
			</view>
			<view class="row">
				<view class="dot">
					<view class="dot-inner"></view>
				</view>
				<view class="text">医师资格已认证</view>
			</view>
			<view class="row" v-for="i in 12" :key='i'>
				<view class="dot">
					<view class="dot-inner"></view>
				</view>
				<view class="text">专业擅长胃酸胃胀，饭后消化不良，食欲不振胃肠粘连，肠胃炎等疾病</view>
			</view>
			<view class="title major">个人介绍</view>
			<view class="row">
				<view class="dot">
					<view class="dot-inner"></view>
				</view>
				<view class="text">
					中国科学院院士，复旦大学医学系教授，研究生导师，
					曾连续获得三界中国消化疾病论坛“最佳医师奖”，发表
					过十三篇SSC级论文，其中“人体肠道蠕动规律”还曾发
					表在柳叶刀杂志.
				</view>
			</view>
		</view>
		<view class="button">
			在线问诊
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $page-color-base;
	}

	.header {
		display: flex;
		background-color: $base-color;
		// background-image: linear-gradient(114deg, #1e8bff 0%, #1179F3 74%);

		border-bottom-left-radius: 12px;
		padding: 20px;
		color: white;

		image {
			width: 60px;
			height: 60px;

		}

		.row {
			display: flex;
			align-items: center;
			margin: 10px 0;

			.tag {
				background: rgba(255, 248, 235, .3);
				font-size: 14px;
				border-radius: 18px;
				padding: 2px 10px;
			}


		}

		.name {
			view {
				margin-right: 10px;
			}

			.little-title {
				color: #EAF3FF;
			}
		}

		.address {
			background-color: white;
			padding: 2px 10px;
			border-radius: 10px;
			font-size: 14px;
			color: $base-color;

			.uni-icons {
				color: $base-color !important;
				margin-left: 10px;
			}
		}

		.message-count {
			display: flex;
			background-color: $base-color;
			box-shadow: 0 0 2px $base-color;
			padding: 4px 20px;


			.count {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 33%;

				view {
					padding: 2px 0;
					color: white;
				}
			}
		}

	}

	.content {
		width: calc(100% - 40px);
		margin: 20px auto 100px;
		background: rgba(255, 255, 255, 1);
		border-radius: 6px;
		padding: 20px 10px;

		.major {
			background-image: linear-gradient(114deg, #e7eefe 0%, #ffffff 74%);
			width: 40vw;
			// margin: 30px 20px;
			padding: 2px 0 2px 20px;
			border-radius: 20px;
			position: relative;
			left: -15px;
		}

		font-size: 14px;
		color: #2D2D2D;

		.row {
			margin: 30px 0;
			display: flex;
			justify-content: space-between;

			.dot {
				width: 16px;
				height: 16px;
				margin: 8px 0 0 0;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 0px 19px 1px rgba(11, 125, 255, 0.1);
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				.dot-inner {
					width: 8px;
					height: 8px;
					background: $base-color;
					border-radius: 50%;
				}
			}

			.text {
				width: 80%;
				font-size: 15px;
			}
		}
	}
	.button{
		font-size: 16px;
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 60px;
		border-radius: 0;
	}
</style>
