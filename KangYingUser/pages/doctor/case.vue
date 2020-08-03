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
			<mineCaseList :list='caseList' v-if='currTab==0'></mineCaseList>
			<noData v-if='currTab==1'></noData>
			<noData v-if='currTab==2'></noData>
			<noData v-if='currTab==3'></noData>
		</view>
	</view>
</template>

<script>
	import mineCaseList from '../../components/mine-case-list.vue'
	import noData from '../../components/nodata.nvue'
	import {request_recordList} from '../../common/https.js'
	export default {
		components: {
			mineCaseList,
			noData
		},
		data() {
			return {
				tabs: ['我的病历', '我的挂号', '电子处方', '检查报告'],
				currTab: 0,
				caseList:[]
			};
		},
		onLoad(e) {
			this.switchTab(e.tab)
			request_recordList({uni}).then(res=>{
				this.caseList = res.data
			})
		},
		methods: {
			switchTab(index) {
				this.currTab = index
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
	}
</style>
