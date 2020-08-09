<!-- 咨询服务台 -->
<template>
	<view>
		<view class="header">
			<view class="buttons-box">
				<view class="item" v-for="(item,index) in tabs" :key="item" @click="clickTab(item,index)" :class="index==currIndex&&'item-checked'">{{item}}</view>
			</view>
		</view>
		<view class="header-place"></view>
		<view class="item-content" v-for="(item,index) in chatList" @click="toChat(item)" :key='index'>
			<image :src="item.avatar" mode=""></image>
			<view class="right">
				<view class="name">{{item.nickName}}</view>
				<view class="text">{{item.lastMessage.from_name+'： '+item.lastMessage.msg_body.text}}</view>
			</view>
		</view>
		<view class="no-data" v-if="!chatList.length">暂无数据</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	import {request_recordList} from '../../common/https.js'
	export default {
		data() {
			return {
				currIndex: 0,
				tabs: ['当前对话', '历史对话'],
				chatList:[]
			};
		},
		watch:{
			jimHasLogin(status){
				if(status){
					this.jimfun()
				}
			},
			jimMsgs(){
				this.showNewMsg()
			}
		},
		onShow() {
			this.jimHasLogin&&this.jimfun()	
		},
		computed:{
			...mapGetters(['jimMsgs','jimHasLogin'])
		},
		methods: {
			getList(){
				request_recordList({
					uni
				})
			},
			toChat(item){
				uni.navigateTo({
					url:'/pages/doctor/chat?im_username='+item.username
				})
			},
			jimfun(){
				this.$jim.getConversation().onSuccess(e => {
					this.chatList = e.conversations
					this.showNewMsg()
				})				
			},
			// 在消息列表上显示最新消息
			showNewMsg(){
				this.chatList = this.chatList.map(item=>{
					const m = this.jimMsgs[item.username]
					const l = m.length
					item.lastMessage = m[l-1]
					return item
				})
			},
			clickTab(item, index) {
				this.currIndex = index
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: $base-background-color;
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
			box-shadow: 0 0 2px #cccccc;
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
