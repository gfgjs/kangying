<template>
	<view>
		<view class="header">
			<view class="message" v-if="address" @click="toAddress">
				<view class="text">
					<view class="row">
						<view class="title">{{address.user_name}}</view>
						<view class="title">{{address.mobile}}</view>
					</view>
					<view class="address">
						{{address.full_path}}
					</view>
				</view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
			<view class="no-data title" v-else @click="toAddress">点我前往选择地址</view>
			<image src="../../static/imgs/color-bar.png"></image>
		</view>
		
		<div class="common-place" v-if="isNeedEvidence"></div>
		<div class="common-place" v-if="isNeedEvidence"></div>
		<view class="imgs-box" v-if="isNeedEvidence">
			<view class="title">
				上传处方凭证
			</view>
			<view class="imgs-row">
				<image v-for="(i,index) in imgs" :key="'img'+index" :src="i" class="add-button" @longpress="viewBigImg([i])" @click="clickImg(index)"
				 mode=""></image>
				<view class="add-button" @click="upImg()">
					<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
				</view>
			</view>
		</view>

		<!-- <radio-group> -->
		<view>
			<div class="common-place"></div>
			<div class="common-place"></div>
			<view class="case">
				<view class="title row">
					费用清单
					<!-- <radio></radio> -->
				</view>
				<view class="row" v-for="(item,index) in goods" :key='index'>
					<image :src="item.goods_info.m_thumb" mode=""></image>
					<view class="name ellipsis">{{item.goods_info.m_name}}</view>
					<view>共{{item.goods_number}}件</view>
					<view>￥{{item.goods_info.sale_price}}/件</view>
				</view>
				<view class="row">
					<view>快递费用</view>
					<view>￥{{freight}}</view>
				</view>
			</view>
		</view>
		<!-- </radio-group> -->
		<div class="common-place"></div>
		<div class="common-place"></div>
		<radio-group class="pay-type">
			<label class="row" for="pay-ali" @click="payType=1">
				<view class="left">
					<image src="../../static/imgs/alipay.png" mode=""></image>
					<view>支付宝支付</view>
				</view>
				<radio checked="" id="pay-ali"></radio>
			</label>
			<label class="row" for="pay-wx" @click="payType=2">
				<view class="left">
					<image src="../../static/imgs/weixin.png" mode=""></image>
					<view>微信支付</view>
				</view>
				<radio id="pay-wx"></radio>
			</label>
		</radio-group>

		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<div class="common-place"></div>

		<view class="bottom">
			<view class="left">
				共 {{goodsCount}} 件商品
				<view class="price">￥{{allPrice}}</view>
			</view>
			<view class="button" @click="orderSubmit">
				立即下单
			</view>
		</view>
	</view>
</template>

<script>
	import {
		request_getAddressList,
		request_uploadImg,
		request_orderSubmit,
		request_getFreight,
		request_orderPay
	} from '../../common/https.js'

	export default {
		data() {
			return {
				goods: [],
				address: null, // {}
				goodsCount: '',
				allPrice: 0,
				imgs: [],
				isNeedEvidence:false,
				freight: 0,
				payType: 1, // 1支付宝 2微信
				
			}
		},
		watch: {
			address(e) {
				if (e) {
					request_getFreight({
						uni,
						data: {
							address_id: e.id
						}
					}).then(res => {
						if (res.code === 0) {
							this.freight = res.data
							this.calcPrice()
						}
					})
				}
			}
		},
		onShow() {
			const goods = getApp().globalData.tempOrderGoods
			this.goods = goods
			this.calcPrice()

			const address = getApp().globalData.tempOrderAddress
			if (address) {
				this.address = address
			} else {
				request_getAddressList({
					uni
				}).then(res => {
					if (res.code === 0) {
						if (res.data.length) {
							this.address = res.data[0]
						}
					}
				})
			}
		},
		methods: {
			orderSubmit() {
				if (this.isNeedEvidence && !this.imgs.length) {
					this.$api.msg('商品包含处方药，请上传处方凭证！')
					return
				}
				if (!this.address) {
					this.$api.msg('请选择地址！')
					return
				}
				request_orderSubmit({
					uni,
					data: {
						address_id: this.address.id,
						goods_info: this.goods.map(item => {
							return {
								goods_number: item.goods_number,
								goods_id: item.goods_info.id
							}
						}),
						evidence: this.imgs
					}
				}).then(res => {
					if (res.code === 0) {
						request_orderPay({
							uni,
							data: {
								order_id: res.data.order_id,
								pay_type: this.payType
							}
						}).then(res => {
							uni.requestPayment({
								provider: res.data.provider,
								orderInfo: res.data.orderInfo,
								success: function(res) {
									console.log('success:' + JSON.stringify(res));
								},
								fail: function(err) {
									console.log('fail:' + JSON.stringify(err));
								}
							})
						})
					} else {
						this.$api.msg(res.err)
					}
				})
			},
			upImg() {
				request_uploadImg({
					uni
				}).then(res => {
					if (res.code === 0) {
						this.imgs.push(res.data)
					} else {
						this.$api.msg(res.err)
					}
				})
			},
			viewBigImg(urls) {
				uni.previewImage({
					urls
				})
			},
			clickImg(index) {
				uni.showModal({
					content: '是否删除此图片？（长按可查看大图）',
					confirmText: '确认删除',
					success: e => {
						if (e.confirm) {
							this.imgs.splice(index, 1)
						}
					}
				})
			},
			calcPrice() {
				this.allPrice = 0
				this.goodsCount = 0
				this.goods.map(item => {
					this.goodsCount += (item.goods_number * 1)
					this.allPrice += (item.goods_number * item.goods_info.sale_price)
					if(item.goods_info.is_prescription===1){
						this.isNeedEvidence = true
					}
				})
				this.allPrice += this.freight * 1
			},
			toAddress() {
				this.$pageTo({
					url: '/pages/mine/address?from=create-order'
				})
			}
		}

	}
</script>

<style lang="scss">
	.common-place {
		background-color: rgba(245, 245, 245, 1);
	}

	.header {
		position: relative;

		image {
			height: 4px;
			width: 100%;
			position: absolute;
			bottom: 0;
		}

		background-color: white;
		padding-bottom: 20px;

		.message {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 30px 20px 10px;

			.text {
				display: flex;
				flex-direction: column;

				>view {
					display: flex;
				}

				.title {
					margin-right: 20px;
				}

				.address {
					font-size: 14px;
					margin-top: 20px;
				}
			}
		}
	}

	.case {
		padding: 20px 20px 0;

		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px 0;
			border-bottom: #F8F5F5 solid 1px;
			font-size: 14px;

			image {
				height: 50px;
				width: 50px;
			}

			.name {
				width: 40vw;
			}

		}

		.title {
			font-size: 16px;
		}
	}

	.imgs-box {
		padding: 20px;
		padding-bottom: 0;

		.imgs-row {
			display: flex;
			flex-wrap: wrap;
			padding-left: 10px;
			padding-top: 25px;
			justify-content: flex-start;
		}

		.add-button {
			height: 50px;
			width: 50px;
			border-radius: 4px;
			background-color: #F7F7F7;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 20px;
			margin-bottom: 20px;
		}
	}

	.pay-type {
		.row {
			padding: 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;
				font-size: 16px;

				image {
					width: 31px;
					height: 31px;
					margin-right: 10px;
				}
			}
		}
	}

	.bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: white;
		display: flex;
		height: 50px;
		justify-content: space-between;
		box-shadow: 0 0 2px #eeeeee;

		.left {
			display: flex;
			align-items: center;
			font-size: 15px;
			padding-left: 20px;
			padding-right: 10px;
			justify-content: space-between;
			width: 61.8%;

			.price {
				padding-left: 10px;
				font-size: 18px;
				font-weight: bold;
			}
		}

		.button {
			width: 38.2%;
			border-radius: 0;
			height: 100%;
		}
	}
</style>
