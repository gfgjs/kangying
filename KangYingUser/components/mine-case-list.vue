<template>

	<view class="wrap choose">
		<view class="" v-if="0">
			<view class="row row-title">就诊人信息</view>
			<radio-group>
				<label v-for="i in 10" :key='i' class="row person">
					<view>患者姓名：张大伟</view>
					<radio></radio>
				</label>
			</radio-group>
			<view class="button">
				下一步，身份验证
			</view>
		</view>
		<view class="content ">
			<view class="row row-title">
				就诊人信息：<picker class="left" :range="cardListNames" @change="cardChange">
					<view>{{currentCard.p_name || '全部'}}
						<uni-icons type="arrowdown"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="no-data" v-if="!caseList.length">
				暂无数据
			</view>
			<view class="item" v-for="(item,index) in caseList" :key='index'>
				<view class="left">
					<view class="circle box-shadow">
						<view class="dot"></view>
					</view>
					<!-- <view class="v-line"></view> -->
				</view>
				<view class="right box-shadow">
					<view class="row title">{{formatDate(item.create_time)}} {{item.dept}}</view>
					<view class="row little-title">诊断：{{item.diagnosis|| '暂无诊断信息'}}</view>
					<view class="row little-title">
						检查报告：
						<view class="buttons">
							<view class="no-data" style="padding: 0 20px;">暂无数据</view>
							<!-- <view class="button">血常规报告</view> -->
							<!-- <view class="button">尿常规报告</view> -->
						</view>
					</view>
					<view class="row little-title">
						电子处方：
						<view class="buttons">
							<view class="button" @click="viewMed(item)">查看</view>
						</view>
					</view>
					<view class="row little-title">
						{{item.d_name}}大夫 创建
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="viewPanel" class="view-panel">
			<scroll-view scroll-y class="content">
				<view class="item-content" v-for="(item,index) in viewItemList" :key="'med_'+index">
					<view class="left">
						<view class="name">{{item.GoodsInfo.m_name}}</view>
						<view class="bottom-row">
							<view class="norm">规格：{{item.GoodsInfo.spec}} 数量：{{item.GoodsNumber}}</view>
						</view>
						<view class="bottom-row">
							<view class="norm">用药说明：{{item.Guide}}</view>
						</view>
					</view>
					<view class="little-title" @click="previewImage([item.GoodsInfo.instructions])">查看说明</view>
					<!-- <uni-icons type="plus-filled" size="24" class="icon" @click="addMedToTemp(item)"></uni-icons> -->
				</view>
			</scroll-view>
			<!-- <uni-icons type="close" color="white"></uni-icons> -->
		</uni-popup>
	</view>

</template>

<script>
	import {
		formatDate,
		formatMinute
	} from '@/common/util.js'
	import {
		request_patientList,
		request_recordList
	} from '../common/https.js'
	export default {
		data() {
			return {
				formatDate,
				formatMinute,
				cardList: [],
				cardListNames: [],
				currentCard: {},
				caseList: [],
				viewItemList: []
			};
		},

		props: ['list'],
		mounted() {
			request_patientList({
				uni
			}).then(res => {
				if (res.code === 0) {
					this.cardListNames = res.data.map(item => {
						return item.p_name
					})
					this.cardList = res.data
					// this.currentCard = this.cardList[0]
					this.getCaseList()
				}
			})
		},
		// onBackPress() {
		// 	if (this.$refs.viewPanel&&this.$refs.viewPanel.showPopup) {
		// 		this.$refs.viewPanel.close()
		// 		return true
		// 	}
		// },
		methods: {
			previewImage(urls) {
				uni.previewImage({
					urls
				})
			},
			getCaseList() {
				request_recordList({
					uni,
					data: {
						card_id: this.currentCard.id
					}
				}).then(res => {
					this.caseList = res.data
				})
			},
			cardChange(e) {
				this.currentCard = this.cardList[e.detail.value]
				this.getCaseList()
			},
			viewMed(item) {
			    console.log(item)
				this.$pageTo({
					url:'/pages/doctor/prescript',
					options:{id:item.Id,PayStatus:item.PayStatus}
				})
				return
				if (item.goods) {
					this.viewItemList = JSON.parse(item.goods)
					console.log(JSON.parse(item.goods));
					this.$refs.viewPanel.open()
				} else {
					this.$api.msg('暂无处方')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		height: 100%;
		background-color: white;
		padding-bottom: 96px;

		.choose {
			.row {
				border-bottom: solid 1px #F8F5F5;
			}

			.person {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10px 20px;
				font-size: 16px;

				radio {
					margin: 20px;
				}

			}

			.button {
				width: 200px;
				position: fixed;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 18px;
			}

		}

		.content {
			.row {
				display: flex;
				justify-content: space-between;
			}

			.row-title {
				.right {
					font-weight: 400;
				}
			}

			.item {
				display: flex;
				justify-content: space-between;
				margin-top: 30px;
				border-radius: 4px;

				.left {
					width: 10%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-start;

					.circle {
						width: 16px;
						height: 16px;
						background: rgba(243, 243, 243, .8);
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-top: 10px;

						.dot {
							width: 7px;
							height: 7px;
							background: $base-color;
							border-radius: 50%;
						}
					}

					.v-line {
						width: 1px;
						height: 90%;
						background: rgba(243, 243, 243, 1);
					}

				}

				.right {
					width: 90%;
					padding: 0 20px;
					margin-right: 10px;

					.title {
						font-weight: 600;
						color: #444444;
						font-size: 15px;
					}

					.little-title {
						color: #2A2A2A;
					}

					.row {
						padding: 10px 0;
						width: 100%;
						display: flex;
						justify-content: space-between;
						width: 100%;
						align-items: center;
					}
				}

				.box-shadow {
					box-shadow: 0 0 12px #efefef;
				}

				.buttons {
					display: flex;

					.button {
						width: 100px;
						border-radius: 18px;
						margin-left: 10px;
					}
				}
			}
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
