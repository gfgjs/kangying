<template>
	<view>
		<!-- <view class="null-nav"></view>
		<view class="nav">
			<uni-icons type="arrowleft" color="white" size="24" @click="back"></uni-icons>
			<view>
				天心在线医疗
			</view>
			<view class="right">
				<image class="doctor" src="../static/home/15.png" mode=""></image>
				<image class="message" src="../static/home/12.png" mode="" @click="navTo('我的消息')"></image>
				<uni-icons type="contact" color="white" size="30"></uni-icons>
				<uni-icons type="chat" color="white" size="30"></uni-icons>
			</view>
		</view> -->
		<navBar backButton title="网上看病"></navBar>
		<view class="search-wrap">
			<view class="search">
				<uni-icons type="mic-filled" color="#C9C9C9" size="24"></uni-icons>
				<input type="text" placeholder="找医生、找医院、查疾病">
				<uni-icons type="search" color="#C9C9C9" size="24"></uni-icons>
			</view>
		</view>
		<view class="wrap">
			
			<view class="title">
				<view class="blue"></view>
				<view class="text">快速匹配</view>
			</view>
			<view class="list quick">
				<view v-for="item in quickList" :key="item">{{item}}</view>
			</view>
			<view class="title">
				<view class="blue"></view>
				<view class="text">选择门诊</view>
			</view>
			<view class="list select">
				<view class="item" v-for="i in 20" :key="i">
					<image class="head" src="../../../static/seethedoctor/1.png" mode=""></image>
					<view class="middle">
						<view class="title">儿科</view>
						<view class="text">尿频、尿急、尿痛、尿结石以及尿道感染等泌尿</view>
					</view>
					<uni-icons type="arrowright" size="24"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	 import navBar from "../../../components/nav-bar.vue"
	export default {
		components:{navBar},
		data() {
			return {
				quickList:['流感','用药咨询','腰间盘突出','疫苗咨询','护肤','美容整形','慢性咽炎','风湿病炎症','宝宝健康','牙龈牙周炎','月经不调','感冒']
			};
		},
		methods:{
			back(){
				uni.navigateBack({})
			}
		}
	}
</script>

<style lang="less">
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	page,
	.page {
		background-color: #f7f8fa;
		height: 100vh;
		width: 100vw;
	}


	.null-nav {
		background-color: #1D7FFD;
	}

	.nav {
		width: 100vw;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		background-color: #1D7FFD;
		color: white;

		.right {
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 100px;
			height: 100%;

			.doctor {
				height: 36px;
				width: 36px;
			}

			.message {
				height: 32px;
				width: 32px;
			}
		}

		input {
			height: 30px;
			border: 1px solid #eeeeee;
			padding: 4px 10px;
			border-radius: 6px;

		}
	}

	.search-wrap {
		width: 100vw;
		background-color: #1D7FFD;
		height: 80px;
		position: relative;
		box-shadow: 0px 6px 20px 0px #1D7FFD;
		z-index: 1;
		.search {
			width: 92vw;
			height: 42px;
			position: absolute;
			left: 4vw;
			top: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			background: rgba(255, 255, 255, 1);
			border-radius: 43px;

			image {
				height: 24px;
				width: 22px;
			}
		}
	}
	.wrap{
		box-sizing: border-box;
		overflow-y: scroll;
		height: calc(100vh - 168px);
		background-color: white;
		padding: 0 10px;
		>.title{
			padding: 20px 0;
			display: flex;
			align-items: center;
			.blue{
				width:4px;
				height: 20px;
				background-color: red;
				background:rgba(29,127,253,1);
				box-shadow:0px 8px 21px 0px rgba(36,131,253,0.3);
				border-radius: 4px;
			}
			.text{
				padding-left: 10px;
				font-size: 16px;
				font-weight: bold;
			}
		}
		.quick{
			display: flex;
			flex-wrap: wrap;
			view{
				margin-right: 15px;
				margin-bottom: 15px;
				border:1px solid rgba(243,243,243,1);
				border-radius: 100px;
				color:rgba(51,51,51,1);
				padding: 4px 8px;
				font-size: 14px;
			}
		}
		.select{
			.item{
				display: flex;
				align-items: center;
				padding: 20px 0;
				border-bottom: 1px solid #f0f0f0;
				.head{
					height: 50px;
					width: 50px;
				}
				.middle{
					width: 80%;
					padding-left: 10px;
					.title{
						font-size: 16px;
						font-weight: bold;
					}
					.text{
					
						font-size: 14px;
						color: #656565;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
				.arrow{
					height: 20px;
					width: 12px;
				}
			}
		}
	}
</style>
