<template>
	<view>
		<view class="header linear-background">
			<image :src="info.avatar" style="margin-left: 10px;"></image>
			<view class="message">
				<view class="row name">
					<view class="title">{{info.user_name}}</view>
					<view class="little-title">{{info.level_name}}</view>
					<view class="tag">{{info.work_status?'在线':'离线'}}</view>
				</view>
				<view class="row address">
					<view>
						{{info.hospital_name}}丨{{info.dept_name}}
						<uni-icons type="checkbox-filled"></uni-icons>
					</view>
				</view>
				<view class="message-count">
					<view class="count">
						<view class="title">{{info.reply_num}}</view>
						<view class="little-title">总回复</view>
					</view>
					<view class="count">
						<view class="title">{{info.work_year}}</view>
						<view class="little-title">从业年数</view>
					</view>
					<view class="count">
						<view class="title">￥{{info.fee}}</view>
						<view class="little-title">咨询价格</view>
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
			<view class="row" v-for="i in info.speciality" :key='i'>
				<view class="dot">
					<view class="dot-inner"></view>
				</view>
				<view class="text">{{i}}</view>
			</view>
			<view class="title major" v-if="info.desc">个人介绍</view>
			<view class="row" v-if="info.desc">
				<view class="dot">
					<view class="dot-inner"></view>
				</view>
				<view class="text">
					{{info.desc}}
				</view>
			</view>
		</view>
		<view class="button" @click="chat">
			在线问诊<text v-if="patientCard">(已选就诊卡：{{patientCard.p_name}})</text>
		</view>
		<uni-popup ref="payType">
			<radio-group class="pay-type">
				<label class="row" @click="pay(1)">
					<view class="left">
						<image src="../../static/imgs/alipay.png" mode=""></image>
						<view>支付宝支付</view>
					</view>
					<uni-icons type="arrowright"></uni-icons>
					<!-- <radio  checked=""  id="pay-ali"></radio> -->
				</label>
				<label class="row" @click="pay(2)">
					<view class="left">
						<image src="../../static/imgs/weixin.png" mode=""></image>
						<view>微信支付</view>
					</view>
					<uni-icons type="arrowright"></uni-icons>
					<!-- <radio id="pay-wx"></radio> -->
				</label>
			</radio-group>
		</uni-popup>
		<uni-popup ref="order">
			<view class="more-handle">
				<view class="row">
					<view class="left">
						查询到您有正在进行中的问诊，您可以：
					</view>
					<!-- <uni-icons type="arrowright"></uni-icons> -->
				</view>
				<view class="row" @click="createNewOrder">
					<view class="left">
						新建问诊
					</view>
					<uni-icons type="arrowright"></uni-icons>
				</view>
				<view class="row" @click="onOldOrder">
					<view class="left">
						继续问诊
					</view>
					<uni-icons type="arrowright"></uni-icons>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import {
		request_doctorInfo,
		request_recordAdd,
		request_recordLast
	} from '../../common/https.js'
	export default {
		data() {
			return {
				info: {},
				patientCard: null,
				doctor_id: null,

				payResult: false,
				order_no: '', //生成的订单号
				record_id: '', //生成的病历id
				oldOrder:null
			}
		},
		onLoad(e) {
			this.doctor_id = e.id
			request_doctorInfo({
				uni,
				data: {
					id: e.id
				}
			}).then(res => {
				this.info = res.data || {}
			})
			if (e.chatNow) {
				this.chat(null, e.im_username, e.price)
			}
		},
		onShow() {
			if(this.currentPatientCard){
                // 跳转聊天窗口
                this.$pageTo({
                    url:'/pages/doctor/chat-view',
                    options:{
                        userID:this.info.im_username
                    }
                })
			}
		},
        beforeDestroy(){
		  this.patientCard = null
        },
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		computed: {
			...mapGetters(['hasLogin',"currentPatientCard"])
		},
		methods: {
			onOldOrder(){
				// 跳转聊天窗口
				this.$refs.order.close()
				this.$pageTo({
					url: '/pages/doctor/chat-view',
					options: {
						im_username: this.oldOrder.d_im_name,
						record_id: this.oldOrder.id,
						d_name: this.oldOrder.d_name,
						d_avatar: this.oldOrder.d_avatar,
					}
				})
			},
			createNewOrder(){
				this.$refs.order.close()
				request_recordAdd({
					uni,
					data: {
						p_card_id: this.patientCard.id,
						doctor_id: this.doctor_id
					}
				}).then(res => {
					if (res.code === 0) {
						this.patientCard = null
						this.order_no = res.data.order_no
						this.record_id = res.data.record_id
						// 跳转聊天窗口
						console.log(this.info)
						this.$pageTo({
							url: '/pages/doctor/chat-view',
							options: {
								userID:this.info.im_username
							}
						})
					} else {
						this.$api.msg(res.err)
					}
				})
			},
			pay(type) {
				// 查询最近一次问诊是否结束
				request_recordLast({
					uni,
					data: {
						card_id: this.patientCard.id
					}
				}).then(res => {
					if (!res.data) {
						this.createNewOrder()
					} else {
						this.oldOrder = res.data
						this.$refs.order.open()
					}
				})
			},
			chat() {
				if (this.hasLogin) {
                    uni.showModal({
                        title:'提示',
                        content:'需要先选择病历卡，是否继续',
                        confirmText:'前往',
                        success:(e)=> {
                            if(e.confirm){
                                this.$pageTo({
                                    url: '/pages/card/list',
                                    options: {
                                        pageFrom: 'doctor'
                                    }
                                })
                            }
                        }
                    })
				} else {
					this.$pageTo({
						needLogin: true,
						lastPage: {
							back: true
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: $page-color-base;
	}

	.more-handle {
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

	.header {
		display: flex;
		justify-content: space-around;
		background-color: $base-color;
		// background-image: linear-gradient(114deg, #1e8bff 0%, #1179F3 74%);

		border-bottom-left-radius: 12px;
		padding: 20px;
		padding-top: 44px;
		color: white;

		image {
			width: 60px;
			height: 60px;

		}

		.message {
			width: calc(100% - 60px);
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
			view {
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

	.button {
		font-size: 16px;
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 60px;
		border-radius: 0;
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
