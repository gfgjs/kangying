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

		<view class="row " v-for="(item,index) in jimMsgs[targetUser]" :key='index' :class="item.from_id === targetUser?'doctor-row':'user-row'">
			<image v-if="item.from_id === targetUser" src="../../static/home/15.png" mode=""></image>
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
		</view>
		<!-- <view class="row time-row">22:33</view> -->
		<view id="bottom-place"></view>
		<view class="bottom-handle">
			<view class="little">
				<!-- <uni-icons type="mic" class="icon" size="24"></uni-icons> -->
				<view class="input-box">
					<input class="input" @focus="messageInputFocus" @blur="messageInputBlur" placeholder="输入想说的话" v-model="messageInput"></input>
				</view>
				<uni-icons type="list" @click="moreHandle" class="icon" size="24"></uni-icons>
				<view v-if="messageInput" @touchend.prevent="sendMessage" class="button">
					<text>发送</text>
				</view>
				<uni-icons v-else type="plusempty" class="icon" size="28" @click="sendMore"></uni-icons>
			</view>
		</view>
		<uni-popup ref="moreHandle">
			<radio-group class="more-handle">
				<label class="row" for="pay-ali" @click="moreClikc(1)">
					<view class="left">
						<!-- <image src="../../static/imgs/alipay.png" mode=""></image> -->
						<view>查看病例</view>
					</view>
					<uni-icons type="arrowright"></uni-icons>
					<!-- <radio  checked=""  id="pay-ali"></radio> -->
				</label>
				<label class="row" for="pay-wx" @click="moreClikc(2)">
					<view class="left">
						<!-- <image src="../../static/imgs/weixin.png" mode=""></image> -->
						<view>电子处方</view>
					</view>
					<uni-icons type="arrowright"></uni-icons>
					<!-- <radio id="pay-wx"></radio> -->
				</label>
			</radio-group>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapActions,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				messageInput: '',
				targetUser: '',
				messageList: [],
				myImId: '',
				imageList: {},
				targetInfo: {
					headImage: ''
				}
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
			this.targetUser = e.t || e.im_username
			// this.messageList = this.jimMsgs[e.t]
			// this.myImId = 'u_'+this.userInfo.mobile
			console.log(this.jimMsgs);
			setTimeout(() => {
				uni.pageScrollTo({
					scrollTop: 9999,
					duration: 200
				})
			}, 600)
		},
		methods: {
			messageInputFocus(){
				setTimeout(() => {
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 200
					})
				}, 100)
			},
			messageInputBlur(){
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
								uuid: 100
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
							//TODO
						}).onFail(function(data) {
							//TODO
						});
					}
				})
			},
			jimfun() {
				// this.$jim.getConversation().onSuccess(e => {
				// 	this.chatList = e.conversations
				// })
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
				this.$jim.loginOut()
			},
			sendMessage() {
				this.$jim.sendSingleMsg({
					'target_username': this.targetUser,
					'content': this.messageInput,
					'extras': {
						uuid: 100
					}
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
					this.messageInput = ''
					//data.code 返回码
					//data.message 描述
					//data.msg_id 发送成功后的消息 id
					//data.ctime_ms 消息生成时间,毫秒
					//data.appkey 用户所属 appkey
					//data.target_username 用户名
					//msg.content 发送成功消息体,见下面消息体详情
				}).onFail(function(data) {
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
		height: 50px;
		// background-color: yellow;
		background-color: white;
		box-shadow: 0 0 12px #efefef;

		.little {
			display: flex;
			justify-content: space-between;
			width: 100%;
			align-items: center;

			.input-box {
				background-color: white;
				width: 82%;
				border-radius: 2px;

				.input {
					width: 100%;
					height: 50px;
					border-radius: 6px;
					background-color: #F6F6F6;
					border: 7px solid white;
					padding: 6px 10px 6px 10px;
					font-size: 16px;
				}
			}

			.button {
				height: 32px;
				padding: 0 4px;
				width: 3rem;
				transition: all 1s linear;

				.icon {
					width: auto;
					color: white !important;
				}
			}

			.icon {
				width: 60px;
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
