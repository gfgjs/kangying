<!-- 聊天页 -->
<template>
	<view id="chat">
		<view class="common-place"></view>
		<view class="row doctor-row">
			<view class="message doctor-message">
				<!-- 请填写您的检查信息以及预约检查的相关时间，方便医生为您安排下一步治疗 -->
				欢迎使用天心医疗在线问诊服务
			</view>
		</view>

		<view class="row " v-for="(item,index) in jimMsgs[targetUser]" :key='index' v-if="item.msg_body.extras.record_id== targetInfo.record_id"
		 :class="item.from_id === targetUser?'doctor-row':'user-row'">
			<image class="head-image" v-if="item.from_id === targetUser" :src="targetInfo.p_avatar" mode=""></image>
			<view class="message" v-if="item.msg_type==='text'">
				{{item.msg_body[item.msg_type]}}
			</view>
			<view class="message" v-if="item.msg_type==='image'">
				<view v-if="!imageList[item.msg_body.media_id]" @click="reLoadImage(item.msg_body.media_id)" class="little-title image-tips">
					<uni-icons type="refreshempty" color="white" size="24" style="position: relative;top: 2px;"></uni-icons>
					点击加载图片
				</view>
				<image v-if="imageList[item.msg_body.media_id]" :src="imageList[item.msg_body.media_id]" @error='imageLoadError($event,item.msg_body.media_id)'
				 @click="viewImage([imageList[item.msg_body.media_id]])" mode=""></image>
			</view>

			<image class="head-image" v-if="item.from_id !== targetInfo.p_im_name" :src="targetInfo.d_avatar" mode=""></image>
		</view>
		<!-- <view class="row time-row">22:33</view> -->
		<view id="bottom-place"></view>
		<view class="bottom-handle">
			<view class="little">
				<!-- <uni-icons type="mic" class="icon" size="24"></uni-icons> -->
				<view class="input-box">
					<textarea class="input" @focus="messageInputFocus" @blur="messageInputBlur" placeholder="输入想说的话" auto-height fixed
					 v-model="messageInput"></textarea>
				</view>
				<uni-icons type="camera" class="icon" size="28" @click="sendMore"></uni-icons>
				<view v-if="messageInput" @touchend.prevent="sendMessage()" class="button">
					<text>发送</text>
				</view>
				<uni-icons v-else type="plus" @click="moreHandle" class="icon" size="28"></uni-icons>
			</view>
		</view>
		<uni-popup ref="moreHandle">
			<view class="more-handle">
				<view class="row" @click="moreClick('/pages/doctor/elec-case')">
					<view class="left">
						填写病例
					</view>
					<uni-icons type="arrowright"></uni-icons>
				</view>
				<view class="row" @click="moreClick('/pages/doctor/prescription')">
					<view class="left">
						电子处方
					</view>
					<uni-icons type="arrowright"></uni-icons>
				</view>
				<view class="row" @click="moreClick('/pages/doctor/patient')">
					<view class="left">
						查看患者
					</view>
					<uni-icons type="arrowright"></uni-icons>
				</view>
				<view class="row" @click="finishChat">
					<view class="left">
						结束问诊
					</view>
					<uni-icons type="arrowright"></uni-icons>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapActions,
		mapGetters
	} from 'vuex'
	import {
		request_recordNotice
	} from '../../common/https.js'
	export default {
		data() {
			return {
				messageInput: '',
				targetUser: '',
				messageList: [],
				imageList: {},
				targetInfo: {},
				record_id: '',
			};
		},
		watch: {
			iMessageList(e) {
				// console.log((JSON.stringify(e)).length);
				this.messageList.push(e)
			},
			jimMsgs(e) {
				// console.log(e);
				this.messageList = this.jimMsgs[this.targetUser]
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 200
					})
				}, 100)
			},
			jimHasLogin(e) {
				if (e) {
					this.jimfun()
				}
			},
			messageList(e) {
				e && e.forEach(item => {
					this.getMessageImage(item.msg_body.media_id)
				})
			}
		},
		onLoad(e) {
			this.targetUser = e.im_username
			this.record_id = e.record_id
			this.targetInfo = e

			uni.setNavigationBarTitle({
				title: e.d_name
			})

			setTimeout(() => {
				uni.pageScrollTo({
					scrollTop: 9999,
					duration: 200
				})
			}, 600)
		},
		methods: {
			finishChat() {
				this.$refs.moreHandle.close()
				uni.showModal({
					title: '提示',
					content: '确定要结束问诊吗？',
					success: e => {
						if (e.confirm) {
							this.sendMessage('问诊已结束，感谢您的使用！')
							this.changeRecordStatus(2)
						}
					}
				})
			},
			changeRecordStatus(status) {
				request_recordNotice({
					uni,
					data: {
						record_id: this.record_id,
						status
					}
				}).then(res => {
					if (res.code === 0) {
						this.targetInfo.status = res.data
					}
				})
			},
			moreClick(url) {
				this.$refs.moreHandle.close()
				this.$pageTo({
					url,
					options: this.targetInfo
				})
			},
			messageInputFocus() {
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 200
					})
				}, 100)
			},
			messageInputBlur() {
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 100
					})
				}, 200)
			},
			moreHandle() {
				this.$refs.moreHandle.open()
			},
			viewImage(urls) {
				uni.previewImage({
					urls,
					longPressActions: {
						itemList: ['保存图片'],
						success: (data) => {
							uni.saveImageToPhotosAlbum({
								filePath: urls[0],
								success: () => {
									this.$api.msg('图片已保存至相册！')
								}
							})
							// console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			},
			imageLoadError(e, id) {
				this.$set(this.imageList, id, '')
			},
			reLoadImage(id) {
				this.getMessageImage(id)
			},
			getMessageImage(id) {
				this.$jim.getResource({
					media_id: id
				}).onSuccess(e => {
					if (!this.imageList[id]) {
						this.$set(this.imageList, id, e.url)
					}
				})
			},
			sendMore() {
				uni.chooseImage({
					count: 1, //
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: (res) => {
						var tempFilePaths = res.tempFilePaths[0]; //获取成功，读取文件路径
						this.$jim.sendSinglePic({
							'target_username': this.targetUser,
							'extras': {
								record_id: this.record_id
							},
							'image': tempFilePaths //设置图片参数
						}).onSuccess((data, msg) => {
							setTimeout(() => {
								uni.pageScrollTo({
									scrollTop: 9999,
									duration: 200
								})
							}, 300)
							this.UPDATE_JIMMSGS({
								from_username: data.target_username,
								msgs: msg.content
							})
						}).onFail(function(data) {
							//TODO
						});
					}
				})
			},
			sendPrescript(id) {
				this.sendMessage('请查看药方', {
					messageType: 'prescript',
					url: '/pages/doctor/prescript',
					options: {
						id
					}
				}, () => {
					this.$api.msg('药方已发送')
				})
			},
			jimfun() {
				this.$jim.onSyncConversation(data => {
					data.forEach(item => {
						this.UPDATE_JIMMSGS({
							from_username: item.from_username,
							msgs: item.msgs.map(i => {
								return i.content
							})
						})
					})
				})
			},
			emoji() {
				// this.$jim.loginOut()
			},
			sendMessage(text, obj, callback) {
				this.$jim.sendSingleMsg({
					'target_username': this.targetUser,
					'content': text || this.messageInput,
					'extras': {
						record_id: this.record_id,
						...obj
					}
				}).onSuccess((data, msg) => {
					// 医生首次向患者发送消息时，改变status为3
					if (this.targetInfo.status == 1) {
						this.changeRecordStatus(3)
					}
					callback && callback()
					setTimeout(() => {
						uni.pageScrollTo({
							scrollTop: 9999,
							duration: 200
						})
					}, 300)
					this.UPDATE_JIMMSGS({
						from_username: data.target_username,
						msgs: msg.content
					})
					this.messageInput = ''
				}).onFail((data) => {
					console.log(data)
					//data.code 返回码
					//data.message 描述
				});
			},
			...mapActions(['UPDATE_IMASSAGELIST', 'UPDATE_JIMMSGS'])
		},
		computed: {
			...mapGetters(['iMessageList', 'userInfo', 'jimMsgs', 'jimHasLogin'])
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fbfdfe;
		height: 100%;
	}

	.row {
		margin-bottom: 20px;
		padding: 0 20px;
		width: 100%;
		display: flex;
		align-items: center;

		.message {
			/* 去掉头像所占宽度 */
			max-width: calc(100% - 70px);
			font-size: 14px;
			padding: 10px 20px;
		}

		image {
			width: 50px;
			height: 50px;
			margin-right: 10px;
		}

		.head-image {
			border-radius: 5px;
		}
	}

	.time-row {
		justify-content: center;
		padding: 20px;
		color: #383838;
		font-size: 14px;
	}

	.doctor-row {
		justify-content: flex-start;

		.message {
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 4px 1px rgba(11, 125, 255, 0.14);
			border-radius: 3px 12px 3px 12px;

			.image-tips {
				color: $base-color;
				display: flex;
				align-items: center;
			}
		}
	}

	.user-row {
		justify-content: flex-end;

		.message {
			background: $base-color;
			box-shadow: 0px 0px 4px 1px rgba(11, 125, 255, 0.24);
			border-radius: 12px 3px 12px 3px;
			color: white;
			margin-right: 10px;

			.image-tips {
				color: white;
				display: flex;
				align-items: center;
			}
		}
	}

	.bottom-handle {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 0 10px;
		background-color: white;
		box-shadow: 0 0 12px #efefef;

		.little {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			min-height: 50px;
			padding: 5px 0;

			.input-box {
				flex: 1;
				background-color: white;
				width: 82%;
				border-radius: 2px;
				margin-right: 14px;

				.input {
					box-sizing: content-box;
					padding: 5px 0 5px 10px;
					width: 100%;
					background-color: #F6F6F6;
					font-size: 18px;
				}
			}

			.button {
				height: 32px;
				padding: 0 4px;
				width: 3rem;
				transition: all 1s linear;
			}

			.icon {
				width: 40px;
			}
		}
	}

	#bottom-place {
		height: 60px;
	}

	.more-handle {
		background-color: white;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;

		.row {
			padding: 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			.left {
				display: flex;
				align-items: center;
				font-size: 16px;

				image {
					width: 31px;
					height: 31px;
					margin-right: 10px;
				}
			}
		}
	}
</style>
