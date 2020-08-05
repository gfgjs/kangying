<!-- 咨询服务台 -->
<template>
	<view>
		<view class="header">
			<view class="buttons-box">
				<view class="item" v-for="(item,index) in tabs" :key="item" @click="clickTab(item,index)" :class="index==currIndex&&'item-checked'">{{item}}</view>
			</view>
		</view>
		<view class="header-place"></view>
		<view class="item-content" v-for="i in chatList" :key='i.username' @click="toChat(i)">
			<image :src="i.headImage" mode=""></image>
			<view class="right">
				<view class="name">{{i.nickName}}</view>
				<view class="text" v-if="i.lastMessage&&i.lastMessage.msg_type==='image'">{{i.lastMessage.from_name}}：[图片]</view>
				<view class="text" v-else-if="i.lastMessage">{{(i.lastMessage.from_name||'我')+'：'+i.lastMessage.msg_body.text}}</view>
				<view class="text" v-else>暂无最新消息</view>
			</view>
		</view>
		<view class="no-data" v-if="!chatList.length">暂无数据</view>
		<!-- <view class="row-title">测试用</view>
		<view class="item-content" v-for="i in testList" :key='i.username+1' @click="toChat(i)">
			<image src="../../static/home/1.png" mode=""></image>
			<view class="right">
				<view class="name">{{i.nickName}}</view>
				<view class="text">{{i.username}}</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				currIndex: 0,
				tabs: ['当前对话', '历史对话'],
				chatList: [],
				testList: []
			};
		},
		watch: {
			jimHasLogin(e) {
				if(e){
					this.jimfun()
				}
			},
			jimMsgs(){
				this.showNewMsg()
			}
		},
		onShow() {
			if (this.jimHasLogin) {				
				this.jimfun()
			}
		},
		methods: {
			getHeadImage() {
				this.chatList.map((item,index)=>{
					this.$jim.getResource({
						media_id: item.avatar
					}).onSuccess(e => {
						if (!item.headImage) {
							this.$set(this.chatList[index], 'headImage', e.url)
						}
					})
				})
			},
			jimfun(){
				this.$jim.getConversation().onSuccess(e => {
					this.chatList = e.conversations
					this.showNewMsg()
				})
				this.$jim.onSyncConversation(data => {
					data.forEach(item=>{
						this.UPDATE_JIMMSGS({
							from_username: item.from_username,
							msgs: item.msgs.map(i=>{
								return i.content
							})
						})
					})
				})
			},
			// 在消息列表上显示最新消息
			showNewMsg(){
				const array = this.chatList.map(item=>{
					const m = this.jimMsgs[item.username]
					if(m){
						const l = m.length
						item.lastMessage = m[l-1]
					}
					return item
				})
				this.chatList = array.reverse()
				setTimeout(()=>{
					this.getHeadImage()
				})
			},
			clickTab(item, index) {
				this.currIndex = index
			},
			toChat(t) {
				this.$pageTo({
					uni,
					url: '/pages/doctor/chat',
					options:{
						im_username:t.username
					}
				})
			},
			...mapActions(['UPDATE_JIMMSGS'])
		},
		computed: {
			...mapGetters(['jimHasLogin','jimMsgs'])
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $page-color-base;
	}

	.header-place {
		height: 64px;
	}

	.header {
		position: fixed;
		width: 100%;
		padding: 10px 0;
		height: 64px;
		background-color: $base-color;
		z-index: 1;

		.buttons-box {
			display: flex;
			height: 44px;
			// width: 50%;
			border: 1px solid white;
			border-radius: 4px;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);

			.item {
				width: 30vw;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 16px;
				color: white;
				transition: all linear .1s;
				// border: 1px solid white;
			}

			.item-checked {
				color: $base-color;
				background-color: white;
			}
		}
	}

	.item-content {
		padding: 0 30px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 74px;

		image {
			width: 50px;
			height: 50px;
			border-radius: 50%;
		}

		.right {
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 70%;

			.name {
				font-size: 16px;
				color: #494949;
			}

			.text {
				margin-top: 5px;
				font-size: 14px;
				color: #9E9E9E;
				width: 100%;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
		}
	}
</style>
