<template>
	<view>
		<view class="search-box">
			<view class="input-box">
				<uni-icons type="search" size="22" color="#C9C9C9"></uni-icons>
				<input type="text" value="" placeholder="搜索药品" v-model="searchText" />
				<!-- <uni-icons type="mic-filled" size="22" color="#C9C9C9"></uni-icons> -->
			</view>
		</view>
		<scroll-view scroll-y="true" class="scroll-left">
			<view v-for="(item,index) in firstList" :key="index" class="item " :class="currIndex==index&&'item-checked'" @click="clickFirst(item,index)">
				<view class="text">{{item.cate_name}}</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="scroll-right">
			<view class="item-content" v-for="(item,index) in secondList" :key="'med_'+index">
				<view class="left">
					<view class="name">{{item.m_name}}</view>
					<view class="bottom-row">
						<view class="norm">规格：{{item.spec}}</view>
						<view class="little-title" @click="previewImage([item.instructions])">查看说明</view>
					</view>
				</view>
				<uni-icons type="plus-filled" size="24" class="icon" @click="addMedToTemp(item)"></uni-icons>
			</view>
			<view class="no-data" v-if="!secondList.length">暂无数据</view>
		</scroll-view>
		<transition name="slide-fade">
			<view class="search-list" v-if="searchText">
				<view class="item-content" v-for="(item,index) in searchList" :key="'search_'+index">
					<view class="left">
						<view class="name">{{item.m_name}}</view>
						<view class="bottom-row">
							<view class="norm">规格：{{item.spec}}</view>
							<view class="little-title" @click="previewImage([item.instructions])">查看说明</view>
						</view>
					</view>
					<uni-icons type="plus-filled" size="24" class="icon" @click="addMedToTemp(item)"></uni-icons>
				</view>
			</view>
		</transition>
	</view>
</template>

<script>
	import {
		request_medCates,
		request_medList
	} from '../../common/https.js'
	export default {
		data() {
			return {
				firstList: [],
				secondList: [],
				currIndex: 0,
				searchText: '',
				record_id: '',
				searchList: []
			};
		},
		onLoad(e) {
			this.record_id = e.record_id
			request_medCates({
				uni
			}).then(res => {
				if(res.code === 0){
					this.firstList = res.data
					this.clickFirst(res.data[0], 0)
				}
			})
		},
		watch: {
			searchText() {
				this.search()
			}
		},
		onBackPress() {
			if (this.searchText) {
				this.searchText = ''
				return true
			}
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if(e.index === 0){
				this.searchText = ''
				uni.navigateBack()
			}
		},
		methods: {
			clickFirst(item, index) {
				this.currIndex = index
				request_medList({
					uni,
					data: {
						keyword: '',
						m_cate: item.id,
						page: 1,
						page_size: 100
					}
				}).then(res => {
					if(res.code === 0){
						this.secondList = res.data
					}
				})
			},
			addMedToTemp(item) {
				let obj = getApp().globalData.tempMedicineList[this.record_id]
				obj = obj || {} // 一个病历（record_id）的药品清单
				let med = obj[item.id] // 清单中某种药品
				if (med) {
					med.number = med.number + 1 // 存在则+1
				} else {
					med = item
					med.number = 1
				}
				med.guide = med.guide || ''
				obj[item.id] = med

				getApp().globalData.tempMedicineList[this.record_id] = obj
				this.$api.msg('添加成功！', 1000)
			},
			previewImage(urls) {
				uni.previewImage({
					urls
				})
			},
			search() {
				request_medList({
					uni,
					data: {
						keyword: this.searchText,
						// m_cate: item.id,
						page: 1,
						page_size: 100
					}
				}).then(res => {
					if(res.code === 0){
						this.searchList = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-box {
		position: fixed;
		width: 100%;
		padding: 0 20px;
		height: 80px;
		display: flex;
		align-items: center;
		background-color: $base-color;
		box-shadow: 0px 8px 21px 0px rgba(94, 182, 170, 0.2);
		z-index: 1;

		.input-box {
			width: 100%;
			height: 44px;
			border-radius: 25px;
			background-color: white;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 10px;

			input {
				width: 100%;
				padding-left: 10px;
			}
		}
	}

	.scroll-left,
	.scroll-right {}

	.scroll-left {
		height: 100vh;
		padding-top: 80px;
		width: 30%;
		float: left;
		background-color: #f6fafd;

		.item {
			height: 50px;
			width: 100%;
			padding: 0 12px;
			display: flex;
			align-items: center;
			transition: all .1s linear;

			.text {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 14px;
				color: #2C2B2B;
			}
		}

		.item:active {
			opacity: .7;
		}

		.item-checked {
			background-color: white;
			position: relative;
		}

		.item-checked:after {
			content: '';
			width: 4px;
			height: 20px;
			background-color: $base-color;
			position: absolute;
			left: 0;
			margin-top: 1px;
			background: $base-color;
			box-shadow: 0px 8px 21px 0px rgba(36, 131, 253, 0.3);
			border-top-right-radius: 3px;
			border-bottom-right-radius: 3px;
		}
	}

	.scroll-right {
		height: 100vh;
		padding-top: 80px;
		width: 70%;
		float: right;


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

	.search-list {
		height: calc(100vh - 80px);
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: white;
		padding-top: 55px;

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
	}
</style>
