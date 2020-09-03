<template>
	<view>
		<view class="header" v-if="recordInfo.user_info">
			<view class="nav-place"></view>
			<view class="message">
				<image :src="recordInfo.user_info.avatar" mode=""></image>
				<view class="middle">
					<view class="title">{{recordInfo.user_info.user_name}}</view>
					<view class="little-title">{{recordInfo.user_info.gender}}</view>
				</view>
				<!-- <view class="set-tag">设置标签</view> -->
			</view>
		</view>
		<view class="message-box" v-if="recordInfo.patientInfo">
			<view class="row-title">
				<view>患者资料</view>
				<!-- <view class="right">全部资料
					<uni-icons type="arrowdown"></uni-icons>
				</view> -->
			</view>
			<view class="row">
				<view class="dot"></view>
				<view class="text-row">患者姓名：{{recordInfo.patientInfo.p_name}} | {{recordInfo.gender}} | {{recordInfo.age}}岁</view>
			</view>
			<view class="row">
				<view class="dot"></view>
				<view class="text-row">电话：{{recordInfo.patientInfo.mobile}}</view>
			</view>
			<view class="row">
				<view class="dot"></view>
				<view class="text-row">疾病分类：{{recordInfo.now_record.diagnosis||'暂无'}}</view>
			</view>
			<!-- <view class="row">
				<view class="dot"></view>
				<view class="text-row">住址：北京市海淀区和祥胡同16号</view>
			</view> -->
		</view>
		<view class="message-box case-box" v-if="recordInfo.record_list">
			<view class="row-title">
				<view>电子病历</view>
				<!-- <view class="right">全部档案
					<uni-icons type="arrowdown"></uni-icons>
				</view> -->
			</view>
			<view class="case" v-for="item in recordInfo.record_list" :key='item.id'>
				<view class="row time">{{formatDate(item.create_time)}} {{formatMinute(item.create_time)}}</view>
				<view class="row">
					<view class="dot"></view>
					<view class="text-row">诊断医生：{{item.d_name}}</view>
				</view>
				<view class="row">
					<view class="dot"></view>
					<view class="text-row">诊断结果：{{item.diagnosis || '暂无'}}</view>
				</view>
				<view class="row">
					<view class="dot"></view>
					<view class="text-row">就诊科室：{{item.dept}}</view>
				</view>
			</view>
		</view>
		<view class="button chat-button" @click="toChat">患者交流</view>
	</view>
</template>

<script>
	import {
		request_recordInfo
	} from '../../common/https.js'
	import {
		formatDate,
		formatMinute
	} from '../../common/util.js'
	export default {
		data() {
			return {
				recordInfo: {},
				formatDate,
				formatMinute
			};
		},
		onLoad(e) {
			request_recordInfo({
				uni,
				data: {
					id: e.record_id
				}
			}).then(res => {
				if (res.code === 0) {
					this.recordInfo = res.data
				}
			})
		},
		methods: {
			toChat() {
				uni.navigateBack({

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: $base-background-color;
	}

	.header {
		width: 100%;
		height: 140px;
		background: url(../../static/doctor/patient-header.png) no-repeat;
		background-size: 100% 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);

		.message {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 44px;

			image {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				border: 1px solid white;
			}

			.middle,
			.set-tag {
				margin-left: 20px;
			}

			.title {
				color: white;
			}

			.little-title {
				color: #EAF4FF;
				margin-top: 10px;
			}

			.set-tag {
				background-color: #66A098;
				padding: 6px 12px;
				border-radius: 40px;
				font-size: 14px;
				color: #ffffff;
			}
		}

	}

	.message-box {
		width: 92%;
		background-color: white;
		margin: 20px auto;
		border-radius: 4px;
		position: relative;
		box-shadow: 0 0 8px #eeeeee;
		padding-bottom: 10px;

		.row-title {
			display: flex;
			justify-content: space-between;

			.right {
				color: #565656;
				font-size: 14px;
			}
		}

		.row {
			display: flex;
			align-items: center;
			height: 44px;
			padding: 0 20px;

			.dot {
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: $base-color;
				margin-right: 10px;
				margin-top: 2px;
			}

			.text-row {
				font-size: 14px;
				color: #2E2E2E;

			}
		}

		.case {
			width: 92%;
			background-color: #F8F8F8;
			margin: 0 auto 20px;

			.time {
				font-size: 14px;
				color: #2d2d2d;
			}
		}

	}

	.chat-button {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 54px;
	}

	.case-box {
		margin-bottom: 64px;
	}
</style>
