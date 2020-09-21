<!-- 商品详情页 -->
<template>
	<view>
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item">
					<view class="image-wrapper">
						<image :src="info.m_thumb" class="loaded" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="common-place"></view>
		<view class="title row">{{info.m_name}}</view>
		<view class="row">
			<view class="little-title">{{info.sub_title}}</view>
			<view class="little-title manual" @click="previewImg([info.instructions])">说明书 <uni-icons type="arrowright" size="14"></uni-icons>
			</view>
		</view>
		<view class="row price-row">
			<view class="left">
				<view class="price">￥{{info.sale_price}}</view>
				<view class="little-title" v-if="info.original_price">￥{{info.original_price}}</view>
			</view>
			<view class="right little-title">
				已售<view class="price">{{info.sale}}</view>份/剩余{{info.stock}}份
			</view>
		</view>
		<view class="row tips-row" v-if="info.is_prescription">本药品为处方药，需要在咨询医生后，在确保医生正确判断病情的情况下开具处方</view>
		<view class="row tips-row" v-else>非处方药</view>
		<view class="details">
			<image @click="previewImg([info.instructions])" :src="info.instructions" mode="widthFix"></image>
		</view>
		<view class="buttons">
			<view class="button add-to-cart" @click="addToCart">
				<uni-icons type="cart" size="24"></uni-icons>
			</view>
			<view class="button ask-doctor-button" @click="openBuyPopup">立即购买</view>
		</view>
		<uni-popup ref="buyPopup">
			<view class="buy-box">
				<view>
					<view class="title">选择购买数量</view>
					<uni-number-box @change="goodsNumberChange" :min="1"></uni-number-box>
				</view>
				<view class="button" @click="toSettlement">提交</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		request_medInfo,
		request_cartAdd
	} from '../../common/https.js'
	import {
		mapGetters
	} from 'vuex'
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
				info: {},
				goodsNumber:1,
			}
		},
		computed: {
			...mapGetters(['hasLogin'])
		},
		onLoad(e) {
			request_medInfo({
				uni,
				data: {
					id: e.id
				}
			}).then(res => {
				this.info = res.data
			})
		},
		onNavigationBarButtonTap(e) {
			this.$pageTo({
				needLogin: true,
				url: '/pages/mall/cart'
			})
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		methods: {
			goodsNumberChange(e){
				this.goodsNumber = e
			},
			openBuyPopup(){
				this.$refs.buyPopup.open()
			},
			toSettlement(){
				let array = []
				array.push({
					goods_info:this.info,
					goods_number:this.goodsNumber,
				})
				getApp().globalData.tempOrderGoods = array
				this.$pageTo({
					needLogin:true,
					url:'/pages/mall/create-order'
				})
				this.$refs.buyPopup.close()
			},
			addToCart(item) {
				if (this.hasLogin) {
					request_cartAdd({
						uni,
						data: {
							goods_id: this.info.id,
							goods_number: 1
						}
					}).then(res => {
						this.setTitleNViewStyle(1, true)
						this.$api.msg(res.data || res.err)
					})
				} else {
					this.$pageTo({
						url: '',
						needLogin: true
					})
				}
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
			previewImg(urls) {
				uni.previewImage({
					urls
				})
			}
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

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 14px;

		.manual {
			color: #FF3030;

			.uni-icons {
				color: #FF3030 !important;
			}
		}
	}

	.price-row {
		>view {
			display: flex;
			align-items: center;
			font-size: 14px;
		}

		.left {
			.price {
				font-size: 18px;
				font-weight: bold;

			}

			.little-title {
				text-decoration: line-through;
				margin-left: 10px;
			}
		}
	}

	.tips-row {
		background: rgba(249, 249, 249, 1);
		color: #6A6A6A;
		font-size: 14px;
		border-radius: 4px;
		max-width: 90%;
		margin: 10px auto;
	}

	.buttons {
		position: fixed;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 60px;
		box-shadow: 0 0 15px #cccccc;
		background-color: white;

		.button {
			border-radius: 0;
			height: 100%;
		}

		.add-to-cart {
			width: 38%;
			background-color: white;
			background-image: none;
			color: $base-color;

			.uni-icons {
				// color: $base-color!important;
			}
		}

		.ask-doctor-button {
			width: 62%;
		}
	}


	.details {
		width: 100%;
		padding: 10px;

		image {
			width: 100%;
		}
	}
	.buy-box{
		height: 31.8vh;
		background-color: white;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		>view:nth-of-type(1){
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				padding: 20px;
			}
		}
		.button{
			width: 100%;
			height: 55px;
			position: absolute;
			bottom: 0;
		}
	}
</style>
