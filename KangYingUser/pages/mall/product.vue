<!-- 商品详情页 -->
<template>
	<view>
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in imgList" :key="index">
					<view class="image-wrapper">
						<image :src="item.src" class="loaded" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="common-place"></view>
		<view class="title row">【买送共发120片】汤臣倍健 牛初乳加钙咀嚼片60片 +30片2瓶</view>
		<view class="row">
			<view class="little-title">儿童 青少年钙片淡淡奶香味</view>
			<view class="little-title manual">说明书 <uni-icons type="arrowright" size="14"></uni-icons></view>
		</view>
		<view class="row price-row">
			<view class="left">
				<view class="price">￥1999</view>
				<view class="little-title">￥2111</view>
			</view>
			<view class="right little-title">
				已售<view class="price">89</view>份/剩余500份
			</view>
		</view>
		<view class="row tips-row">本药品为处方药，需要在咨询医生后，在确保医生正确判断病情的情况下开具处方</view>
		
		<view class="button ask-doctor-button">咨询医师</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [{
						src: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg'
					}
				],
			};
		}
	}
</script>

<style lang="scss">
	page {
		padding-bottom: 60px;
	}

	.carousel {
		height: 45vh;
		position: relative;

		swiper {
			height: 100%;
		}

		.image-wrapper {
			width: 100%;
			height: 100%;
		}

		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

	}

	.row{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 14px;
		.manual{
			color: #FF3030;
			.uni-icons{
				color: #FF3030!important;
			}
		}
	}
	.price-row{
		>view{
			display: flex;
			align-items: center;
			font-size: 14px;
		}
		.left{
			.price{
				font-size: 18px;
				font-weight: bold;
				
			}
			.little-title{
				text-decoration: line-through;
				margin-left: 10px;
			}
		}
	}
	.tips-row{
		 background:rgba(249,249,249,1);
		 color: #6A6A6A;
		 font-size: 14px;
		 border-radius: 4px;
		 width: 90%;
		 margin: 10px auto;
	}

	.ask-doctor-button {
		width: 100%;
		border-radius: 0;
		height: 60px;
		position: fixed;
		bottom: 0;
	}
</style>
