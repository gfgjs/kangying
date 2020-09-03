<template>
	<view>
		<view class="header box-shadow">
			<view class="tab" v-for="(item,index) in tabs" :key='item' @click="switchTab(index)">
				<view class="">{{item}}</view>
				<view class="bar linear-background" :style="currTab==index&&'opacity:1'"></view>
			</view>
		</view>
		<!-- 占位符 -->
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>

		<view class="content">
			<mineCaseList @cardChange='cardChange' :list='caseList' v-if='currTab==0'></mineCaseList>
			<noData v-if='currTab==1'></noData>
			<view v-if='currTab==2'>
				<list class='med-list'>
					<!-- 注意事项: 不能使用 index 作为 key 的唯一标识 -->
					<cell class='med-cell' v-for="(item, index) in prescriptionList" :key="item.Record.id" @click='viewMedList(item)'>
						<view class="left">
							<view>患者姓名：{{item.Record.p_name}} {{formatDate(item.Record.create_time).slice(5,10)+' '+formatMinute(item.Record.create_time)}}</view>
							<view>处方医生：{{item.Record.d_name}} {{item.Record.dept}}</view>
						</view>
						<uni-icons type="arrowright"></uni-icons>
					</cell>
				</list>
			</view>
			<noData v-if='currTab==3'></noData>
		</view>
		
		<uni-popup ref="viewPanel" class="view-panel">
			<scroll-view scroll-y class="content">
				<view class="item-content" v-for="(item,index) in viewItemList"
				 :key="'med_'+index">
					<view class="left">
						<view class="name">{{item.GoodsInfo.m_name}}</view>
						<view class="bottom-row">
							<view class="norm">规格：{{item.GoodsInfo.spec}} 数量：{{item.GoodsNumber}}</view>
						</view>
						<view class="bottom-row">
							<view class="norm">医嘱：{{item.Guide}}</view>
						</view>
					</view>
					<view class="little-title" @click="previewImage([item.GoodsInfo.instructions])">查看说明</view>
					<!-- <uni-icons type="plus-filled" size="24" class="icon" @click="addMedToTemp(item)"></uni-icons> -->
				</view>
			</scroll-view>
		</uni-popup>
	</view>
</template>

<script>
	import mineCaseList from '../../components/mine-case-list.vue'
	import noData from '../../components/nodata.nvue'
	import {
		request_recordList,
		request_prescriptionList
	} from '../../common/https.js'
	import {formatDate,formatMinute}from '../../common/util.js'
	export default {
		components: {
			mineCaseList,
			noData
		},
		data() {
			return {
				tabs: ['我的病历', '我的挂号', '电子处方', '检查报告'],
				currTab: 0,
				caseList: [],
				currentCardId: '',
				prescriptionList:[],
				viewItemList:[],
				formatDate,formatMinute
			};
		},
		onPullDownRefresh() {
			// this.refresh()
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		onLoad(e) {
			// this.switchTab(e.tab || 0)
			this.currTab = e.tab
			// this.refresh()
			
			
			if(e.tab == 2){
				request_prescriptionList({
					uni
				}).then(res => {
					if(res.code===0){
						this.prescriptionList = res.data || []
					}
				})
			}
		},
		methods: {
			previewImage(urls) {
				uni.previewImage({
					urls
				})
			},
			viewMedList(item){
				this.viewItemList = item.Goods
				this.$refs.viewPanel.open()
			},
			cardChange(e) {
				// this.currentCardId = e
				// this.refresh()
			},
			refresh() {
				request_recordList({
					uni,
					card_id: this.currentCardId
				}).then(res => {
					this.caseList = res.data
				})
			},
			switchTab(index) {
				this.$pageTo({
					url:'/pages/doctor/case',
					options:{tab:index}
				})
				// this.currTab = index
			}
		}
	}
</script>

<style lang="scss">
	page {
		// background-color: #f6f6f6;
		position: relative;
	}

	.common-place {
		background-color: rgba(247, 251, 255, 1);
	}

	.header {
		padding: 0 20px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		left: 0;
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
		// padding: 50px 15px 40px;
		width: 100%;
		.med-list{
			width: 100%;
			.med-cell{
				border-bottom: 1px solid #eeeeee;
				width: 100%;
				margin: 0 auto;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 60px;
				padding:5px 20px;
				.left{
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
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
				
				
				.little-title{
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
