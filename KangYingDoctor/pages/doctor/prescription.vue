<template>
	<view class="page">
		<view class="row-title row">就诊人信息</view>
		<view class="row">
			<view class="title">患者姓名</view>
			<view class="little-title">{{info.p_name}}</view>
		</view>
		<view class="row">
			<view class="title">性别</view>
			<view class="little-title">{{info.p_gender}}</view>
		</view>
		<view class="row">
			<view class="title">年龄</view>
			<view class="little-title">25</view>
		</view>
		<!-- <view class="row">
			<view class="title">既往病史</view>
			<view class="little-title">高血压、药物过敏</view>
		</view> -->
		<view class="row">
			<view class="title">临床诊断</view>
			<view class="little-title">{{info.diagnosis}}</view>
		</view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="row-title row">选择药品</view>
		<view class="medicine" v-for="(item,index) in medList" :key="index">
			<view class="row med-title">
				<view class="title">药品 {{index +1}}</view>
				<view class="little-title">{{item.m_name}}</view>
			</view>
			<view class="row">
				<view class="title">数量</view>
				<view class="little-title">
					<view class="icon-button">
						<uni-icons type="arrowleft" size="22" @click="medMinus(item)"></uni-icons>
					</view>
					<text class="number">{{item.number}}</text>
					<view class="icon-button">
						<uni-icons type="arrowright" size="22" @click="medPlus(item)"></uni-icons>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="title">规格</view>
				<view class="little-title">{{item.spec}}</view>
			</view>
			<view class="row">
				<view class="title">服用说明</view>
				<view class="little-title">
					<input type="text" :disabled="medHasBeen" v-model="item.guide" placeholder="请填写服用说明" />
					<!-- <view class="row">每日<input type="text" placeholder="1">次</view> -->
					<!-- <view class="row">每次<input type="text" placeholder="1包"></view> -->
				</view>
			</view>
			<!-- <view class="row">
				<view class="title">其它</view>
				<view class="little-title"><input type="text" class="other" placeholder="请输入其它注意事项"></view>
			</view> -->
		</view>

		<view class="buttons" v-if="!medHasBeen">
			<view class="button" @click="addMed">
				添加西药
			</view>

			<view class="button" @click="submit">
				提交药方
			</view>
		</view>
	</view>
</template>
<!-- 开药方 -->
<script>
	import {
		request_recordUp,
		request_recordInfo
	} from '../../common/https.js'
	export default {
		data() {
			return {
				info: {},
				record_id: '',
				medList: {},

				medHasBeen: false
			};
		},
		onLoad(e) {
			this.log(e)
			this.info = e
			this.record_id = e.record_id
		},
		onShow() {
			this.medList = { ...(getApp().globalData.tempMedicineList[this.record_id] || {})
			}

			request_recordInfo({
				uni,
				data: {
					id: this.record_id
				}
			}).then(res => {
				if (res.code === 0) {
					if(res.data.now_record.goods){
						this.medHasBeen = true
						const array = JSON.parse(res.data.now_record.goods)
						this.medList = array.map(item=>{
							let newObj = item.GoodsInfo
							newObj.number = item.GoodsNumber
							newObj.guide = item.Guide
							return newObj
						})
						
						console.log(JSON.parse(res.data.now_record.goods));
					}
				}
				console.log(res.data);
			})
		},
		methods: {
			submit() {
				let array = []
				for (let i in this.medList) {
					array.push(this.medList[i])
				}
				if(this.medHasBeen){
					this.$api.msg('不能修改药方')
					return
				}
				// if(!array.length){

				// 	return
				// }

				request_recordUp({
					uni,
					data: {
						record_id: this.info.record_id * 1, //（病历ID）、
						goods: array, //（开的药 数组
					}
				}).then(res => {
					if (res.code === 0) {
						this.$api.msg(res.data)
						setTimeout(() => {
							array.forEach(item => {
								getApp().globalData.tempMedicineList[this.record_id] = {}
							})
							uni.navigateBack()
						}, 1000)
					} else {
						this.$api.msg(res.err)
					}
				})
			},
			addMed(item) {
				if(this.medHasBeen){
					this.$api.msg('不能修改药方')
					return
				}
				this.$pageTo({
					url: '/pages/doctor/add-medicine',
					options: {
						record_id: this.info.record_id
					}
				})
			},
			medPlus(item) {
				if(this.medHasBeen){
					return
				}
				if (item.number + 1 > item.stock) {
					this.$api.msg('此药品已无库存')
				} else {
					item.number = item.number + 1
					this.updateMed(item, 'number', item.number)
				}
			},
			medMinus(item) {
				if(this.medHasBeen){
					return
				}
				if (item.number <= 1) {
					uni.showModal({
						title: '提示',
						content: '是否要从清单中删除此药品？',
						success: e => {
							if (e.confirm) {
								this.deleteMed(item)
							}
						}
					})
				} else {
					item.number = item.number - 1
					this.updateMed(item, 'number', item.number)
				}
			},
			deleteMed(item) {
				this.$delete(this.medList, item.id)

				// 一个病历（record_id）的药品清单
				let obj = getApp().globalData.tempMedicineList[this.record_id]
				delete obj[item.id]
				getApp().globalData.tempMedicineList[this.record_id] = obj
			},
			updateMed(item, key, value) {
				item[key] = value
				this.$set(this.medList, item.id, { ...item})

				// 一个病历（record_id）的药品清单
				let obj = getApp().globalData.tempMedicineList[this.record_id]
				obj[item.id] = item
				getApp().globalData.tempMedicineList[this.record_id] = obj
			}
		}
	}
</script>

<style lang="scss" scoped>
	page,
	.page {
		padding: 0 20px;
	}

	.row-title {
		padding-left: 0;
		font-size: 20px;
	}

	.medicine {
		margin-bottom: 20px;

	}



	.row {
		border-bottom: 1px solid #F8F5F5;
		display: flex;
		height: 54px;
		align-items: center;

		.title {
			min-width: 5rem;
			font-weight: 400;
			color: black;
		}

		.title:after {
			content: ' :';
		}



		.little-title {
			font-size: 16px;
			color: #363636;
			display: flex;
			align-items: center;
			width: 100%;

			.icon-button {
				padding: 6px;
			}

			.number {
				padding: 0 10px;
			}

			.uni-icons {
				color: $base-color !important;
			}

			.row {
				margin-right: 20px;
			}

			input {
				// width: 2.4rem;
				height: 40px;
				width: 100%;
				background-color: #F5F5F5;
				padding-left: 4px;
				border-radius: 2px;
			}

			.other {
				width: 100%;
				height: 40px;
			}
		}
	}

	.med-title {
		font-weight: 600;

		.title {
			// font-weight: 600;
		}
	}

	.buttons {
		display: flex;

		.button {
			display: flex;
			align-items: center;
			margin: 30px auto 50px;
			font-size: 16px;

			.uni-icons {
				margin-top: 2px;
			}
		}
	}
</style>
