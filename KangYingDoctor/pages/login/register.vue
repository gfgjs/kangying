<template>
	<view>
		<!-- 	<view class="header">
			<view>1.填写信息</view>
			<view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
			<view>2.手机验证</view>
			<view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
			<view>3.设置密码</view>
		</view> -->
		<!-- <view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="common-place"></view> -->
		<view class="common-place"></view>
		<view class="common-place"></view>
		<view class="content">
			<view v-for="(item,index) in regMessage" :key="'item'+index">
				<view class="row" v-if="item.type==='input'">
					<view class="title">
						<view class="price" :style="item.value&&'opacity:0;'">*</view>{{item.name}}
					</view>
					<input type="text" :placeholder="item.placeholder || '请输入 '+item.name" :value="regMessage[index].value" @input="inputChange($event,index)">
				</view>

				<view class="row" v-if="item.type==='tags'">
					<view class="title">
						<view class="price" :style="item.value&&'opacity:0;'">*</view>{{item.name}}
					</view>
					<view class="content-row">
						<view class="tags">
							<view class="tag doctor-tag" v-for="(it,index) in item.value" :class="'doctor-tag-'+((index+1)%2 + 1)" :key="'tag'+index">
								<text>{{it}}</text>
								<uni-icons type="closeempty" @click="removeTag(index)"></uni-icons>
							</view>
							<view class="little-title" v-if="!item.value.length" style="display: flex;align-items: center;">请添加标签</view>
						</view>
						<uni-icons type="plusempty" size="24" @click="addTag"></uni-icons>
					</view>
				</view>

				<view class="row" v-if="item.type==='switch'">
					<view class="title">
						<view class="price" :style="item.value&&'opacity:0;'">*</view>{{item.name}}
					</view>
					<radio-group name="" class="radio-group" @change="switchChange($event,item,index)">
						<label>
							<view v-for="(i,ind) in item.array" :key="'radio'+ind">
								<radio :value="i+''" :checked="i == item.value" /><text>{{i}}</text>
							</view>
						</label>
					</radio-group>
				</view>

				<view class="row" v-if="item.type==='upImg'">
					<view class="title">
						<view class="price" :style="item.value&&'opacity:0;'">*</view>{{item.name}}
					</view>
					<view class="imgs-row">
						<image v-for="(i,ind) in item.value" :key="'img'+ind" :src="i" class="add-button" @longpress="viewBigImg(item.value)"
						 @click="clickImg(item,index,ind)" mode=""></image>
						<view class="add-button" @click="upImg(item,index)">
							<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
						</view>
					</view>
				</view>
				<view class="row" v-if="item.type==='picker'">
					<view class="title">
						<view class="price" :style="item.value&&'opacity:0;'">*</view>{{item.name}}
					</view>
					<picker mode="selector" :range="item.array" @change="pickerChange($event,item,index)">
						<view class="picker">
							<view class="little-title">{{item.value||'请选择 '+item.name}}</view>
							<uni-icons type="arrowdown"></uni-icons>
						</view>
					</picker>
				</view>
			</view>

			<view v-if="0">
				<view class="row">
					<view class="title">
						<view class="price" :style="userName&&'opacity:0;'">*</view>姓名
					</view>
					<input type="text" placeholder="请填写您的姓名" v-model="userName">
				</view>

				<view class="row">
					<view class="title">
						<view class="price" :style="userName&&'opacity:0;'">*</view>性别
					</view>
					<radio-group name="" class="radio-group">
						<label>
							<view>
								<radio color="#5EB6AA" /><text>男</text></view>
							<view>
								<radio color="#5EB6AA" /><text>女</text></view>
						</label>
					</radio-group>
				</view>

				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>身份证号
					</view>
					<input type="idcard" placeholder="请填写您的身份证号" v-model="idcard">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>出生日期
					</view>
					<input type="idcard" placeholder="根据身份证自动识别" disabled v-model="idcard">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>家庭地址
					</view>
					<input type="idcard" placeholder="请填写您的家庭地址" v-model="idcard">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>所在医院
					</view>
					<input type="idcard" placeholder="请填写您所在医院" v-model="idcard">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>所在科室
					</view>
					<input type="idcard" placeholder="请填写您所在科室" v-model="idcard">
				</view>

				<!-- 体检管理员 -->
				<view class="row">
					<view class="title">
						<view class="price" :style="userName&&'opacity:0;'">*</view>执业资质
					</view>
					<radio-group name="" class="radio-group">
						<label>
							<view>
								<radio /><text>有</text></view>
							<view>
								<radio /><text>无</text></view>
						</label>
					</radio-group>
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="userName&&'opacity:0;'">*</view>职称
					</view>
					<radio-group name="" class="radio-group">
						<label>
							<view>
								<radio /><text>有</text></view>
							<view>
								<radio /><text>无</text></view>
						</label>
					</radio-group>
				</view>
				<!-- | -->

				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>执业药师证编码
					</view>
					<input type="idcard" placeholder="请填写执业药师证编码" v-model="idcard">
				</view>

				<view class="row">
					<view class="title">
						<view class="price">*</view>职称
					</view>
					<picker mode="selector" :range="level">
						<view class="picker">
							<view class="little-title" :style="sex&&'font-size:16px;color:inherit;'">{{'请选择您的职称'}}</view>
							<uni-icons type="arrowdown"></uni-icons>
						</view>
					</picker>
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>从业年限
					</view>
					<input type="idcard" placeholder="请填写从业年限" v-model="idcard">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>上传证件照片
					</view>

					<view class="imgs-row">
						<view class="add-button">
							<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
						</view>
						<view class="add-button">
							<uni-icons type="plusempty" size="24" color="#cccccc"></uni-icons>
						</view>
					</view>
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>本人银行卡号
					</view>
					<input type="idcard" placeholder="请填写本人银行卡号" v-model="idcard">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>银行开户户名
					</view>
					<input type="idcard" placeholder="请填写银行开户户名" v-model="idcard">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>开户行
					</view>
					<input type="idcard" placeholder="请填写开户行" v-model="idcard">
				</view>


				<view class="row mobile-row">
					<view class="title">
						<view class="price" :style="mobile&&'opacity:0;'">*</view>联系电话
					</view>
					<view class="mobile-row">
						<input type="text" placeholder="请填写您的联系电话" v-model="mobile">
						<view class="get-code" @click="getVerifyCode">{{countDown?(countDown+' 秒后再次获取'):'获取验证码'}}</view>
					</view>
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="verifyCode&&'opacity:0;'">*</view>手机验证码
					</view>
					<input type="password" placeholder="请填写您收到的验证码" v-model="verifyCode">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="idcard&&'opacity:0;'">*</view>备用联系电话
					</view>
					<input type="idcard" placeholder="请填写备用联系电话" v-model="idcard">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="password&&'opacity:0;'">*</view>登录密码
					</view>
					<input type="password" placeholder="请填写您的登录密码" v-model="password">
				</view>
				<view class="row">
					<view class="title">
						<view class="price" :style="verifyPassword&&'opacity:0;'">*</view>确认密码
					</view>
					<input type="password" placeholder="请确认登录密码" v-model="verifyPassword">
				</view>

			</view>

			<uni-popup ref="popup" type="dialog">
				<uni-popup-dialog mode="input" title="添加标签" value="" placeholder="请在此输入" @confirm="popupConfirm"></uni-popup-dialog>
			</uni-popup>
			<view class="button register" @click="submitLogin">
				确认注册
			</view>
		</view>

	</view>
</template>

<script>
	import {
		request_sendLoginSms,
		request_sendReSms,
		request_register,
		request_uploadImg,
		request_cates
	} from '../../common/https.js'
	import {
		saveLoginMessage
	} from '../../common/util.js'
	import popupDialog from '../../components/uni-popup/uni-popup-dialog.vue'
	let timer
	export default {
		components: {
			'uni-popup-dialog': popupDialog
		},
		data() {
			return {
				level: ['医师', '主治医师', '副主任医师', '主任医师'],
				userName: '',
				sex: '男',
				idcard: '',
				verifyPassword: '',
				password: '',
				countDown: 0,
				verifyCode: '',
				mobile: '',
				
				role: 1,
				regMessage: {
					user_name: {
						value: '',
						name: '姓名',
						type: 'input'
					},
					mobile: {
						value: '',
						name: '手机',
						type: 'input'
					},
					verifyCode: {
						value: '',
						name: '验证码',
						type: 'input'
					},

					sex: {
						value: '',
						name: '性别',
						type: 'switch',
						array: ['男', '女']
					},

					hospital_id: {
						value: '',
						name: '医院',
						type: 'picker',
						array: ['第一医院', '第二医院'],
						mapping: {
							'第一医院': 1,
							'第二医院': 2
						}
					},
					dept_code: {
						value: '',
						name: '科室代码',
						type: 'picker',
						array: ['儿科', '内科']
					},
					level_name: {
						value: '',
						name: '职称',
						type: 'picker',
						array: ['医师', '主治医师', '副主任医师', '主任医师']
					},
					work_cate: {
						value: '',
						name: '职业类别',
						type: 'picker',
						array: ['临床', '中医', '口腔', '公共卫生']
					},

					speciality: {
						value: '',
						name: '擅长',
						type: 'tags',
						placeholder: '点击添加擅长'
					},

					avatar: {
						value: '',
						name: '头像',
						type: 'upImg'
					},
					certificate: {
						value: '',
						name: '证书图片',
						type: 'upImg'
					},
					pass: {
						value: '',
						name: '密码',
						type: 'input'
					},
					re_pass: {
						value: '',
						name: '确认密码',
						type: 'input'
					}
				}
			}
		},
		onLoad(e) {
			this.role = e.role
			const reg = getApp().globalData.regMessage
			if (reg.status) {
				this.regMessage = reg.content
			}
			request_cates({
				uni
			}).then(res => {
				res.data.splice(0, 1)
				const arr = res.data
				const array = []
				const mapping = {}
				arr.map(item => {
					item.children.map(it => {
						array.push(it.label)
						mapping[it.label] = it.value // 科室名称：科室代码。是否会出现多个相同科室名称但代码不同的情况？
					})
				})
				this.regMessage.dept_code.array = array
				this.regMessage.dept_code.mapping = mapping
			})
		},
		beforeDestroy() {
			clearInterval(timer)
			getApp().globalData.regMessage.status = false
		},
		methods: {
			close(done) {
				// done()
			},

			popupConfirm(done, value) {
				// done()
				if (value) {
					const array = this.regMessage.speciality.value || []
					array.push(value)
					// this.regMessage.speciality.value = array
					this.$set(this.regMessage.speciality, 'value', array)
					this.$refs.popup.close()
				}
			},
			switchChange(e, item, index) {
				item.value = e.detail.value
				this.$set(this.regMessage, index, item)
			},
			pickerChange(e, item, index) {
				item.value = item.array[e.detail.value]
				this.$set(this.regMessage, index, item)
			},
			inputChange(e, index) {
				this.regMessage[index].value = e.detail.value
			},
			addTag() {
				this.$refs.popup.open()
			},
			removeTag(index) {
				const array = this.regMessage.speciality.value
				array.splice(index, 1)
				this.$set(this.regMessage.speciality, 'value', array)
			},
			upImg(item, index) {
				request_uploadImg({
					uni
				}).then(res => {
					if (res.code === 0) {
						item.value = item.value || []
						item.value.push(res.data)
						this.$set(this.regMessage, index, item)
					} else {
						this.$api.msg(res.err)
					}
				})
			},
			viewBigImg(urls) {
				uni.previewImage({
					urls
				})
			},
			clickImg(item, index, ind) {
				uni.showModal({
					content: '是否删除此图片？（长按可查看大图）',
					confirmText: '确认删除',
					success: e => {
						if (e.confirm) {
							item.value.splice(ind, 1)
							this.$set(this.regMessage, index, item)
						} else if (e.cancel) {

						}
					}
				})
			},
			submitLogin() {

				getApp().globalData.regMessage.status = true
				getApp().globalData.regMessage.content = this.regMessage
				this.submit()

				// let {
				// 	mobile,
				// 	userName,
				// 	idcard,
				// 	sex
				// } = this

				// getApp().globalData.registerMessage.mobile = mobile
				// getApp().globalData.registerMessage.userName = userName
				// getApp().globalData.registerMessage.idcard = idcard
				// getApp().globalData.registerMessage.sex = sex

				// uni.navigateTo({
				// 	url: './verify-code'
				// })
			},
			submit() {

				let data = {}
				for (let i in this.regMessage) {
					data[i] = this.regMessage[i].value
				}
				data.dept_code = this.regMessage.dept_code.mapping[data.dept_code]
				data.hospital_id = this.regMessage.hospital_id.mapping[data.hospital_id]
				data.role = this.role
				// data.speciality = data.speciality.replace(/，/ig, ',').split(',')
				data.avatar = data.avatar[0]
				// delete data.verifyCode
				// delete data.re_pass
				// delete data.sex
				// console.log(JSON.stringify(data));
				request_register({
					uni,
					data
				}).then(res => {
					if (res.code === 0) {
						this.$api.msg('注册成功')
						saveLoginMessage(uni, {
							...(res.data),
							mobile: data.mobile,
							password: data.password
						})
						getApp().login()
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/index/index'
							})
						}, 1000)
					} else {
						this.$api.msg(res.err)
					}
				})

				// request_register({
				// 	uni,
				// 	data: {
				// 		user_name: this.userName,
				// 		gender: this.sex,
				// 		mobile: this.mobile,
				// 		id_card: this.idcard,
				// 		sms_code: this.verifyCode,
				// 		pass: this.password,
				// 	}
				// }).then(res => {
				// 	if (res.code === 0) {
				// 		this.$api.msg('注册成功！将转入注册前页面')
				// 		saveLoginMessage(uni, {
				// 			mobile: this.mobile,
				// 			password: this.password,
				// 			token: res.data
				// 		})

				// 		let lastPage = this.$lastPage
				// 		let type = lastPage.navigateType

				// 		setTimeout(() => {
				// 			if (type === '$switchTab') {
				// 				this['$switchTab'](lastPage)
				// 			} else if (type === '$pageTo') {
				// 				this['$pageTo'](lastPage)
				// 			}
				// 		}, 1500)
				// 	} else if (res.err === '手机号已注册') {
				// 		uni.showModal({
				// 			content: '手机号已经注册，是否前往登录？',
				// 			success(res) {
				// 				if (res.confirm) {
				// 					uni.navigateTo({
				// 						url: './login'
				// 					})
				// 				} else {
				// 					uni.navigateTo({
				// 						url: './register'
				// 					})
				// 				}
				// 			}
				// 		})
				// 	} else {
				// 		this.$api.msg(res.err)
				// 	}
				// })
			},
			getVerifyCode() {
				if (this.countDown > 0) {
					this.$api.msg(this.countDown + ' 秒后可再次获取')
				} else {
					// request_sendReSms({
					// 	uni,
					// 	data: {
					// 		mobile: this.mobile
					// 	}
					// }).then(res => {
					// 	if (res.code === 0) {
					// 		// 发送成功后 开始倒计时
					// 		this.countDown = 60
					// 		this.doCountDown()
					// 	} else if (res.err === '手机号已经注册') {
					// 		// this.$api.msg(res.err)
					// 		uni.showModal({
					// 			content: '手机号已经注册，是否前往登录？',
					// 			success(res) {
					// 				if (res.confirm) {
					// 					uni.navigateTo({
					// 						url: './login'
					// 					})
					// 				} else {
					// 					uni.navigateTo({
					// 						url: './register'
					// 					})
					// 				}
					// 			}
					// 		})
					// 	} else {
					// 		this.$api.msg(res.err)
					// 	}
					// })
				}
			},
			doCountDown() {
				clearInterval(timer)
				timer = setInterval(() => {
					if (this.countDown > 0) {
						this.countDown--
						// getApp().globalData.verifyCodeCountDown = this.countDown
					} else {
						clearInterval(timer)
						// getApp().globalData.verifyCodeCountDown = 0
					}
				}, 1000)
			},
			sexSelect(e) {
				console.log(e);
				this.sex = this.sexArray[e.detail.value]
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $base-background-color;
	}

	.header {
		background-color: white;
		display: flex;
		justify-content: space-around;
		padding: 10px 4vw;
		font-size: 14px;
		position: fixed;
		width: 100%;
		height: 50px;

		.uni-icons {
			font-size: 10px !important;
		}
	}

	.content {
		background-color: white;
		border-radius: 4px;
		width: 96vw;
		margin: 0 auto;
		padding: 15px;

		.row {
			.title {
				font-size: 16px;
				display: flex;
			}

			border-bottom: rgba(251, 251, 251, 1) 1px solid;
			padding: 20px 20px 30px;

			input,
			.picker,
			.mobile-row,
			.radio-group,
			.imgs-row {
				height: 50px;
				padding-left: 10px;
				padding-top: 25px;
			}

			.picker,
			.mobile-row,
			.imgs-row {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.imgs-row {
				justify-content: flex-start;
			}

			.content-row {
				padding: 25px 10px 0;
				display: flex;
				justify-content: space-between;
				align-content: center;

				.tags {
					display: flex;
					flex-wrap: wrap;

					.tag {
						display: flex;
						align-items: center;
						font-size: 14px;
						margin: 5px;
					}

					.doctor-tag {
						border-radius: 4px;
						padding: 2px 0 2px 6px;
					}

					.doctor-tag-1 {
						background: rgba(235, 239, 253, .7);
						color: #4EA6FF;

						.uni-icons {
							color: #4EA6FF !important;
						}
					}

					.doctor-tag-2 {
						background: rgba(253, 245, 241, .7);
						color: #FF5D69;

						.uni-icons {
							color: #FF5D69 !important;
						}
					}
				}

				.uni-icons {
					display: flex;
					align-items: center;
					padding: 4px;
				}

				// min-height: 50px;
			}

			.radio-group {
				label {
					display: flex;

					view {
						margin-right: 20px;
					}
				}
			}

			.mobile-row {
				input {
					height: auto;
					padding: 0;
				}

				font-size: 16px;

				.get-code {
					color: $base-color;
					min-width: 50%;

					display: flex;
					align-items: center;
					justify-content: flex-end;
				}

				.get-code:active {
					opacity: .6;

				}
			}
		}

		.register {
			border-radius: 20px;
			margin: 30px auto;
		}
	}

	.add-button {
		height: 50px;
		width: 50px;
		border-radius: 4px;
		background-color: #F7F7F7;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20px;
	}

	.add-tag-popup {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
