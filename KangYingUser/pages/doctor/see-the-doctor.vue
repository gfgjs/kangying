<template>
	<view>
		<view class="nav-place"></view>
		<view class="wrap">
			<view class="title">
				<view class="blue"></view>
				<view class="text">快速匹配</view>
			</view>
			<view class="list quick">
				<view v-for="item in quickList" :key="item">{{item.label}}</view>
			</view>
			<view class="title">
				<view class="blue"></view>
				<view class="text">选择门诊</view>
			</view>
			<view class="list select">
				<view class="item" v-for="i in cates" :key="i">
					<image class="head" src="../../static/home/11.png" mode=""></image>
					<view class="middle">
						<view class="title">{{i.label}}</view>
						<view class="text">尿频、尿急、尿痛、尿结石以及尿道感染等泌尿</view>
					</view>
					<uni-icons type="arrowright" size="24"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {request_cates} from '../../common/https.js'
	export default {
		data() {
			return {
				quickList:[],
				cates:[]
			};
		},
		onShow() {
			request_cates({
				uni
			
			}).then(res=>{
				if(res.code===0){
					this.quickList = res.data.splice(0,1)[0].children
					this.cates = res.data
				}else{
					this.$api.msg(res.err)
				}
				console.log(res);
			})
		}
	}
</script>

<style lang="scss">
	.nav-place{
		background-color: $base-color;
	}
	.wrap{
		box-sizing: border-box;
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
