<template>
	<view>
		<!-- <view class="common-place"></view> -->
		<!-- <view class="common-place"></view> -->
		<view class="list">
			<view class="item" v-for="item in list">
				<view class="left">
					<view class="title">{{item.p_name}}</view>
					<view>居民身份证：{{item.id_card}}</view>
				</view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		request_patientList
	} from '../../common/https.js'
	export default {
		data() {
			return {
				list: [],
				page: 1
			};
		},
		onShow() {
			// request_patientList({
			// 	uni
			// })
			this.uploadData()
		},
		onReachBottom(e) {
			// this.uploadData()
		},
		onPullDownRefresh() {
			this.page = 1
			this.list = []
			this.uploadData()
		},
		methods: {
			uploadData() {
				request_patientList({
					uni,
					data: {
						page: this.page,
						page_size: 10
					}
				}).then(res => {
					uni.stopPullDownRefresh()
					if (res.code === 0) {
						if (res.data.length) {
							this.list = this.list.concat(res.data)
							this.page++
						} else {
							this.$api.msg('没有更多数据')
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		// padding: 30px 20px;
	}

	.common-place {
		background: rgba(247, 251, 255, 1);
	}

	.list {
		padding: 0 20px;

		.item {
			padding: 10px 10px;
			border-bottom: 1px solid rgba(248, 245, 245, 1);
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			view {
				padding: 5px 0;
			}
		}

		.item:active {
			opacity: .6;
		}
	}
</style>
