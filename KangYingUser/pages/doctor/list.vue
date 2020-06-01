<template>
	<view>
		<view class="screen">
			<picker mode="selector" :range="array">
				<view class="little-title">级别<uni-icons type="arrowdown"></uni-icons></view>
			</picker>
			<picker mode="selector" :range="array">
				<view class="little-title">级别<uni-icons type="arrowdown"></uni-icons></view>
			</picker>
			<picker mode="selector" :range="array">
				<view class="little-title">级别<uni-icons type="arrowdown"></uni-icons></view>
			</picker>
			<picker mode="selector" :range="array">
				<view class="little-title">级别<uni-icons type="arrowdown"></uni-icons></view>
			</picker>
			<uni-icons type="list"></uni-icons>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="doctor" v-for="i in 10" :key='i'>
			<view class="top">
				<image src="../../static/home/15.png" mode=""></image>
				<view class="right">
					<view class="row">
						<view class="title">孙春玲</view>
						<view class="little-title">主任医师·副教授</view>
						<view class="level">
							<uni-icons type="star-filled" color="#FBBB27"></uni-icons>
							4.8
						</view>
					</view>
					<view class="row little-title">
						上海华山医院浦东分院丨消化内科
					</view>
					<view class="row price-row">
						<view class="tags">
							<view class="doctor-tag doctor-tag-1">
								<uni-icons class="tag-icon" type="person"></uni-icons>
								从业12年
							</view>
							<view class="doctor-tag doctor-tag-2">
								<uni-icons class="tag-icon" type="paperplane"></uni-icons>
								响应快
							</view>
						</view>
						<view class="price title">
							￥49
						</view>
					</view>
					<view class="row tags">
						<view class="illness-tag">胃胀气</view>
						<view class="illness-tag">肠道堵塞</view>
						<view class="illness-tag">胃胀气</view>
					</view>
				</view>
			</view>
			<view class="bottom">
				<view class="left">
					<view class="count">
						<view class="title">94</view>
						<view class="little-title">总回复</view>
					</view>
					<view class="count">
						<view class="title">94</view>
						<view class="little-title">总回复</view>
					</view>
				</view>
				<view class="button">立即咨询</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array:['主任','专家']
			};
		}
	}
</script>

<style lang="scss">
	page{
		background-color: $page-color-base;
	}
	.screen{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30px;
		position: fixed;
		height: 40px;
		background-color: white;
		width: 100%;
		z-index: 1;
	}
	.doctor{
		margin: 20px auto;
		width: calc(100vw - 20px);
		background-color: white;
		border-radius: 4px;
		box-shadow: 0 0 2px #eeeeee;
		padding: 10px 20px;
		// display: flex;
		// flex-direction: column;
		.top{
			border-bottom: solid 1px #FBFBFB;
			display: flex;
			width: 100%;
			padding-bottom: 10px;
			.right{
				width: calc(100% - 60px);
				padding-left: 10px;
			}
			.level{
				background-color: #FFF8EB;
				border-radius: 20px;
				padding: 0 6px;
				color: #FBBB27;
				display: flex;
				align-items: center;
				font-size: 14px;
				font-weight: bold;
			}
			.price{
				font-size: 20px;
			}
			.row{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 6px 0;
			}
			image{
				width: 60px;height: 60px;
				margin-top: 10px;
				
			}
			.tags{
				display: flex;
				justify-content: start;
				view{
					font-size: 14px;
					margin-right: 6px;
				}
				.doctor-tag{
					border-radius: 10px;
					padding: 2px 6px;
				}
				.doctor-tag-1{
					background:rgba(235,239,253,1);
					border-radius:19px;
					color: #4EA6FF;
					.uni-icons{
						color: #4EA6FF!important;
					}
				}
				.doctor-tag-2{
					background:rgba(253,245,241,1);
					border-radius:19px;
					color: #FF5D69;
					.uni-icons{
						color: #FF5D69!important;
					}
				}
			}
			.illness-tag{
				background:rgba(248,251,254,1);
				border-radius:3px;
				padding: 2px 6px;
			}
			
			.price-row{
				justify-content: space-between;
				width: 100%;
			}
		}
		.bottom{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 10px;
			.button{
				border-radius: 18px;
			}
			.left{
				display: flex;
				.count{
					display: flex;
					flex-direction: column;
					align-items: center;
					view{
						padding: 2px 10px;
					}
				}
			}
		}
	}
</style>
