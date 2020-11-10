<template>
	<view>
		<view class="list">
			<view class="item" v-for="(item,index) in list" @click="selectCard(item)" :key="index">
				<view class="left">
					<view class="title">{{item.p_name}}</view>
					<view>居民身份证：{{item.id_card}}</view>
				</view>
				<view v-if="pageFrom==='doctor'">使用此病历</view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
		</view>
		<view class="common-place" style="height: 65px;background: none;"></view>
		<view class="button" @click="$pageTo({url:'/pages/card/create'})">新增病历卡</view>
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
				page: 1,
				pageFrom: ''
			};
		},
		onLoad(e) {
			this.pageFrom = e.pageFrom
		},
		onShow() {
			// request_patientList({
			// 	uni
			// })
			this.page = 1
			this.list = []
			this.uploadData()
		},
		onReachBottom(e) {
			// this.uploadData()
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		onBackPress(options) {
			if (options.from === 'navigateBack') {
				return false;
			}
			
			uni.navigateBack({ //uni.navigateTo跳转的返回，默认1为返回上一级
				delta: 1
			})

			return true
		},
		methods: {
			selectCard(e){
				if(this.pageFrom==='doctor'){
					let pages = getCurrentPages(); //获取所有页面栈实例列表
					let nowPage = pages[pages.length - 1]; //当前页页面实例
					let prevPage = pages[pages.length - 2]; //上一页页面实例
					
					prevPage.$vm.patientCard = e; 
					uni.navigateBack()
				}
			},
			uploadData() {
				this.list = []
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

	.button {
		height: 55px;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		border-radius: 0;
		font-size: 18px;
	}
</style>
