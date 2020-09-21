<!-- 地址管理 -->
<template>
	<view>
		<radio-group>
			<view class="address-item" v-for="(item,index) in addressList" :key='index' @click="chooseAddress(item,index)">
				<view class="row title" style="padding-bottom: 10px;" v-if="isFromOrder">
					使用此地址 <uni-icons type="arrowright"></uni-icons>
				</view>
				<view class="row">
					<view>{{item.user_name}}</view>
					<view>{{item.mobile}}</view>
				</view>
				<view class="row little-title address-details">
					{{item.full_path}}
				</view>
				<view class="line"></view>
				<view class="buttons">
					<radio :checked="!!item.is_default" @click.stop="switchDefaultAddress(item,index)">设为默认地址</radio>
					<view class="right">
						<view @click.stop="toEdit(item,index)">
							<uni-icons type="compose" size="22"></uni-icons>
							编辑
						</view>
						<view @click.stop="delAddress(item,index)">
							<uni-icons type="trash" size="22"></uni-icons>
							删除
						</view>
					</view>
				</view>
			</view>
		</radio-group>
		<view v-if="!addressList.length" class="no-data" style="padding: 30px;text-align: center;font-size: 16px;" @click="toEdit">暂无地址，请先添加</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="next">
			<view class="button button-cancel" @click="toEdit">新增</view>
		</view>
	</view>
</template>

<script>
	import {
		request_getAddressList,
		request_editAddress,
		request_delAddress
	} from '../../common/https.js'
	export default {
		data() {
			return {
				addressList: [],
				isFromOrder:false
			};
		},
		onLoad(e){
			if(e.from==='create-order'){
				this.isFromOrder = true
			}
		},
		onShow() {
			request_getAddressList({
				uni
			}).then(res => {
				if (res.code === 0) {
					if (res.data.length) {
						this.addressList = res.data
					} else {
						uni.showModal({
							content: '暂无地址，是否前往添加？',
							success: e => {
								if (e.confirm) {
									this.toEdit()
								}
							}
						})
					}
				} else {
					this.$api.msg(res.err)
				}
			})
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 500)
		},
		methods: {
			chooseAddress(item){
				getApp().globalData.tempOrderAddress = item
				if(this.isFromOrder){
					uni.navigateBack()
				}
			},
			nextStep(){
				uni.navigateBack()
			},
			switchDefaultAddress(address = {}, index) {
				if (address.is_default) {
					return
				}
				address.is_default = 1
				this.$set(this.addressList, index, address)
				request_editAddress({
					uni,
					data: address
				}).then(res => {
					this.$api.msg(res.data)
				})
			},
			delAddress(address,index){
				uni.showModal({
					content:'确认删除该地址？',
					success:e=>{
						if(e.confirm){
							request_delAddress({
								uni,data:{id:address.id}
							}).then(res=>{
								if(res.code===0){
									this.addressList.splice(index,1)
								}
								this.$api.msg(res.data||res.err)
							})
						}
					}
				})
			},
			toEdit(item = {}) {
				this.$pageTo({
					url: '/pages/mine/edit-address?address=' + JSON.stringify(item)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: $page-color-base;
		padding-bottom: 76px;
	}

	.address-item {
		width: 94vw;
		background-color: white;
		border-radius: 4px;
		margin: 20px auto;
		padding: 14px 0;
		box-shadow: 0 0 2px #eeeeee;

		.row {
			display: flex;
			justify-content: space-between;
			padding: 4px 0;
			padding: 0 14px;
		}

		.address-details {
			padding-top: 14px;
		}

		.line {
			width: 100%;
			height: 1px;
			background-color: #fcfcfc;
			margin: 12px 0;
		}

		.buttons {
			display: flex;
			justify-content: space-between;
			font-size: 15px;
			padding: 0 14px 0;

			view {
				display: flex;
				align-items: center;
			}

			.right {
				display: flex;

				view {
					margin-left: 20px;
				}
			}
		}
	}

	.next {
		// border-radius: 20px;
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 15px 0;
		background-color: white;
		// left: 50%;
		// transform: translateX(-50%);
		display: flex;
		justify-content: center;

		.button {
			margin: 0 10px;
		}
	}
</style>
