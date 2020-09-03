<template>
	<view>
		<view class="header box-shadow">
			<view class="tab" v-for="(item,index) in tabs" :key='item' @click="switchTab(index)">
				<view class="">{{item}}</view>
				<view class="bar linear-background" :style="currTab==index&&'opacity:1'"></view>
			</view>
		</view>
		<view class="content">
			<noData @retry='retry' v-if="!list.length"></noData>
			<view class="content-item" v-for="(item,index) in list" v-if="item.goods_info" :key='index' @click="viewDetail(item,index)">
				<view class="top">
					<image src="../../static/med.png"></image>
					<view class="right">
						<view class="row title">{{item.goods_info[0].m_name}} {{item.goods_info.length>1?' 等多件':''}}</view>
						<view class="row little-title">{{item.goods_info[0].sub_title}}</view>
						<view class="row price">￥{{item.total_price}}</view>
					</view>
				</view>
				<view class="buttons" v-if="currTab==0">
					<view class="button button-cancel" @click.stop="cancelOrder(item,index)">取消订单</view>
					<view class="button" @click.stop="toPay(item)">去付款</view>
				</view>
				<view class="buttons" v-if="currTab==2">
					<view @click.stop class="button button-cancel">申请售后</view>
					<view @click.stop="orderConfirm(item,index)" class="button">确认收货</view>
				</view>
			</view>
		</view>
		<!-- <view class="content" v-if="currTab==1">
			<noData @retry='retry'></noData>
		</view> -->
		<uni-popup ref="payType">
			<radio-group class="pay-type">
				<label class="row" for="pay-ali" @click="pay(1)">
					<view class="left">
						<image src="../../static/imgs/alipay.png" mode=""></image>
						<view>支付宝支付</view>
					</view>
					<uni-icons type="arrowright"></uni-icons>
					<!-- <radio  checked=""  id="pay-ali"></radio> -->
				</label>
				<label class="row" for="pay-wx" @click="pay(2)">
					<view class="left">
						<image src="../../static/imgs/weixin.png" mode=""></image>
						<view>微信支付</view>
					</view>
					<uni-icons type="arrowright"></uni-icons>
					<!-- <radio id="pay-wx"></radio> -->
				</label>
			</radio-group>
		</uni-popup>
	</view>
</template>

<script>
	import noData from '../../components/nodata.nvue'
	import {
		request_orderList,
		request_orderCancel,
		request_orderPay,
		request_orderConfirm
	} from '../../common/https.js'
	export default {
		components: {
			noData
		},
		data() {
			return {
				tabs: ['待付款', '待发货', '待收货', '待评价', '已完成', '售后/退款'],
				currTab: 0,
				list: [],
				tempItem:{}
			};
		},
		onLoad(e) {
			this.currTab = e.tab || 0
			this.getList(e.tab)
		},
		watch: {
			// currTab(e) {
			// 	this.getList(e)
			// }
		},
		methods: {
			orderConfirm(item){
				uni.showModal({
					title:'提示',
					content:'确认完成此订单吗？',
					success:e=>{
						if(e.confirm){
							request_orderConfirm({uni,data:{order_id:item.id}}).then(res=>{
								if(res.code === 0){
									this.$api.msg(res.data)
									this.list.splice(index, 1)
								}else{
									this.$api.msg(res.msg)
								}
							})
						}
					}
				})
			},
			viewDetail(item, index) {
				this.$pageTo({
					url: '/pages/mall/order-details',
					options: {
						id: item.id
					}
				})
			},
			pay(type) {
				request_orderPay({
					uni,
					data: {
						order_id: this.tempItem.id,
						pay_type: type
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
				this.$refs.payType.close()
			},
			cancelOrder(item, index) {
				uni.showModal({
					title: '取消订单',
					conten: '确定要取消此订单吗？',
					success: e => {
						if (e.confirm) {
							request_orderCancel({
								uni,
								data: {
									order_id: item.id
								}
							}).then(res => {
								if (res.code === 0) {
									this.$api.msg(res.data)
									this.list.splice(index, 1)
								} else {
									this.$api.msg(res.err)
								}
							})
						}
					}
				})
			},
			toPay(item) {
				this.tempItem = item
				this.$refs.payType.open()
			},
			getList(status = 0) {
				this.list = []
				request_orderList({
					uni,
					data: {
						status
					}
				}).then(res => {
					if (res.code === 0) {
						this.list = res.data || []
					}
					// console.log(res);
				})
			},
			retry() {
				// console.log('retry');
				this.getList(this.currTab)
			},
			switchTab(index) {
				// this.currTab = index
				this.$pageTo({
					url:'/pages/mall/order',
					options:{
						tab:index
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
		position: relative;
	}

	.header {
		padding: 20px 0;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		overflow-x: scroll;
		position: fixed;
		width: 100%;
		z-index: 1;
		background-color: white;

		.tab {
			display: flex;
			justify-content: center;
			font-size: 15px;

			.bar {
				height: 3px;
				width: 28px;
				border-radius: 2px;
				background-color: $base-color;
				position: absolute;
				bottom: 0;
				opacity: 0;
				transition: .1s linear all;
			}
		}

		.tab:active {
			opacity: .5;
		}

	}

	.content {
		padding: 50px 15px 40px;

		.content-item {

			background-color: white;
			display: flex;
			flex-direction: column;
			border-radius: 4px;
			box-shadow: 0 0 2px #eeeeee;
			margin: 15px 0;
			overflow: hidden;
			padding: 20px 10px;

			.top {
				display: flex;
				align-items: center;

				image {
					width: 80px;
					height: 80px;
				}

				.right {
					width: calc(100% - 80px);
					padding: 10px;
				}

				.row {
					padding: 4px 0;
				}
			}

			.buttons {
				display: flex;
				justify-content: flex-end;
				padding-top: 20px;

				.button {
					border-radius: 20px;
					width: 100px;
					margin-left: 10px;
					height: 32px;
				}
			}

		}
	}

	.pay-type {
		background-color: white;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;

		.row {
			padding: 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;

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
</style>
