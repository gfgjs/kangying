<template>
	<view>
		<view class="header">
			<view class="buttons-box">
				<view class="item" v-for="(item,index) in tabs" :key="item" @click="clickTab(item,index)" :class="index==currIndex&&'item-checked'">{{item}}</view>
			</view>
		</view>
		<view class="header-place"></view>
		<view class="order-item" v-for="(item,index) in list" :key="index">
			<view class="item-row border-bottom title">{{formatDate(item.create_time)+' '+formatMinute(item.create_time)}}</view>
			<view class="item-row border-bottom">
				<view class="title">处方编号</view>
				<view class="right">{{item.id}}</view>
			</view>
			<view class="item-row border-bottom">
				<view class="title">患者姓名</view>
				<view class="right">{{item.user_name}}</view>
			</view>
			<view class="item-row buttons">
				<view class="title">其他</view>
				<view class="content">
					<view class="right" v-if="currIndex==0">
						<text class="pass" @click="sendGoods(item,index)">发货</text>
						<!-- <text class="dispass" @click="auditOrder(item,index,2)">驳回</text> -->
					</view>
					<radio-group class="right" v-else>
						<!-- <label @click="auditOrder(item,index,1)">
							<radio disabled :checked="item.check_status==1" /><text>通过</text>
						</label>
						<label @click="auditOrder(item,index,2)">
							<radio disabled :checked="item.check_status==2" /><text>驳回</text>
						</label> -->
					</radio-group>
					<view class="view-goods" @click="sendGoods(item,index)">查看订单</view>
					<view class="view-goods" @click="viewGoods(item,index)">查看药品</view>
				</view>

			</view>
		</view>
		<view class="no-data" v-if="!list.length">暂无订单</view>

		<uni-popup ref="viewPanel" class="view-panel">
			<scroll-view scroll-y class="content">
				<view class="item-content" v-for="(item,index) in viewItemList" :key="'med_'+index">
					<view class="left">
						<view class="name">{{item.m_name}}</view>
						<view class="bottom-row">
							<view class="norm">规格：{{item.spec}}</view>
						</view>
					</view>
					<view class="little-title" @click="previewImage([item.instructions])">查看说明</view>
					<!-- <uni-icons type="plus-filled" size="24" class="icon" @click="addMedToTemp(item)"></uni-icons> -->
				</view>
			</scroll-view>
		</uni-popup>

	</view>
</template>

<script>
	import {
		request_checkOrders,
		request_checkOrder,
		request_getWaitSendOrder,
		request_sendMedicineOrder,
		request_expressList,
		request_getOverOrder
	} from '../../common/https.js'
	import {
		formatDate,
		formatMinute
	} from '../../common/util.js'
	export default {
		data() {
			return {
				currIndex: 0,
				tabs: ['待发货', '已发货'],
				list: [],
				viewItemList: [],
				formatDate,
				formatMinute,
				page: 1,
				page_size: 10,
				expressList:[],
				orderStatus:0, // 未发货0 已发货1
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '发货审核'
			})
			this.clickTab({}, 0)
			
			request_expressList({uni}).then(res=>{
				if(res.code===0){
					this.expressList = res.data ||[]
				}
			})
		},
		onShow() {
			this.refresh()
		},
		onBackPress() {
			if (this.$refs.viewPanel && this.$refs.viewPanel.showPopup) {
				this.$refs.viewPanel.close()
				return true
			}
		},
		onPullDownRefresh() {
			this.refresh()
		},
		onReachBottom() {
			this.getList()
		},
		methods: {
			sendGoods(item){
				this.$pageTo({
					url:'/pages/doctor/send-goods',
					options:{...item}
				})
			},
			previewImage(urls) {
				uni.previewImage({
					urls
				})
			},
			viewGoods(item, index) {
				this.viewItemList = item.goods_info
				this.$refs.viewPanel.open()
			},
			auditOrder(item, index, status) {
				if (this.currIndex == 1) {
					return
				}
				uni.showModal({
					title: '审核提示',
					content: `你确定要 ${status==1?'通过':'驳回'} 此订单吗？`,
					success: e => {
						if (e.confirm) {
							request_checkOrder({
								uni,
								data: {
									order_id: item.id,
									check_status: status
								}
							}).then(res => {
								if (res.code == 0) {
									this.list.splice(index, 1)
									this.$api.msg(res.data)
								} else {
									this.$api.msg(res.err)
								}
							})
						}
					}
				})
			},
			clickTab(item, index) {
				this.currIndex = index
				this.refresh()
			},
			refresh() {
				this.list = []
				this.page = 1
				this.getList()
			},
			getList() {
				let fun = this.currIndex?request_getOverOrder:request_getWaitSendOrder
				fun({
					uni,
					data: {
						page: this.page,
						page_size: this.page_size
					}
				}).then(res => {
					if (res.data && res.data.length) {
						this.page = this.page + 1
						this.list = this.list.concat(res.data)
					} else {
						this.$api.msg('没有更多订单')
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: $base-background-color;
	}

	.header-place {
		height: 64px;
	}

	.header {
		position: fixed;
		width: 100%;
		padding: 10px 0;
		height: 64px;
		background-color: $base-color;

		.buttons-box {
			display: flex;
			height: 44px;
			// width: 50%;
			border: 1px solid white;
			border-radius: 4px;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			.item {
				width: 30vw;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 16px;
				color: white;
				transition: all linear .1s;
				// border: 1px solid white;
			}

			.item-checked {
				color: $base-color;
				background-color: white;
			}
		}
	}

	.order-item {
		background-color: white;
		padding: 0 20px;
		font-size: 14px;
		color: #646464;
		margin-top: 10px;
		border-bottom: 1px solid #f5f5f5;

		.title {
			font-size: 14px;
			color: #000000;
			min-width: 4rem;
		}

		.item-row {
			display: flex;
			height: 54px;
			align-items: center;

			.right {
				margin-left: 10px;
				display: flex;
				align-items: center;
				font-size: 16px;

				label {
					margin-right: 10px;
					display: flex;
					align-items: center;
				}

				.pass,
				.dispass {
					padding: 10px 10px 10px 0;
				}

				.pass {
					// background:rgba(235,239,253,1);
					// border-radius:19px;
					color: #4EA6FF;
				}

				.dispass {
					// background:rgba(253,245,241,1);
					// border-radius:19px;
					color: #FF5D69;
					margin-left: 40px;
				}
			}
		}

		.buttons {
			.content {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.view-goods {
					color: $base-color;
					font-size: 16px;
				}
			}
		}

		.border-bottom {
			border-bottom: solid 1px #FBFBFB;
		}
	}

	.view-panel {
		.content {
			height: 80vh;
			width: 90vw;
			background-color: white;
			border-radius: 4px;
			overflow: hidden;


			.little-title {
				color: $base-color;
				font-size: 16px;
			}

			.item-content {
				padding: 10px 10px;
				font-size: 14px;
				height: 70px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #e5e5e5;

				.left {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					height: 100%;

					.name {
						width: 55vw;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					.bottom-row {
						display: flex;
						justify-content: space-between;
					}
				}

				.icon {
					color: $base-color !important;
				}
			}

			.item-content:first-of-type {
				border-top: 1px solid #e5e5e5;
			}

			.item-content:last-of-type {
				// border: none;
			}
		}

	}
</style>
