<template>
	<view>
		<view class="header">
			<view class="message">
				<view class="text">
					<view class="row">
						<view class="title">{{info.user_name}}</view>
						<view class="title">{{info.user_mobile}}</view>
					</view>
					<view class="address">
						{{info.address}}
					</view>
				</view>
				<!-- <uni-icons type="arrowright"></uni-icons> -->
			</view>
			<image src="../../static/imgs/color-bar.png"></image>
		</view>

		<div class="common-place" v-if="info.evidence"></div>
		<div class="common-place" v-if="info.evidence"></div>
		<view class="imgs-box" v-if="info.evidence">
			<view class="title" style="display: flex;justify-content: space-between;align-items: center;">
				处方凭证 <view class="little-title" v-if="info.is_check&&info.status">{{info.check_status?'审核通过,等待发货':'等待药师审核'}}</view>
			</view>
			<view class="imgs-row">
				<image v-for="(item,index) in info.evidence" :key="item" :src="item" class="add-button" @click="viewBigImg([item])"
				 mode=""></image>
				<!-- <view class="add-button" @click="upImg()">
					<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
				</view> -->
			</view>
		</view>

		<!-- <radio-group> -->
		<view>
			<div class="common-place"></div>
			<div class="common-place"></div>
			<view class="case">
				<view class="title row">
					商品清单
					<!-- <radio></radio> -->
				</view>
				<view class="row" v-for="(item,index) in info.goods_info" :key='index'>
					<image :src="item.m_thumb" mode=""></image>
					<view class="name ellipsis">{{item.m_name}}</view>
					<view></view>
					<view></view>
					<view>共{{item.goods_number}}件</view>
					<view>￥{{item.sale_price}}/件</view>
				</view>
				<view class="row">
					<view>快递费用</view>
					<view>￥{{info.freight}}</view>
				</view>
			</view>
		</view>


		<view class="order-message">
			<div class="common-place"></div>
			<div class="common-place"></div>
			<view class="title">订单信息</view>
			<view class="row">
				<view>订单编号</view>
				<input type="text" :value="info.order_no" disabled>
			</view>
			<view class="row">
				<view>创建时间</view>
				<input type="text" disabled :value="formatDate(info.create_time)+' '+formatMinute(info.create_time)">
			</view>
			<!-- <view class="row">
				<view>支付时间</view>
				<input type="text" :value="info.order_no">
			</view> -->

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
				<view>总金额</view>
				<view class="price">￥{{info.total_price}}</view>
			</view>
			<view class="button" @click="orderSubmit">
				立即支付
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
		request_orderPay,
		request_orderInfo
	} from '../../common/https.js'
	import {
		formatDate,
		formatMinute
	} from '../../common/util.js'

	export default {
		data() {
			return {
				goods: [],
				address: null, // {}
				goodsCount: '',
				allPrice: 0,
				imgs: [],
				isNeedEvidence: false,
				freight: 0,
				payType: 1, // 1支付宝 2微信

				info: {},
				formatDate,
				formatMinute
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
		onLoad(e) {
			request_orderInfo({
				uni,
				data: {
					id: e.id
				}
			}).then(res => {
				if (res.code === 0) {
					this.info = res.data
				}
			})
		},
		onShow() {
			// const goods = getApp().globalData.tempOrderGoods
			// this.goods = goods
			// this.calcPrice()

			// const address = getApp().globalData.tempOrderAddress
			// if (address) {
			// 	this.address = address
			// } else {
			// 	request_getAddressList({
			// 		uni
			// 	}).then(res => {
			// 		if (res.code === 0) {
			// 			if (res.data.length) {
			// 				this.address = res.data[0]
			// 			}
			// 		}
			// 	})
			// }
		},
		methods: {
			orderSubmit() {
				request_orderPay({
					uni,
					data: {
						order_id: this.info.id,
						pay_type: this.payType
					}
				}).then(res => {
					uni.requestPayment({
						provider: res.data.provider,
						orderInfo: res.data.orderInfo,
						success: (res) => {
							this.$pageTo({
								url: '/pages/mall/order',
								options: {
									tab: 1
								}
							})
							console.log('success:' + JSON.stringify(res));
						},
						fail: (err) => {
							this.$api.msg('支付失败')
							console.log('fail:' + JSON.stringify(err));
						}
					})
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
					if (item.goods_info.is_prescription === 1) {
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

	.order-message {
		.title {
			padding: 20px;
		}

		.row {
			padding: 20px;
			padding-top: 0;
			display: flex;
			justify-content: start;
			align-items: center;

			input {
				padding-left: 10px;
				width: 80%;
				font-size: 14px;
			}

			view {
				font-size: 14px;
				padding-left: 5px;
			}
		}
	}
</style>
