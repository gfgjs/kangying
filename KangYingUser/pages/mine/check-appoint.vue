<template>
	<view>
		<div class="common-place"></div>
		<div class="common-place"></div>
		<view class="row-title">基础体检套餐</view>
		<view class="item" v-for="(item,index) in list" :key='index' @click="viewItem(item)">
			<view class="row">
				<view class="title">{{item.main_title}}</view>
				<view class="price">￥{{item.price}}</view>
			</view>
			<view class="row">
				<view class="tags">
					<view class="tag">{{item.sub_title}}</view>
					<!-- <view class="tag">动脉硬化检测</view> -->
				</view>
				<view class="button" @click.stop="appoint(item)">立即预约</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {request_examList} from '../../common/https.js'
	export default {
		data() {
			return {
				list:[]
			};
		},
		onLoad() {
			request_examList({
				uni,
				data:{
					page_size:100
				}
			}).then(res=>{
				if(res.code===0){
					this.list = res.data
				}else{
					this.$api.msg(res.err)
				}
			})
		},
		methods:{
			viewItem(item){
				this.$pageTo({
					url:'/pages/mine/check-details',
					options:{
						id:item.id
					}
				})
			},
			appoint(item){
				this.$pageTo({
					needLogin:true,
					url:'/pages/mine/create-check-order',
					options:{
						id:item.id,
						price:item.price
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.common-place{
		background-color: rgba(247,251,255,1);
	}
	page{
		// padding: 0 20px;
	}
	.item{
		width: calc(100vw - 40px);
		margin: 0 auto;
		padding: 20px 0;
		.row{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 0;
			.title{
				font-weight: 400;
			}
			.price{
				color: $base-color;
			}
			
			.tags{
				display: flex;
				.tag{
					font-size: 12px;
					color: $base-color;
					background:rgba(240,247,255,1);
					border-radius:26px;
					padding: 4px 10px;
					margin-right: 6px;
				}
			}
			.button{
				width: 100px;
			}
		}
		border-top: solid 1px #F8F5F5;
	}
</style>
