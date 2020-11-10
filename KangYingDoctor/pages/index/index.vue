<template>
	<view>
		<view class="header">
			<image class="" src="../../static/index/top.png" @click="toPage('../login/register')" mode=""></image>
		</view>
		<view class="menus-box">
			<view class="row-title">
				医生诊疗室
				<label for="" style="display: flex;align-items: center;">
					<switch class="" color="#5EB6AA" :checked="!!patientCount.work_status" @change="changeWordStatus"></switch>
					<view style="margin-left: 6px;">{{workTextStatus?'出诊':'休息'}}</view>
				</label>
			</view>
			<view class="row">
				<view class="row-item">
					<view class="number">{{patientCount.new_patient}}</view>
					<view class="name">新患者</view>
				</view>
				<view class="row-item">
					<view class="number">{{patientCount.treat_ing}}</view>
					<view class="name">问诊中</view>
				</view>
				<view class="row-item">
					<view class="number">{{patientCount.treat_over}}</view>
					<view class="name">已完结</view>
				</view>
			</view>
			<view class="row">
				<view class="row-item">
					<view class="number" @click="toPage('/pages/doctor/pharmacist-order')">{{patientCount.wait_check_medicine}}</view>
					<view class="name">医嘱处方</view>
				</view>
				<view class="row-item">
					<view class="number" @click="toPage('/pages/doctor/test-order')">{{patientCount.test}}</view>
					<view class="name">体检预约</view>
				</view>
				<view class="row-item" @click="toPage('/pages/doctor/doctor-room','all')">
					<view class="number">{{patientCount.inspect}}</view>
					<view class="name">全部患者</view>
				</view>
			</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="menus-box">
			<view class="row-title">服务中心</view>
			<view class="row" style="border: none;">
				<view class="row-item" @click="switchTab('/pages/index/patient')">
					<image src="../../static/index/1.png" mode=""></image>
					<view class="name">服务台</view>
				</view>
				<view class="row-item" @click="toPage('/pages/doctor/test-order')">
					<image src="../../static/index/2.png" mode=""></image>
					<view class="name">体检管理</view>
				</view>
				<view class="row-item" @click="toPage('/pages/doctor/drug-audit')">
					<image src="../../static/index/3.png" mode=""></image>
					<view class="name">药房</view>
				</view>
				<view class="row-item"  @click="$pageTo({url:'/pages/doctor/telephone'})">
					<image src="../../static/index/4.png"></image>
					<view class="name">随访计划</view>
				</view>
			</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<!-- <view v-for="i in pages" @click="$pageTo({url:'/'+i.path})" style="padding: 10px;">{{i.path}}</view> -->
	</view>
</template>

<script>
	import {
		request_sendReSms,
		request_userInfo,
		request_version,
		request_imInit,
		request_patientData,request_changeWorkStatus
	} from '@/common/https.js'
	import {
		saveLoginMessage,
		readLoginMessage
	} from '@/common/util.js'
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import pages from '@/pages.json'
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				"pages": [],
				patientCount:{},
				workTextStatus:true
			}
		},
		onShow() {
			const lm = readLoginMessage(uni)
			// console.log(lm);
			if(lm.token){
				request_userInfo({
					uni,
					noLoading:true
				}).then(res=>{
					// console.log(res);
				})
				request_patientData({
					uni,
					noLoading:true
				}).then(res=>{
					if(res.code===0){
						this.patientCount = res.data
						this.workTextStatus = res.data.work_status
					}
				})
			}else{
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
		},
		methods: {
			switchTab(url){
				uni.switchTab({
					url
				})
			},
			changeWordStatus(e){
				this.workTextStatus = e.detail.value*1
				request_changeWorkStatus({uni,data:{work_status:e.detail.value*1}})
			},
			toPage(url) {
				uni.navigateTo({
					url
				})
			},
			
		}
	}
</script>

<style lang="scss">
	page {
		/* width: 100%; */
		background-color: $base-background-color;
	}

	.menus {
		background-color: white;
	}

	.header {
		image {
			width: 100%;
			height: 67.3vw;
		}
	}

	.menus-box {
		padding: 0 20px;

		.row-title {
			padding-left: 0;
		}

		// background-color: red;
		.row {
			border-bottom: 1px solid #F1F1F1;
			display: flex;
			justify-content: space-between;
			padding: 0 20px;

			.row-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 20px 0;

				image {
					width: 24px;
					height: 26px;
				}

				.number {
					font-size: 22px;
				}

				.name {
					color: #494949;
					font-size: 14px;
					margin-top: 6px;
				}

			}
		}

		.row:nth-of-type(3) {
			border: none;
		}
	}

	.row-title {
		display: flex;

		justify-content: space-between;
	}
</style>
