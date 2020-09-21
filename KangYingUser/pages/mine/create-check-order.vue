<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="title">
					<view class="price" :style="userName&&'opacity:0;'">*</view>姓名
				</view>
				<input type="text" placeholder="请填写您的姓名" v-model="userName">
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="(date&&time)&&'opacity:0;'">*</view>选择时间
				</view>
				<picker mode="date" @change="dateChange">
					<view class="picker">
						<view class="little-title" :style="date&&'font-size:16px;color:inherit;'">{{date||'请选择预约日期'}}</view>
						<uni-icons type="arrowdown"></uni-icons>
					</view>
				</picker>
				<picker mode="time" @change="timeChange">
					<view class="picker">
						<view class="little-title" :style="time&&'font-size:16px;color:inherit;'">{{time||'请选择预约时间'}}</view>
						<uni-icons type="arrowdown"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="row mobile-row">
				<view class="title">
					<view class="price" :style="mobile&&'opacity:0;'">*</view>联系电话
				</view>
				<view class="mobile-row">
					<input type="text" placeholder="请填写预约人联系电话" v-model="mobile">
					<!-- <view class="get-code" @click="getVerifyCode">{{countDown?(countDown+' 秒后再次获取'):'获取验证码'}}</view> -->
				</view>
			</view>
			<view class="row">
				<view class="title">
					<view class="price" :style="idcard&&'opacity:0;'">*</view>身份证号
				</view>
				<input type="idcard" placeholder="请填写预约人身份证号" v-model="idcard">
			</view>
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
			<view class="button register" @click="submit">
				确认预约
			</view>
		</view>

	</view>
</template>

<script>
	import {
		request_payPexam
	} from '../../common/https.js'
	export default {
		data() {
			return {
				userName: '',
				date: '',
				time: '',
				mobile: '',
				idcard: '',
				payType: 1,
				price: '',
				id: ''
			}
		},
		onLoad(e) {
			this.id = e.id
			this.price = e.price
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		methods: {
			dateChange(e) {
				this.date = e.detail.value
			},
			timeChange(e) {
				this.time = e.detail.value
			},
			submit() {
				uni.showModal({
					title: '付费体检提示',
					content: `是否支付体检费用 ￥${this.price} ？`,
					success: e => {
						if (e.confirm) {
							request_payPexam({
								uni,
								data: {
									id: this.id,
									user_name: this.userName,
									id_card: this.idcard,
									mobile: this.mobile,
									appoint_time: this.date + ' ' + this.time,
									pay_type: this.payType
								}
							}).then(res => {
								if (res.code === 0) {
									uni.requestPayment({
										provider: res.data.provider,
										orderInfo: res.data.orderInfo,
										success: (res) => {
											this.$api.msg('支付成功')
											this.$pageTo({
												url: '/pages/mall/order'
											})
											console.log('success:' + (res));
										},
										fail: (err) => {
											this.$api.msg('支付失败')
											console.log('fail:' + (err));
										}
									})
								} else {
									this.$api.msg(res.err)
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: white;
		border-radius: 4px;
		width: 100%;
		margin: 0 auto;
		padding: 15px 0;

		.row {
			.title {
				font-size: 16px;
				display: flex;
			}

			border-bottom: rgba(251, 251, 251, 1) 1px solid;
			padding: 20px 20px 30px;

			input,
			.picker,
			.mobile-row {
				height: 50px;
				padding-left: 10px;
				padding-top: 25px;
			}

			.picker,
			.mobile-row {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.mobile-row {
				input {
					height: auto;
					padding: 0;
				}

				font-size: 16px;

				.get-code {
					color: $base-color;
					min-width: 50%;

					display: flex;
					align-items: center;
					justify-content: flex-end;
				}

				.get-code:active {
					opacity: .6;

				}
			}
		}

		.register {
			border-radius: 20px;
			margin: 30px auto;
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
</style>
