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
			<image src="../../static/doctor/color-bar.png"></image>
		</view>
		<view class="row-title express">
			订单信息
		</view>
		<view class="row-message">
			<view class="title">订单编号</view>
			<input type="text" disabled :value="info.id" />
		</view>
		<view class="row-message">
			<view class="title">支付单号</view>
			<input type="text" disabled :value="info.order_no" />
		</view>
		<view class="row-message">
			<view class="title">下单时间</view>
			<input type="text" disabled :value="`${info.create_time.slice(0,19).replace('T',' ')}`" />
		</view>
		<view class="row-message">
			<view class="title">支付时间</view>
			<input type="text" disabled :value="`${info.pay_time.slice(0,19).replace('T',' ')}`" />
		</view>
		
		<view class="row-title express-no">
			物流单号
		</view>
		<view class="row-content">
			<input type="text" placeholder="请输入物流单号" v-model="info.express_no">
		</view>
		<view class="row-title express">
			物流公司
		</view>
		<!-- :range='expressList.map(item=>item.express_name)' -->
		<view class="row-content">
			<picker-view :value="[currExpress]" style="height: 100px;" @change="pickerChange">
				<picker-view-column>
					<view v-for="(item,index) in expressList">{{item.express_name}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<view class="bottom-button">
			<view class="button" @click="confirmSend()">
				确认{{info.express_no?'修改':'发货'}}
			</view>
		</view>
	</view>
</template>

<script>
	import {
		request_expressList,
		request_sendMedicineOrder
	} from '../../common/https.js'
	import {
		formatDate,
		formatMinute
	} from '../../common/util.js'
	export default {
		data() {
			return {
				expressList: [],
				express: '',
				info: {},
				formatDate,
				formatMinute,
				currExpress:0
			};
		},
		onLoad(e) {
			this.info = e
			request_expressList({
				uni
			}).then(res => {
				if (res.code === 0) {
					this.expressList = res.data || []
					if (this.expressList[0]) {
						this.info.express = this.expressList[0].id
						this.currExpress = 0
					}
					this.expressList.forEach((item,index)=>{
						if(item.express_name == this.info.express_company){
							this.currExpress = index
							this.info.express = item.id
						}
					})
				}
			})
		},
		methods: {
			pickerChange(e) {
				this.info.express = this.expressList[e.detail.value[0]].id
			},
			confirmSend() {
				request_sendMedicineOrder({
					uni,
					data: {
						order_id:this.info.id,
						express:this.info.express,
						express_no:this.info.express_no
					}
				}).then(res=>{
					if(res.code === 0){
						this.$api.msg(res.data)
						setTimeout(()=>{
							uni.navigateBack()
						},800)
					}else{
						this.$api.msg(res.err)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.bottom-button {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100px;
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

	.row-content {
		padding: 0 20px;
		font-size: 16px;

		.uni-picker-view-content uni-view {
			// background-color: $base-color;
			align-items: center;
			justify-content: center;
			display: flex;
		}

		input {
			box-sizing: content-box;
			border-bottom: 1px solid $base-color;
			padding: 0 0 10px 0;
		}
	}

	.row-message {
		padding: 10px 20px;
		display: flex;
		align-items: center;

		.title {
			color: #555555;
		}

		input {
			flex: 1
		}

		.title:after {
			content: '：'
		}
	}
</style>
