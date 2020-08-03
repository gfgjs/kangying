<template>
	<view>
		<view class="wrap">
			<view class="row">
				<view class="title">收件人称呼</view>
				<view class="input-row">
					<input type="text" v-model="user_name" placeholder="请输入您的称呼">
					<!-- <radio-group>
						<radio>先生</radio>
						<radio>女士</radio>
					</radio-group> -->
				</view>
			</view>
			<view class="row">
				<view class="title">联系方式</view>
				<view class="input-row">
					<input type="text" v-model="mobile" placeholder="请输入您的联系方式">
				</view>
			</view>
			<view class="row">
				<view class="title">地址</view>
				<view class="input-row address-row">
					<input @click="openAddres" class="ellipsis" placeholder="点我选择地址" :value="pickerAddress.label" disabled>
					<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address>
				</view>
			</view>
			<view class="row">
				<view class="title">小区及门牌号</view>
				<view class="input-row">
					<input type="text" v-model="address" placeholder="请输入详细地址">
				</view>
			</view>
			<view class="row">
				<view class="title">设为默认</view>
				<view class="input-row" style="justify-content: flex-end;">
					<switch @change="isDefaultChange" :checked="!!is_default"></switch>
				</view>
			</view>
			<view class="row" style="display: flex;justify-content: center;">
				<view class="button" @click="saveAddress">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		request_getAreaList,
		request_addAddress,
		request_editAddress
	} from '../../common/https.js'
	import simpleAddress from '../../components/simple-address/simple-address.vue'
	export default {
		components: {
			simpleAddress
		},
		data() {
			return {
				user_name: '',
				mobile: '',
				address: '',
				is_default: false,
				cityPickerValueDefault: [0, 0, 0],
				pickerAddress: {},
				editMessage: {},
			};
		},
		onLoad(e) {
			if (e.address) {
				const address = JSON.parse(e.address)
				if (address.user_name) {
					this.editMessage = address
					this.user_name = address.user_name
					this.mobile = address.mobile
					this.address = address.address
					this.is_default = address.is_default
					setTimeout(() => {
						const index = this.$refs.simpleAddress.queryIndex([address.province, address.city, address.area], 'value')
						this.cityPickerValueDefault = index.index

						this.pickerAddress = {
							provinceCode: address.province,
							cityCode: address.city,
							areaCode: address.area,
							label: index.data.province.label + '-' + index.data.city.label + '-' + index.data.area.label
						}
					})
				}
			}
		},
		onShow() {
			// setTimeout(()=>this.openAddres3())
			// const res = (await this.getArea()) || {}
			// const array = res.data
			// console.log(array);
			// this.provinceList = array
			// this.areaList.push(array.map(item => item.id))
		},
		methods: {
			isDefaultChange(e) {
				this.is_default = e.detail.value
			},
			saveAddress() {
				let data = {
					province: this.pickerAddress.provinceCode,
					city: this.pickerAddress.cityCode,
					area: this.pickerAddress.areaCode,
					address: this.address,
					user_name: this.user_name,
					mobile: this.mobile,
					is_default: this.is_default
				}
				if (this.editMessage.user_name) {
					data.id = this.editMessage.id
					request_editAddress({
						uni,
						data
					}).then(res => {
						this.saveSuccess(res)
					})
				} else {
					request_addAddress({
						uni,
						data
					}).then(res => {
						this.saveSuccess(res)
					})
				}
			},
			saveSuccess(res) {
				if (res.code === 0) {
					this.$api.msg(res.data + '，将转入地址列表')
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				} else {
					this.$api.msg(res.err)
				}
			},
			openAddres() {
				// this.cityPickerValueDefault = [0, 0, 0]
				this.$refs.simpleAddress.open();
			},
			openAddres2() {
				// 根据 label 获取
				var index = this.$refs.simpleAddress.queryIndex(['湖北省', '随州市', '曾都区'], 'label');
				console.log(index.index);
				this.cityPickerValueDefault = index.index;
				this.$refs.simpleAddress.open();
			},
			openAddres3() {
				// 根据value 获取
				var index = this.$refs.simpleAddress.queryIndex([13, 1302, 130203], 'value');
				console.log(index);
				this.cityPickerValueDefault = index.index;
				this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				console.log(e);
				this.pickerAddress = e
			},
			getArea(id, level) {
				return request_getAreaList({
					uni,
					data: {
						parent_id: id || '',
						level_type: level || 1
					}
				})
			},
			async columnchange(e) {
				const res = (await this.getArea(this.provinceList[e.detail.value].id, 2)) || {}
				const array = res.data
				this.cityList = array
				this.areaList.push(array.map(item => item.id))
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 20px;
	}

	.row {
		border-bottom: rgba(251, 251, 251, 1) 1px solid;
		// border-bottom: red 1px solid;
		padding: 10px 0;

		.input-row {
			padding: 15px;
			display: flex;
			align-items: center;

			radio {
				font-size: 14px;
			}

			radio:nth-of-type(1) {
				margin-right: 10px;
			}
		}
	}

	.address-row {
		input {
			width: 100%;
		}
	}
</style>
