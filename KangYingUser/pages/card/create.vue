<template>
	<view>

		<view class="content">


			<!-- <view class="row">
				<view class="title">民族</view>
				<picker mode="selector" :range="array">
					<view class="little-title">本人<uni-icons type="arrowdown"></uni-icons>
					</view>
				</picker>
			</view> -->

			<!-- <view class="row">
				<view class="title">证件类型</view>
				<picker mode="selector" :range="array">
					<view class="little-title">本人<uni-icons type="arrowdown"></uni-icons>
					</view>
				</picker>
			</view> -->



			<!-- 	<view class="row">
				<view class="title">国籍</view>
				<radio-group class="radio-group">
					<label class="radio">
						<radio value="r1" checked="true" />中国</label>
					<label class="radio">
						<radio value="r2" />外籍</label>
				</radio-group>
			</view> -->
			<view class="row">
				<view class="title">就诊人关系</view>
				<picker mode="selector" style="width: 50%;" :range="identity" @change="identityChange">
					<view class="little-title" style="display: flex;width: 100%;">{{identity[currIdentity]}}
						<uni-icons type="arrowdown"></uni-icons>
					</view>
				</picker>
			</view>
			<view class="row">
				<view class="title">患者姓名</view>
				<input class="little-title" placeholder="请输入就诊人姓名" v-model="patientName" />
			</view>
			<view class="row">
				<view class="title">身份证号</view>
				<input class="little-title" placeholder="请输入就诊人身份证号" v-model="patientIdcard" />
			</view>

			<view class="row">
				<view class="title">就诊卡号</view>
				<input class="little-title" placeholder="请输入就诊卡号(选填)" v-model="patientCard" />
			</view>
			<!-- <view class="row">
				<view class="title">就诊详细信息</view>
				<input class="little-title" placeholder="选填" />
			</view> -->

			<view class="row">
				<view class="title">手机号</view>
				<input class="little-title" placeholder="请输入手机号" v-model="patientMobile" />
			</view>


			<!-- <view class="row">
				<view class="title">验证码</view>

				<view class="left">
					<input class="little-title" placeholder="请输入" />

					<view class="little-title get-code">获取验证码</view>
				</view>
			</view> -->

			<!-- <view class="row little-title no-card">验证码收不到？</view> -->
			<view class="button" @click="submit">提交</view>
		</view>

		<uni-popup ref="popup" :maskClick="false">
			<view class="popup">
				<view class="title">请确定以下信息真实准确，信息填写错误将不能领卡取号，退号退费</view>
				<view class="message">就诊人姓名：{{patientName}}</view>
				<view class="message">就诊人身份证：{{patientIdcard}}</view>
				<view class="message">就诊人手机：{{patientMobile}}</view>
				<view class="buttons">
					<view class="button button-cancel" @click="cancel">取消</view>
					<view class="button" @click="confirmSubmit">确认</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		request_patientCardAdd
	} from '../../common/https.js'
	export default {
		data() {
			return {
				identity: ['本人', '父母', '配偶', '子女'],
				currIdentity: 0,
				identityText: '本人',
				patientName: '',
				patientIdcard: '',
				patientCard: '',
				patientMobile: ''
			};
		},
		mounted() {},

		methods: {
			identityChange(e) {
				this.currIdentity = e.detail.value
				this.identityText = this.identity[e.detail.value]
			},
			cancel() {
				this.$refs.popup.close()
			},
			submit() {
				if (!this.patientName) {
					this.$api.msg('请填写就诊人姓名')
					return
				}
				if (!this.patientIdcard) {
					this.$api.msg('请填写就诊人身份证')
					return
				}
				if (!this.patientMobile) {
					this.$api.msg('请填写就诊人电话')
					return
				}
				this.$refs.popup.open()
			},
			confirmSubmit() {
				request_patientCardAdd({
					uni,
					data: {
						relation_ship: this.currIdentity,
						p_name: this.patientName,
						id_card: this.patientIdcard,
						mobile: this.patientMobile,
						p_card: this.patientCard
					}
				}).then(res => {
					this.$refs.popup.close()
					if (res.code === 0) {
						this.$api.msg(res.data, 1500, true)
						setTimeout(() => {
							this.$pageTo({
								url: '/pages/card/list'
							})
						}, 1500)
					} else {
						this.$api.msg(res.err)
					}
					console.log(res);
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fbfdfe;
		padding: 20px;
	}

	.radio-group {
		font-size: 14px;

		label {
			margin-right: 10px;
		}
	}

	.content {
		width: 100%;
		background-color: white;
		border-radius: 4px;
		padding: 20px 10px;

		.row {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			position: relative;
			padding: 16px 0;
			border-bottom: 1px solid #eeeeee;

			.title {
				margin-right: 20px;
				width: 5rem;
				font-size: 15px;
			}

			.little-title {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.left {
				display: flex;
				align-items: center;

				input {
					width: 100%;
				}

				.get-code {
					position: absolute;
					right: 0;
					width: 5rem;
					display: flex;
					justify-content: flex-end;
					color: $base-color;
				}
			}
		}

		.no-card {
			border: none;
			display: flex;
			justify-content: flex-end;
			color: $base-color;
		}

		.button {
			border-radius: 20px;
			margin: 30px auto;
		}
	}

	.popup {
		background-color: white;
		margin: 0 auto;
		border-radius: 4px;
		padding: 10px 20px;
		width: 80%;

		>view {
			padding: 6px 0;
		}

		.message {
			color: $base-color;
			font-size: 14px;
		}

		.buttons {
			display: flex;
			justify-content: space-between;
			padding: 10px 30px;

			.button {
				width: 20vw;
				height: 32px;
				border-radius: 18px;
			}
		}
	}
</style>
