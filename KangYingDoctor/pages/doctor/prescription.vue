<template>
	<view class="page" v-if="recordInfo">
		<view class="row-title row">就诊人信息</view>
		<view class="row">
			<view class="title">患者姓名</view>
			<view class="little-title">{{recordInfo.patientInfo.p_name}}</view>
		</view>
		<view class="row">
			<view class="title">性别</view>
			<view class="little-title">{{recordInfo.gender}}</view>
		</view>
		<view class="row">
			<view class="title">年龄</view>
			<view class="little-title">{{recordInfo.age}}</view>
		</view>
		<!-- <view class="row">
			<view class="title">既往病史</view>
			<view class="little-title">高血压、药物过敏</view>
		</view> -->
		<view class="row">
			<view class="title">临床诊断</view>
			<view class="little-title">{{recordInfo.now_record.diagnosis || '暂无'}}</view>
		</view>
		<view class="row sign-row" v-if="!medHasBeen">
			<view class="title" style="padding: 14px 0 10px;">
				电子签名（请在框内签名）
			</view>
			<view class="hand-center handCenter">
				<canvas class="handWriting" disable-scroll="true" @touchstart="uploadScaleStart" @touchmove="uploadScaleMove"
				 @touchend="uploadScaleEnd" @tap="mouseDown" canvas-id="eSignCanvas">
				</canvas>
			</view>
			<view style="width: 100%;">
				<view style="float: right;" @click="clearSign">清空</view>
				<!-- <view style="float: right;" @click="subCanvas">查看图片</view> -->
			</view>
			<!-- <image :src="signimg" mode=""></image> -->
		</view>
		<view v-if="medHasBeen">
			<view class="title" style="padding: 14px 0 10px;">
				电子签名
			</view>
			<view class="hand-center handCenter">
				<image style="max-width: 100%;" :src="nowRecord.doctor_sign" mode="widthFix"></image>
			</view>
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

		<view class="buttons">
			<view class="button" v-if="!medHasBeen" @click="addMed">
				添加西药
			</view>

			<view class="button" v-if="!medHasBeen" @click="submit">
				提交药方
			</view>

			<view class="button" v-if="medHasBeen" @click="sendPrescript">
				发送药方
			</view>
		</view>
	</view>
</template>
<!-- 开药方 -->
<script>
	import {
		request_recordUp,
		request_recordInfo,
		uploadImg
	} from '../../common/https.js'
	import Handwriting from '../../common/signature.js'
	import IM from '../../common/im.js'
	export default {
		data() {
			return {
				info: {},
				record_id: '',
				medList: {},
				nowRecord: null,
				medHasBeen: false,
				handwriting: {},
				lineColor: 'black',
				slideValue: 50,
				signimg: '',

                recordInfo:null,
			}
		},
		onLoad(e) {
			this.info = e
			this.record_id = e.record_id
		},
		onShow() {
			setTimeout(() => {
				this.handwriting = new Handwriting({
					lineColor: this.lineColor,
					slideValue: this.slideValue,
					canvasName: 'eSignCanvas'
				})
			})
			this.medList = { ...(getApp().globalData.tempMedicineList[this.record_id] || {})}

			request_recordInfo({
				uni,
				data: {
					id: this.record_id
				}
			}).then(res => {
				if (res.code === 0) {
				    this.recordInfo = res.data
					this.nowRecord = res.data.now_record
					if (res.data.now_record.goods) {

						this.medHasBeen = true
						const array = JSON.parse(res.data.now_record.goods)
						// console.log(array)
						this.medList = array.map(item => {
							let newObj = item.GoodsInfo
							newObj.number = item.GoodsNumber
							newObj.guide = item.Guide
							return newObj
						})

						// console.log(JSON.parse(res.data.now_record.goods));
					}
				}
			})
		},
		methods: {
			sendPrescript() {
			    IM.sendCustomMessage({
                    data:'请查看处方信息',
                    description:'PAGE_LINK',
                    extension: JSON.stringify({record_id:this.record_id,tab:2})
                },this.info.targetUserID)

				// let pages = getCurrentPages(); //获取页面栈
				// if (pages.length > 1) {
				// 	var beforePage = pages[pages.length - 2]; //获取上一个页面实例对象
				// 	beforePage.$vm.sendPrescript(this.nowRecord.PreId); //触发父页面中的方法
				// }
			},
			clearSign() {
				this.handwriting.retDraw()
			},
			uploadScaleStart(event) {
				this.handwriting.uploadScaleStart(event)
			},
			uploadScaleMove(event) {
				this.handwriting.uploadScaleMove(event)
			},
			uploadScaleEnd(event) {
				// this.subCanvas()
				this.handwriting.uploadScaleEnd(event)
			},
            mouseDown(){

            },
			subCanvas() {
				return new Promise((resolve, reject) => {
					this.handwriting.saveCanvas().then(res => {
						uni.getFileInfo({
							filePath: res,
							success: e => {
								if (e.size > 1500) {
									this.signimg = res
									uploadImg({
										uni,
										filePath: res
									}).then(res => {
										resolve(res)
									})
								} else {
									reject('签名可能不正确，请重试')
								}
							},
							fail:e=>{
								reject('签名可能不正确，请重试')
							}
						})
					}).catch(err => {
						// console.log(err);
					});
				})
			},
			submit() {
				if (this.medHasBeen) {
					this.$api.msg('不能修改药方')
					return
				}
				let array = []
				for (let i in this.medList) {
					array.push(this.medList[i])
				}

				if(array.length<1){
					this.$api.msg('请添加药品')
					return
				}

				uni.showLoading()
				this.subCanvas().then(res => { // 上传签名到服务器，得到图片路径
					request_recordUp({
						uni,
						data: {
							record_id: this.info.record_id * 1, //（病历ID）、
							doctor_sign: res.data,
							goods: array, //（开的药 数组
						}
					}).then(res => {
						uni.hideLoading()
						if (res.code === 0) {
							this.$api.msg(res.data)

							// 调用chat页面发送药方链接
							request_recordInfo({
								uni,
								data: {
									id: this.record_id
								}
							}).then(res => {
								if (res.code === 0) {
									this.nowRecord = res.data.now_record
									this.sendPrescript()
									setTimeout(() => {
										array.forEach(item => {
											getApp().globalData.tempMedicineList[this.record_id] = {}
										})
										uni.navigateBack()
									}, 500)
								}
							})
						} else {
							this.$api.msg(res.err)
						}
					}).catch(e=>{
						uni.hideLoading()
					})
				}).catch(err => {
					uni.hideLoading()
					this.$api.msg(err)
				})
			},
			addMed(item) {
				if (this.medHasBeen) {
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
				if (this.medHasBeen) {
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
				if (this.medHasBeen) {
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
				this.$set(this.medList, item.id, { ...item
				})

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
		justify-content: center;

		.button {
			display: flex;
			align-items: center;
			margin: 30px 5px 50px;
			font-size: 16px;

			.uni-icons {
				margin-top: 2px;
			}
		}
	}

	.sign-row {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: auto;

		.hand-center {
			width: 100%;
			// height: 100%;
			height: 150px;

			border: 1px solid $base-color;
			margin: 10px 0;

			.handWriting {
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
