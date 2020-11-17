<template>
	<view>
		<txtrtc_video_view ref="videoView" style="width: 100%;height:300px;"></txtrtc_video_view>
		<txtrtc_video_view ref="remoteVideoView" :style="`width: 100%;height: ${remoteVideoHeight}px;`"></txtrtc_video_view>
		<button type="primary" @click="anchorEnterRoom()">主播进入房间</button>
		<button type="primary" @click="audienceEnterRoom()">观众进入房间</button>
		<button type="primary" @click="startVideo()">上麦</button>
		<button type="primary" @click="stopVideo()">下麦</button>
		<button type="primary" @click="sendMessage()">发消息</button>
		<button type="primary" @click="exitRoom()">离开房间</button>
	</view>
</template>

<script>
	//插件对象

	var sdkwx = uni.requireNativePlugin('TXTRTC-SdkWX');

	export default {
		data() {
			return {
				remoteVideoHeight: 100,
				sdkAppId: 1400440995,
				roomId: 12333,
				u1: {
					userId: 1,
					userSig: 'eJwtzFELgjAUhuH-cq5DztY2nNBVCCERC4XQO3NTTlaoiUXRf8-Uy*-54P1Aso*9wXUQAPcQVtMm6*49lTQxW-Bh67xpyELABKIQqLWcH-dqqHOjSyk5Is7a0*1vCtc*95liS4WqsXnO6kMRJ5e6PZqwV8VpMPydRjrbCibTnblGZa7aCp9duoHvDxL7L7Q_'
				},
				u2: {
					userId: 2,
					userSig: 'eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zIhwlDB4pTsxIKCzBQlK0MTAwMTEwNLS1OITGpFQWZRKlDc1NTUyMDAACJakpkLEjMzMLYwsjAyhooWZ6YDzXTMTw92iSpw9ipLcTHPjTKrCozRD83wqPB0cc8OcLQIM8ouzcopTXEuCgu3sFWqBQA96zAT'
				}
			}
		},
		onLoad() {
			//检查权限
			sdkwx.checkPermission(function(res) {
				console.log(res);
			});
			var that = this;
			//设置事件回调
			sdkwx.setListener(function(res) {
				console.log(res);
				if (res.type == "onEnterRoom") {
					//进入房间回调
					console.log(res);
				} else if (res.type == "onExitRoom") {
					//离开房间回调
					console.log(res);
				} else if (res.type == "onSwitchRole") {
					//角色转换回调
					console.log(res);
				} else if (res.type == "onUserVideoAvailable") {
					//远端用户视频可用回调
					console.log(res);
					that.onUserVideoAvailable(res.data);
				}
			});

			// //初始化IM
			// txim.initSDK(this.sdkAppId, {}, function(res) {
			// 	console.log(res);
			// 	if (res.type == "onConnectSuccess") {

			// 	}
			// });
			// //消息监听
			// txim.addSimpleMsgListener(function(res) {
			// 	console.log(res);
			// });
		},
		methods: {
			onUserVideoAvailable(data) {

				var userId = data.userId;
				var available = data.available;

				var remoteVideoView = this.$refs.remoteVideoView;
				if (available) {
					this.remoteVideoHeight = 300;
					remoteVideoView.startRemoteView(userId);
				} else {
					this.remoteVideoHeight = 0;
					remoteVideoView.stopRemoteView(userId);
				}
			},
			anchorEnterRoom() {
				this.isAnchor = true;

				//加入房间
				var scene = 1; //视频通话 = 0;视频互动直播 = 1;语音通话 = 2;语音互动直播 = 3;

				sdkwx.enterRoom({
					sdkAppId: this.sdkAppId,
					roomId: this.roomId,
					role: 20, //20主播 21 观众
					...this.u1
				}, scene);

				// //登录IM
				// var that = this;
				// txim.login(userID, userSig, function(res) {
				// 	console.log(res);
				// 	if (res.code == 0) {
				// 		console.log("login im success");
				// 		//创建群
				// 		that.createGroup();
				// 	}
				// });

				//开启音频
				sdkwx.startLocalAudio();

				//开始视频
				var videoView = this.$refs.videoView;
				videoView.startLocalPreview(true); //true为前置摄像头 false为后置摄像头
			},
			audienceEnterRoom() {
				//观众加入房间
				var scene = 1; //视频通话 = 0;视频互动直播 = 1;语音通话 = 2;语音互动直播 = 3;
				var userID = "1"; //用户id
				var userSig =
					"eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwoZQweKU7MSCgswUJStDEwMDYwsLI2MTiExqRUFmUSpQ3NTU1MjAwAAiWpKZCxaztDS3sDSwNIOakpkONDOkIEY-OEY-Ncq83Mki1TkkO6SqssLfxSw8J8rHrzilOCsyMqksKTzEwiMg0tNWqRYAeHIwwQ__";
				sdkwx.enterRoom({
					sdkAppId: this.sdkAppId,
					roomId: this.roomId,
					role: 21, //20主播 21 观众
					userId: userID,
					userSig: userSig
				}, scene);

				// //登录IM
				// var that = this;
				// txim.login(userID, userSig, function(res) {
				// 	console.log(res);
				// 	if (res.code == 0) {
				// 		console.log("login im success");
				// 		//加入群
				// 		that.joinGroup();
				// 	}
				// });
			},
			startVideo() {
				//设置角色主播
				sdkwx.switchRole(20); //20主播 21 观众

				//开启音频
				sdkwx.startLocalAudio();

				//开始视频
				var videoView = this.$refs.videoView;
				videoView.startLocalPreview(true);
			},
			stopVideo() {
				//设置角色观众
				sdkwx.switchRole(21); //20主播 21 观众

				//停止音频
				sdkwx.stopLocalAudio();

				//停止视频
				var videoView = this.$refs.videoView;
				videoView.stopLocalPreview();
			},
			exitRoom() {
				//退出房间
				sdkwx.exitRoom();

				// if (this.isAnchor) {
				// 	//解散群
				// 	var groupID = this.roomId;
				// 	txim.dismissGroup(groupID, function(res) {
				// 		console.log(res);
				// 	});
				// } else {
				// 	//退出群
				// 	var groupID = this.roomId;
				// 	txim.quitGroup(groupID, function(res) {
				// 		console.log(res);
				// 	});
				// }
			},
			createGroup() {
				// //创建群
				// var groupType = "AVChatRoom";
				// var groupID = this.roomId;
				// var groupName = this.roomId;
				// txim.createGroup(groupType, groupID, groupName, function(res) {
				// 	console.log(res);
				// });
			},
			joinGroup() {
				// //加入群
				// var groupID = this.roomId;
				// var message = "";
				// txim.joinGroup(groupID, message, function(res) {
				// 	console.log(res);
				// });
			},
			sendMessage() {
				// //发群消息
				// var text = "test text";
				// var groupID = this.roomId;
				// var priority = 1;
				// txim.sendGroupTextMessage(text, groupID, priority, function(res) {
				// 	console.log(res);
				// });
				// //发送自定义消息
				// /*var customData = "";
				// txim.sendGroupCustomMessage(customData, groupID, priority, function(res){
				// 	console.log(res);
				// });//*/
			}
		}
	}
</script>
